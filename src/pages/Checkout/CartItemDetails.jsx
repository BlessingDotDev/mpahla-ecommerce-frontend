import axios from "axios";
import { formartCurrency } from "../../utils/money.js";

export function CartItemDetails({ cartItem, loadCart }) {

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart/${cartItem._id}`);
    await loadCart();
  }

  return (
    <>
      <img className="product-image"
        src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formartCurrency(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity: <span className="quantity-label">{cartItem.quantity}</span>
          </span>
          <div className="edit-cart">
            <button className="delete-quantity-link link-primary"
              onClick={deleteCartItem}>
              Delete
            </button>

          </div>
        </div>
      </div>
    </>
  );
}