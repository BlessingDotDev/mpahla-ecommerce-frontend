import { CheckoutPageHeader } from "./CheckoutPageHeader";
import { CartSummary } from "./CartSummary";
import { OrderSummary } from "./OrderSummary";
import './CheckoutPage.scss';

export function CheckoutPage() {
  return (

    <>
      <CheckoutPageHeader />

      <div className="checkout-main-container">
        <h2 className="page-title">
          Review your order
        </h2>

        <h1 className="checkout-items">Items:(<span className="items js-items">0</span>)</h1>
    
        <div className="main-grid">
          <CartSummary />
          <OrderSummary />
        </div>
      </div>
    </>
  );
}