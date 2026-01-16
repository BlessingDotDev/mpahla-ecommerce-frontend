import { cart, updateCartQuanity } from "../../data/cart.js";
import { getMatchingItem, getDeliveryPriceCents } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";

export function renderOrderSummary() {
  const quantity = updateCartQuanity();
  let productPriceCents = 0;
  let shippingPriceCents = 0;
  
  cart.forEach((cartItem) => {
    const matchingProduct = getMatchingItem(cartItem);
    productPriceCents += matchingProduct.priceCents * cartItem.quantity;
    
    const shippingPrice = getDeliveryPriceCents(cartItem);
    shippingPriceCents += shippingPrice;
  }) 
  
  const totalBeforeTax = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTax * 0.1;
  const totalCents = totalBeforeTax + taxCents;

  const paymentSummaryHTML = `
    <div class="order-summary-title">
      Order Summary
    </div>
    <div class="row">
      <span>Items (${quantity})</span>
      <span>R${formatCurrency(productPriceCents)}</span>
    </div>
    <div class="row row-gap">
      <span>Shipping & handling</span>
      <span>R${formatCurrency(shippingPriceCents)}</span>
    </div>
    <div class="row">
      <span>Total before tax</span>
      <span>R${formatCurrency(totalBeforeTax)}</span>
    </div>
    <div class="row">
      <span>Estimated tax (10%)</span>
      <span>R${formatCurrency(taxCents)}</span>
    </div>
    <div class="row total">
      <span>Order total</span>
      <span>R${formatCurrency(totalCents)}1</span>
    </div>
    <button class="place-your-order-button">
      Place your order
    </button>
  `;

  document.querySelector('.js-order-summary-section')
    .innerHTML = paymentSummaryHTML;
}
