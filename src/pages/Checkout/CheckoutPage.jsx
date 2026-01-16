import { CheckoutPageHeader } from "./CheckoutPageHeader";
import "./CheckoutPageHeader.css"

export function CheckoutPage() {
  return (

    <>
      <CheckoutPageHeader />

      <div class="main-container">
        <h2 class="page-title">
          Review your order
        </h2>

        <div class="main-grid">
          <div class="cart-summary-container js-cart-summary-container">
          </div>

          <div class="order-summary-section js-order-summary-section">

          </div>
        </div>
      </div>
    </>
  );
}