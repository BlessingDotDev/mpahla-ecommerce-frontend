import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { Header } from '../../components/Header';
import './TrackingPage.css';
import { API_URL } from '../../config.js';

export function TrackingPage({ totalQuantity }) {
  const [order, setOrder] = useState(null);
  const { orderId, productId } = useParams();

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(`${API_URL}/api/orders/${orderId}`);
      setOrder(response.data);
    };

    fetchTrackingData();
  }, [orderId]);

  if (!order) return null;

  // find correct product
  const orderProduct = order.products.find(
    (item) => item.product._id === productId
  );

  if (!orderProduct) return null;

  //  convert order time to ms
  const orderTimeMs = dayjs(order.orderTime).valueOf();

  // convert delivery days → ms
  const deliveryDaysMs =
    orderProduct.deliveryOption.deliveryDays * 24 * 60 * 60 * 1000;

  // calculate estimated delivery time
  const estimatedDeliveryTimeMs = orderTimeMs + deliveryDaysMs;

  const timePassedMs = dayjs().valueOf() - orderTimeMs;

  let deliveryPercent = (timePassedMs / deliveryDaysMs) * 100;
  deliveryPercent = Math.min(deliveryPercent, 100);

  const isPreparing = deliveryPercent < 33;
  const isShipped = deliveryPercent >= 33 && deliveryPercent < 100;
  const isDelivered = deliveryPercent === 100;

  return (
    <>
      <title>Tracking</title>

      <Header totalQuantity={totalQuantity} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {isDelivered ? "Delivered on " : "Arriving on "}
            {dayjs(estimatedDeliveryTimeMs).format("dddd, MMMM D")}
          </div>

          <div className="product-info">
            {orderProduct.product.name}
          </div>

          <div className="product-info">
            Quantity: {orderProduct.quantity}
          </div>

          <img
            className="product-image"
            src={orderProduct.product.image}
            alt={orderProduct.product.name}
          />

          <div className="progress-labels-container">
            <div className={`progress-label ${isPreparing ? "current-status" : ""}`}>
              Preparing
            </div>
            <div className={`progress-label ${isShipped ? "current-status" : ""}`}>
              Shipped
            </div>
            <div className={`progress-label ${isDelivered ? "current-status" : ""}`}>
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${deliveryPercent}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
