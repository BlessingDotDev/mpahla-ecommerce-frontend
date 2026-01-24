import axios from 'axios';
import { useEffect, useState } from 'react';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';
import './CheckoutPage.css';

export function CheckoutPage({ cart, loadCart, totalQuanity }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      const response = await axios.get('/api/deliveryoptions');
      setDeliveryOptions(response.data);
    }

    fetchCheckoutData();
  }, []);

  useEffect(() => {
    const fetchPaymentSummary = async () => {
      const response = await axios.get('/api/payment/summary');
      setPaymentSummary(response.data)
    }

    fetchPaymentSummary();
  }, [cart])

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />

      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        {totalQuanity && 
        <div className="page-title">Items: {totalQuanity }</div>
        }

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} cart={cart}/>
        </div>
      </div>
    </>
  );
}
