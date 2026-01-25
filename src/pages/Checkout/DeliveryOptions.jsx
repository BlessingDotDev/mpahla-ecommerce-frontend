import { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { formartCurrency } from "../../utils/money";

export function DeliveryOptions({
  deliveryOptions,
  cartItem,
  loadCart,
  selectedDeliveryOption,
  setSelectedDeliveryOption
}) {
  const updateDeliveryOption = async (deliveryOptionId) => {
    const newOption = deliveryOptions.find(opt => opt._id === deliveryOptionId);
    if (!newOption) return;

    setSelectedDeliveryOption(newOption);

    try {
      await axios.put(`/api/cart/${cartItem._id}`, {
        quantity: cartItem.quantity,
        deliveryOptionId
      });

      await loadCart(); 
    } catch (error) {
      console.error("Failed to update delivery option", error);
      setSelectedDeliveryOption(cartItem.deliveryOption);
    }
  };

  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>

      {deliveryOptions.map((deliveryOption) => {
        const isSelected =
          deliveryOption._id === selectedDeliveryOption._id;

        const priceString =
          deliveryOption.priceCents === 0
            ? "FREE Shipping"
            : `${formartCurrency(deliveryOption.priceCents)} - Shipping`;

        const deliveryDate = dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
          "dddd, MMMM D"
        );

        return (
          <label
            key={deliveryOption._id}
            className={`delivery-option ${isSelected ? "selected" : ""}`}
            onClick={() => updateDeliveryOption(deliveryOption._id)}
          >
            <input
              type="radio"
              name={`delivery-option-${cartItem._id}`}
              checked={isSelected}
              readOnly
              className="delivery-option-input"
            />

            <div className="delivery-option-info">
              <div className="delivery-option-date">{deliveryDate}</div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </label>
        );
      })}
    </div>
  );
}
