import { CartItemDetails } from './CartItemDetails.jsx';
import { DeliveryDate } from './DeliveryDate.jsx';
import { DeliveryOptions } from './DeliveryOptions.jsx';

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {
  
        return (
          <div key={cartItem.id} className="cart-item-container">
            <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions} />

            <div className="cart-item-details-grid">
              <CartItemDetails cartItem={cartItem} loadCart={loadCart}/>

              <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}