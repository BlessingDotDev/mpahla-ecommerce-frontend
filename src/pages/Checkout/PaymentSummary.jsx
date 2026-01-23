import axios from 'axios';
import { useNavigate } from 'react-router';
import { formartCurrency } from '../../utils/money.js';

export function PaymentSummary({paymentSummary, loadCart}) {
  const navigate = useNavigate();

  const createOrder = async () => {
    try {
      await axios.post('/api/orders');
      await loadCart();
      navigate('/orders')

    } catch(error) {
      console.log('there was an error', error)
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