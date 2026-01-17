import { CheckoutPageHeader } from "./CheckoutPageHeader";
import "./CheckoutPageHeader.css"

export function CheckoutPage() {
  return (

    <>
      <CheckoutPageHeader />

      <div className="main-container">
        <h2 className="page-title">
          Review your order
        </h2>

        <div className="main-grid">
          <div className="cart-summary-container js-cart-summary-container">
          </div>

          <div className="order-summary-section js-order-summary-section">

          </div>
        </div>
      </div>
    </>
  );
}