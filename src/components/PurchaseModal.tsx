import React, { useState, useEffect } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { sendOrderToGoogleSheets, OrderRecord } from '../config/webhook';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Loader2, 
  PackageCheck,
  AlertCircle
} from 'lucide-react';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: Product | null;
  initialQuantity?: number;
  onOrderCompleted?: (order: OrderRecord) => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  initialQuantity = 1,
  onOrderCompleted,
}) => {
  // Form Input States
  const [productId, setProductId] = useState<string>(selectedProduct?.id || PRODUCTS[0].id);
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  // UI & Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<OrderRecord | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Sync state whenever selected product or initialQuantity changes when opening
  useEffect(() => {
    if (selectedProduct) {
      setProductId(selectedProduct.id);
      setQuantity(initialQuantity > 0 ? initialQuantity : 1);
    }
    if (isOpen) {
      setIsSuccess(false);
      setErrors({});
      setTouched({});
    }
  }, [selectedProduct, initialQuantity, isOpen]);

  if (!isOpen) return null;

  const currentProduct = PRODUCTS.find((p) => p.id === productId) || selectedProduct || PRODUCTS[0];
  const totalAmount = currentProduct.price * (quantity > 0 ? quantity : 1);

  // Validate form fields according to exact requirements:
  // - Full Name is not empty
  // - Email has a valid email format
  // - Phone Number is not empty
  // - Delivery Address is not empty
  // - City is not empty
  // - Quantity must be at least 1
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    // 1. Full Name
    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Please provide a valid full name.';
    }

    // 2. Email Address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailPattern.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    // 3. Phone Number
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number.';
    } else if (phone.trim().replace(/\D/g, '').length < 6) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    // 4. Quantity (must be at least 1)
    if (!quantity || Number(quantity) < 1) {
      newErrors.quantity = 'Quantity must be at least 1.';
    }

    // 5. Delivery Address
    if (!address.trim()) {
      newErrors.address = 'Please enter your delivery address.';
    }

    // 6. City
    if (!city.trim()) {
      newErrors.city = 'Please enter your city.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const resetFormFields = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCity('');
    setQuantity(1);
    setErrors({});
    setTouched({});
  };

  const handleClose = () => {
    if (isSuccess) {
      resetFormFields();
      setIsSuccess(false);
      setConfirmedOrder(null);
    }
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      quantity: true,
      address: true,
      city: true,
    });

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const now = new Date();
    const orderDate = now.toISOString();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `AV-${now.getFullYear()}-${randomSuffix}`;

    const orderPayload = {
      orderId,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      product: currentProduct.name,
      quantity: Number(quantity),
      pricePerItem: currentProduct.price,
      totalAmount,
      address: address.trim(),
      city: city.trim(),
      orderDate,
    };

    try {
      // Sends JSON data with: fullName, email, phone, product, quantity, address, city, orderDate
      await sendOrderToGoogleSheets(orderPayload);

      // Save confirmed order for receipt display
      setConfirmedOrder(orderPayload);
      setIsSuccess(true);

      if (onOrderCompleted) {
        onOrderCompleted(orderPayload);
      }

      // Exact requirement: Clear/reset the form after successful submission
      resetFormFields();
    } catch (err) {
      console.error('[AuraVivant] Submission issue:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#D5CABB] shadow-2xl transition-all my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#EAE4D8] flex items-center justify-between bg-[#F6F3EC]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#9E7B4F] block mb-0.5">
              AuraVivant Concierge Order
            </span>
            <h2 className="font-serif text-2xl text-[#1C1A18] font-medium">
              {isSuccess ? 'Order Confirmation' : 'Purchase Order Request'}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-[#6B6258] hover:text-[#1C1A18] transition-colors focus-visible:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Modal Body: Success Message vs Form */}
        {isSuccess && confirmedOrder ? (
          <div className="p-8 sm:p-10 text-center animate-fadeIn">
            {/* Elegant Checkmark Icon */}
            <div className="w-16 h-16 rounded-full bg-[#EAE3D4] border border-[#D3C5B1] mx-auto flex items-center justify-center text-[#9E7B4F] mb-6">
              <CheckCircle2 className="w-8 h-8 text-[#9E7B4F]" />
            </div>

            {/* Exact Required Success Headlines */}
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A18] font-medium mb-3 leading-snug">
              Thank you for choosing AuraVivant. Your order request has been received.
            </h3>
            
            <p className="text-base text-[#4E473F] font-light max-w-md mx-auto mb-8">
              Your selected product and delivery details have been recorded.
            </p>

            {/* Recorded Order Summary Receipt */}
            <div className="p-6 bg-[#F6F3EC] border border-[#E7DFD1] text-left max-w-lg mx-auto mb-8 space-y-3.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center pb-3 border-b border-[#E0D7C6]">
                <span className="text-[#7A6F62] uppercase tracking-wider text-[11px] font-medium">Order Reference</span>
                <span className="font-serif text-base font-semibold text-[#1C1A18]">{confirmedOrder.orderId}</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span className="text-[#7A6F62]">Selected Product:</span>
                <span className="font-medium text-[#1C1A18] text-right">{confirmedOrder.product}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#7A6F62]">Quantity:</span>
                <span className="font-medium text-[#1C1A18]">{confirmedOrder.quantity} unit(s)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#7A6F62]">Total Amount:</span>
                <span className="font-serif text-base font-semibold text-[#1C1A18]">${confirmedOrder.totalAmount} USD</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#EAE3D6]">
                <span className="text-[#7A6F62]">Full Name:</span>
                <span className="text-[#1C1A18] font-medium">{confirmedOrder.fullName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#7A6F62]">Email Address:</span>
                <span className="text-[#1C1A18]">{confirmedOrder.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#7A6F62]">Phone Number:</span>
                <span className="text-[#1C1A18]">{confirmedOrder.phone}</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span className="text-[#7A6F62]">Delivery Address:</span>
                <span className="text-[#1C1A18] text-right">{confirmedOrder.address}, {confirmedOrder.city}</span>
              </div>
            </div>

            <p className="text-xs text-[#70665B] max-w-md mx-auto mb-8 leading-relaxed">
              A confirmation email and tracking notice will be dispatched to <strong className="text-[#1C1A18]">{confirmedOrder.email}</strong> as our Parisian atelier prepares your parcel.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1C1A18] text-[#FAF8F5] text-xs font-semibold tracking-[0.18em] uppercase border border-[#1C1A18] hover:bg-[#9E7B4F] hover:border-[#9E7B4F] transition-all duration-300 cursor-pointer shadow-xs"
              >
                Continue Exploring AuraVivant
              </button>
              <button
                type="button"
                onClick={() => {
                  resetFormFields();
                  setIsSuccess(false);
                  setConfirmedOrder(null);
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-transparent text-[#3A3530] text-xs font-medium tracking-[0.16em] uppercase border border-[#D5CABB] hover:border-[#1C1A18] hover:bg-[#F2ECE1] transition-all duration-300 cursor-pointer"
              >
                Place Another Order
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 space-y-5">
            
            {/* Selected Product & Quantity Section */}
            <div className="p-4 bg-[#F5F1E8] border border-[#E5DDD0] space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                
                {/* Selected Product Dropdown / Display */}
                <div className="sm:col-span-8">
                  <label htmlFor="av-product-select" className="text-xs uppercase tracking-wider text-[#574F46] font-medium block mb-1.5">
                    Selected Product <span className="text-[#9E7B4F]">*</span>
                  </label>
                  <select
                    id="av-product-select"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#D5CABB] px-3.5 py-2.5 text-sm text-[#1C1A18] font-serif font-medium focus:outline-none focus:border-[#9E7B4F] cursor-pointer"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — ${p.price} USD
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-[#7A6E62] mt-1 italic">
                    {currentProduct.shortDescription} ({currentProduct.size})
                  </p>
                </div>

                {/* Quantity Input */}
                <div className="sm:col-span-4">
                  <label htmlFor="av-quantity-input" className="text-xs uppercase tracking-wider text-[#574F46] font-medium block mb-1.5">
                    Quantity <span className="text-[#9E7B4F]">*</span>
                  </label>
                  <div className="flex items-center border border-[#D5CABB] bg-[#FAF8F5]">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      disabled={quantity <= 1}
                      className="px-3 py-2 text-sm font-semibold text-[#544C43] hover:text-[#1C1A18] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      id="av-quantity-input"
                      type="number"
                      min="1"
                      max="99"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value, 10);
                        setQuantity(isNaN(val) ? 1 : val);
                      }}
                      onBlur={() => handleBlur('quantity')}
                      className="w-full text-center text-sm font-serif font-medium bg-transparent focus:outline-none tabular-nums py-2"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-2 text-sm font-semibold text-[#544C43] hover:text-[#1C1A18] cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  {errors.quantity && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.quantity}</span>
                    </p>
                  )}
                </div>

              </div>
            </div>

            {/* Customer Details Form Fields */}
            <div className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label htmlFor="av-fullName" className="text-xs uppercase tracking-wider text-[#574F46] font-medium block mb-1.5">
                  Full Name <span className="text-[#9E7B4F]">*</span>
                </label>
                <input
                  id="av-fullName"
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                  }}
                  onBlur={() => handleBlur('fullName')}
                  className={`w-full bg-[#FAF8F5] border px-4 py-2.5 text-sm text-[#1C1A18] placeholder-[#A3978A] focus:outline-none focus:border-[#9E7B4F] transition-colors ${
                    errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#D5CABB]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email Address & Phone Number Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Email Address */}
                <div>
                  <label htmlFor="av-email" className="text-xs uppercase tracking-wider text-[#574F46] font-medium block mb-1.5">
                    Email Address <span className="text-[#9E7B4F]">*</span>
                  </label>
                  <input
                    id="av-email"
                    type="email"
                    required
                    placeholder="elena@domain.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                    }}
                    onBlur={() => handleBlur('email')}
                    className={`w-full bg-[#FAF8F5] border px-4 py-2.5 text-sm text-[#1C1A18] placeholder-[#A3978A] focus:outline-none focus:border-[#9E7B4F] transition-colors ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#D5CABB]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="av-phone" className="text-xs uppercase tracking-wider text-[#574F46] font-medium block mb-1.5">
                    Phone Number <span className="text-[#9E7B4F]">*</span>
                  </label>
                  <input
                    id="av-phone"
                    type="tel"
                    required
                    placeholder="+1 (555) 234-5678"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                    }}
                    onBlur={() => handleBlur('phone')}
                    className={`w-full bg-[#FAF8F5] border px-4 py-2.5 text-sm text-[#1C1A18] placeholder-[#A3978A] focus:outline-none focus:border-[#9E7B4F] transition-colors ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#D5CABB]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Delivery Address */}
              <div>
                <label htmlFor="av-address" className="text-xs uppercase tracking-wider text-[#574F46] font-medium block mb-1.5">
                  Delivery Address <span className="text-[#9E7B4F]">*</span>
                </label>
                <input
                  id="av-address"
                  type="text"
                  required
                  placeholder="Street name, apartment, suite or villa number"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    if (errors.address) setErrors((prev) => ({ ...prev, address: '' }));
                  }}
                  onBlur={() => handleBlur('address')}
                  className={`w-full bg-[#FAF8F5] border px-4 py-2.5 text-sm text-[#1C1A18] placeholder-[#A3978A] focus:outline-none focus:border-[#9E7B4F] transition-colors ${
                    errors.address ? 'border-red-500 bg-red-50/20' : 'border-[#D5CABB]'
                  }`}
                />
                {errors.address && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.address}</span>
                  </p>
                )}
              </div>

              {/* City */}
              <div>
                <label htmlFor="av-city" className="text-xs uppercase tracking-wider text-[#574F46] font-medium block mb-1.5">
                  City <span className="text-[#9E7B4F]">*</span>
                </label>
                <input
                  id="av-city"
                  type="text"
                  required
                  placeholder="e.g. Paris, London, New York, Tokyo..."
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    if (errors.city) setErrors((prev) => ({ ...prev, city: '' }));
                  }}
                  onBlur={() => handleBlur('city')}
                  className={`w-full bg-[#FAF8F5] border px-4 py-2.5 text-sm text-[#1C1A18] placeholder-[#A3978A] focus:outline-none focus:border-[#9E7B4F] transition-colors ${
                    errors.city ? 'border-red-500 bg-red-50/20' : 'border-[#D5CABB]'
                  }`}
                />
                {errors.city && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.city}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Order Calculation Bar */}
            <div className="pt-4 border-t border-[#EAE4D8] flex items-center justify-between text-sm">
              <div className="text-xs text-[#7A6E62]">
                <span>Complimentary Delivery &amp; Bespoke Gifting Box</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#7A6E62] mr-2">Total Amount:</span>
                <span className="font-serif text-2xl font-semibold text-[#1C1A18] tabular-nums">
                  ${totalAmount} USD
                </span>
              </div>
            </div>

            {/* Prominent "Place Order" Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-[#1C1A18] text-[#FAF8F5] text-xs font-semibold tracking-[0.22em] uppercase border border-[#1C1A18] hover:bg-[#9E7B4F] hover:border-[#9E7B4F] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#FAF8F5]" />
                    <span>Processing Order...</span>
                  </>
                ) : (
                  <span>Place Order</span>
                )}
              </button>
            </div>

            {/* Trust Badges & Webhook Indicator */}
            <div className="flex items-center justify-between text-[11px] text-[#8C8072] pt-2 border-t border-[#EAE4D8]/60">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9E7B4F]" />
                Encrypted Maison Dispatch
              </span>
              <span className="flex items-center gap-1.5">
                <PackageCheck className="w-3.5 h-3.5 text-[#9E7B4F]" />
                Google Sheets Ready
              </span>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
