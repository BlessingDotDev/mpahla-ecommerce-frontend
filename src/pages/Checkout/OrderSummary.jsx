import { useState } from "react";
import { CartItemDetails } from "./CartItemDetails.jsx";
import { DeliveryDate } from "./DeliveryDate.jsx";
import { DeliveryOptions } from "./DeliveryOptions.jsx";

export function OrderSummary({ cart, deliveryOptions, loadCart }) {

  const [selectedOptions, setSelectedOptions] = useState(
    cart.reduce((acc, item) => {
      acc[item._id] = item.deliveryOption;
      return acc;
    }, {})
  );

  const handleSelectDeliveryOption = (cartItemId, newOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [cartItemId]: newOption
    }));
  };

  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedOption =
            selectedOptions[cartItem._id] || cartItem.deliveryOption;

          return (
            <div key={cartItem._id} className="cart-item-container">
              {/* Pass selected option to DeliveryDate */}
              <DeliveryDate selectedDeliveryOption={selectedOption} />

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} loadCart={loadCart} />

                {/* Pass selected option & setter to DeliveryOptions */}
                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                  loadCart={loadCart}
                  selectedDeliveryOption={selectedOption}
                  setSelectedDeliveryOption={(newOption) =>
                    handleSelectDeliveryOption(cartItem._id, newOption)
                  }
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

/*
export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {
  
        return (
          <div key={cartItem._id} className="cart-item-container">
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

*/