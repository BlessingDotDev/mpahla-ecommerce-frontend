import axios from 'axios';
import { formartCurrency } from '../../utils/money.js';
import { useEffect } from 'react'
import {useNavigate } from "react-router"

export function PaymentSummary({ paymentSummary, loadCart, cart }) {
  const navigate = useNavigate();

  const orderCart = cart.map(item => ({
    product: item.product._id,
    quantity: item.quantity,
    deliveryOption: item.deliveryOption._id
  }));

  const createOrder = async () => {
    try {
  await axios.post('/api/orders', {
    cart: orderCart,
    totalPriceCents: paymentSummary.totalCents
  });

  await loadCart();
  navigate('/orders');

} catch (error) {
  console.log('STATUS:', error.response?.status);
  console.log('BACKEND MESSAGE:', error.response?.data);
}
  }

  return (
    <div className="payment-summary">
      <div className="payment-summary-title">
        Payment Summary
      </div>

      {paymentSummary && (
        <>
          <div className="payment-summary-row">
            <div>Items ({paymentSummary.quantity}):</div>
            <div className="payment-summary-money">
              {formartCurrency(paymentSummary.productPriceCents)}
            </div>
          </div>

          <div className="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div className="payment-summary-money">
              {formartCurrency(paymentSummary.shippingPriceCents)}
            </div>
          </div>

          <div className="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div className="payment-summary-money">
              {formartCurrency(paymentSummary.totalBeforeTax)}
            </div>
          </div>

          <div className="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div className="payment-summary-money">
              {formartCurrency(paymentSummary.taxCents)}
            </div>
          </div>

          <div className="payment-summary-row total-row">
            <div>Order total:</div>
            <div className="payment-summary-money">
              {formartCurrency(paymentSummary.totalCents)}
            </div>
          </div>

          <button className="place-order-button button-primary"
            onClick={createOrder}>
            Place your order
          </button>
        </>
      )}
    </div>
  );
}