import axios from 'axios';
import { useEffect, useState } from 'react';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';
import { LoadingEffect } from '../../components/LoadingEffect';
import { Link } from 'react-router';
import './CheckoutPage.css';

export function CheckoutPage({ cart, loadCart, totalQuantity }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      const response = await axios.get('/api/deliveryoptions');
      setDeliveryOptions(response.data);
      setLoading(false);
    }

    fetchCheckoutData();
  }, [deliveryOptions]);

  useEffect(() => {
    const fetchPaymentSummary = async () => {
      const response = await axios.get('/api/payment/summary');
      setPaymentSummary(response.data)
    }

    fetchPaymentSummary();
  }, [cart])

  if (loading) {
    return (
      <LoadingEffect />
    );
  } else {
    return (
      <>
        <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
  
        <title>Checkout</title>
  
        <CheckoutHeader />
  
        <div className="checkout-page">
          <div className="page-titles">
            <div className="page-title">Review your order</div>
            <div className="page-title">Items: {totalQuantity }</div>
          </div>
            <Link to="/orders">
              click to view orders
            </Link>
         
  
          <div className="checkout-grid">
            <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
  
            <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} cart={cart}/>
          </div>
        </div>
      </>
    );
  }
}
