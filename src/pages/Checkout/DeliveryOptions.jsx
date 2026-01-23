import dayjs from 'dayjs';
import axios from 'axios';
import { formartCurrency } from '../../utils/money.js';

export function DeliveryOptions({deliveryOptions, cartItem, loadCart}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = `FREE Shipping`;

        if (deliveryOption.priceCents > 0) {
          priceString = `${formartCurrency(deliveryOption.priceCents)} - Shipping`
        }

        const updateDeliveryOptions = async (deliveryOptionId) => {
          await axios.put(`/api/cart/${cartItem._id}`, {
            quantity: cartItem.quantity,
            deliveryOptionId: deliveryOptionId
          })
          await loadCart();
        }

        return (
          <div key={deliveryOption._id} className="delivery-option"
            onClick={() => updateDeliveryOptions(deliveryOption._id)}>
            <input type="radio"
              checked={deliveryOption._id === cartItem.deliveryOption._id}
              onChange={() => {}}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.deliveryOption_id}`} />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
              </div>
              <div className="delivery-option-price">
                {priceString}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}