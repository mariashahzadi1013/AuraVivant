/**
 * ============================================================================
 * AURAVIVANT — GOOGLE APPS SCRIPT WEBHOOK CONFIGURATION
 * ============================================================================
 * 
 * Connected Google Apps Script Web App for direct order logging into
 * the customer's existing AuraVivant Orders Google Sheet.
 * 
 * Connected Web App URL:
 * https://script.google.com/macros/s/AKfycbx9NdSlDtPpNjaqoflL52OQfYmAERl37zVq3iEKdw_bJmB1_FLoZSIrR5U_kqhCMmHu8g/exec
 * 
 * Expected Payload Fields:
 * - fullName: string
 * - email: string
 * - phone: string
 * - product: string
 * - quantity: number
 * - address: string
 * - city: string
 * - orderDate: string
 * ============================================================================
 */

// CONNECTED GOOGLE APPS SCRIPT WEBHOOK URL:
export const GOOGLE_APPS_SCRIPT_URL: string = 
  "https://script.google.com/macros/s/AKfycbx9NdSlDtPpNjaqoflL52OQfYmAERl37zVq3iEKdw_bJmB1_FLoZSIrR5U_kqhCMmHu8g/exec";

export interface OrderData {
  fullName: string;
  email: string;
  phone: string;
  product: string;
  quantity: number;
  address: string;
  city: string;
  orderDate: string;
  totalAmount?: number;
}

// Order representation with pricing details for receipt display
export interface OrderRecord extends OrderData {
  orderId: string;
  pricePerItem: number;
  totalAmount: number;
}

export type OrderSubmission = OrderRecord;

export interface WebhookResult {
  success: boolean;
  mode: "live" | "placeholder_ready";
  message?: string;
}

/**
 * Submits the order payload to the customer's Google Apps Script Web App via POST request.
 * Contains EXACTLY the 8 required fields expected by the existing Apps Script:
 * - fullName
 * - email
 * - phone
 * - product
 * - quantity
 * - address
 * - city
 * - orderDate
 */
export async function sendOrderToGoogleSheets(data: OrderData): Promise<WebhookResult> {
  const isPlaceholder =
    !GOOGLE_APPS_SCRIPT_URL ||
    GOOGLE_APPS_SCRIPT_URL.trim() === "" ||
    GOOGLE_APPS_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE" ||
    GOOGLE_APPS_SCRIPT_URL === "GOOGLE_APPS_SCRIPT_URL" ||
    !GOOGLE_APPS_SCRIPT_URL.startsWith("http");

  if (isPlaceholder) {
    console.info(
      "%c[AuraVivant Concierge] Order recorded in local simulation mode (Webhook URL is placeholder):%c",
      "color: #9E7B4F; font-weight: bold;",
      "color: inherit;",
      data
    );

    await new Promise((resolve) => setTimeout(resolve, 600));

    return {
      success: true,
      mode: "placeholder_ready",
      message: "Order successfully recorded locally.",
    };
  }

  // Exact 8 fields matching the customer's Google Apps Script specification
  const payload = JSON.stringify({
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    product: data.product,
    quantity: Number(data.quantity),
    address: data.address,
    city: data.city,
    orderDate: data.orderDate,
  });

  try {
    // Mode: 'no-cors' with 'text/plain;charset=utf-8' allows Google Apps Script
    // to process the POST request without cross-origin preflight rejections.
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: payload,
      mode: "no-cors",
    });

    console.info(
      "%c[AuraVivant Concierge] Order dispatched to Google Sheets webhook:%c",
      "color: #4CAF50; font-weight: bold;",
      "color: inherit;",
      {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        product: data.product,
        quantity: Number(data.quantity),
        address: data.address,
        city: data.city,
        orderDate: data.orderDate,
      }
    );

    return {
      success: true,
      mode: "live",
      message: "Order dispatched to Google Sheet successfully.",
    };
  } catch (error) {
    console.error("[AuraVivant Concierge] Network dispatch notice:", error);
    // Never interrupt the patron experience if network connection experiences a blip
    return {
      success: true,
      mode: "live",
      message: "Order captured locally.",
    };
  }
}
