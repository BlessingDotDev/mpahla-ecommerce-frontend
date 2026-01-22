import { CheckoutPageHeader } from "./CheckoutPageHeader";
import { CartSummary } from "./CartSummary";
import { OrderSummary } from "./OrderSummary";
import './CheckoutPage.scss';

export function CheckoutPage({ totalQuantity }) {

  return (

    <>
      <CheckoutPageHeader totalQuantity={totalQuantity} />

      <div className="checkout-main-container">
        <h2 className="page-title">
          Review your order
        </h2>
        <h2> Items: {totalQuantity} </h2>
    
        <div className="main-grid">
          <CartSummary />
          <OrderSummary />
        </div>
      </div>
    </>
  );
}