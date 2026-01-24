import dayjs from 'dayjs';
import axios from 'axios';
import { Link } from 'react-router';
import { Fragment } from 'react';
import BuyAgainIcon from '../../assets/images/icons/buy-again.png';

export function OrdersDetailsGrid({ order, loadCart}) {
  
  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => {
      
        const addToCart = async () => {
          await axios.post('/api/cart', {
            product: orderProduct.product._id,
            quantity: 1,
            deliveryOption: '6971e3c1535c8bfb31e97d7c'
          })

          await loadCart();
        }

        return (
          <Fragment key={orderProduct.product._id}>
            <div className="product-image-container">
              <img src={orderProduct.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">
                {orderProduct.product.name}
              </div>
              <div className="product-delivery-date">
                Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
              </div>
              <div className="product-quantity">
                Quantity: {orderProduct.quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src={BuyAgainIcon} />
                <span className="buy-again-message" onClick={addToCart} 
                  >
                  Add to Cart
                </span>
              </button>
            </div>

            <div className="product-actions">
              <Link to={`/tracking/${order._id}/${orderProduct.product._id}`}>
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>

          </Fragment>
        );
      })}
    </div>
  );
}