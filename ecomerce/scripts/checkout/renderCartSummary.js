import {cart, removeFromCart, updateDeliveryDate, getMatchingCartItem, updateQuantity} from '../../data/cart.js';
import { getMatchingItem, deliveryOptions, getDeliveryDay } from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { renderOrderSummary } from './renderOrderSummary.js';
import { renderCartQuantity } from '../header.js';

export function renderCartSummary() {
  let cartSummaryHTML = '';

  cart.forEach(cartItem => {

    const matchingItem = getMatchingItem(cartItem);
    const deliveryDay = getDeliveryDay(cartItem);
    const dateString = getDate(deliveryDay);
    

    cartSummaryHTML += `
      <div class="cart-summary-section js-cart-summary js-cart-summary-section-${cartItem.productId}">
        <p class="delivery-date">
          Delivery date: <span>${dateString}</span>
        </p>
      <div class="cart-item-grid">
        <img class="product-image" src="${matchingItem.image}" alt="cart product image"> 
        <div class="cart-item-details">
          <div class="product-name">
            ${matchingItem.name}
          </div>
          <div class="product-price">
            R${formatCurrency(matchingItem.priceCents)}
          </div>
          <div class="prodcut-quantity">
            <span>
              Quantity:<span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <input class="update-input js-update-input-${cartItem.productId}" type="text">
            <span class="save-quantity-link js-save-quantity-link" data-product-id="${cartItem.productId}">
              save
            </span>
            <span class="update-quantity-link js-update-quantity-link" data-product-id="${cartItem.productId}">
              Update
            </span>
            <span class="delete-quantity-link js-delete-quantity-link" data-product-id="${cartItem.productId}">
              Delete
            </span>
          </div>
        </div>
        <div class="delivery-options">
          <div class="delivery-option-title">
            Choose a delivery option:
          </div>
          ${renderDeliveryOptions(cartItem.productId, cartItem.deliveryId)}
        </div>
      </div>
    </div>
    `;
  }) 

  function renderDeliveryOptions(productId, deliveryId) {
    let deliveryOptionHTML = '';

    deliveryOptions.forEach((deliveryOption) => {

      const dateString = getDate(deliveryOption.deliveryDay);
      const deliveryPrice = deliveryOption.deliveryPriceCents === 0 ? 'FREE' : `R${deliveryOption.deliveryPriceCents}`

      const deliveryChecked = deliveryId === deliveryOption.deliveryId ? 'checked' : ''; 

      deliveryOptionHTML += `
        <div class="delivery-option">
          <input type="radio" class="delivery-option-input js-delivery-option-input" name="delivery-option-${productId}" ${deliveryChecked} data-delivery-id="${deliveryOption.deliveryId}" data-product-id="${productId}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${deliveryPrice} - Shipping
            </div>
          </div>
        </div>   
      `;
    })

    return deliveryOptionHTML;
  }

  document.querySelector('.js-cart-summary-container')
    .innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-quantity-link')
    .forEach(link => {
      const {productId} = link.dataset;

      link.addEventListener('click', () => {
        document.querySelector(`.js-cart-summary-section-${productId}`)
          .remove();
        removeFromCart(productId);
        renderCartSummary();
        renderOrderSummary();
      }) 
    })

  document.querySelectorAll('.js-delivery-option-input')
    .forEach(deliveryOption => {
      deliveryOption.addEventListener('click', () => {
        const {deliveryId, productId } = deliveryOption.dataset;
        updateDeliveryDate(deliveryId, productId);
        renderCartSummary();
        renderOrderSummary();
      })
    })
    
    document.querySelectorAll('.js-update-quantity-link')
      .forEach(link => {
        link.addEventListener('click', () => {
          const {productId} = link.dataset;
          const cartSummarycontianer = document.querySelector(`.js-cart-summary-section-${productId}`);
          cartSummarycontianer.classList.add('editing');
        })
      })

    document.querySelectorAll('.js-save-quantity-link')
      .forEach(link => {
        link.addEventListener('click', () => {
          const {productId} = link.dataset;

          const newQuantity = document.querySelector(`.js-update-input-${productId}`);

          const newQuantityValue = Number(newQuantity.value);
          const matchingItem = getMatchingCartItem(productId);
          updateQuantity(newQuantityValue, matchingItem);

          const cartSummarycontianer = document.querySelector(`.js-cart-summary-section-${productId}`);
          cartSummarycontianer.classList.remove('editing');

          renderCartSummary();
          renderOrderSummary();
        })
      })

  updateCheckoutItems();
  // FOr the cartquantity at the hearder
  renderCartQuantity();
}


function getDate(deliveryDay) {
  const today = dayjs();
  const deliveryDate = today.add(deliveryDay, 'day');
  const dateString = deliveryDate.format('dddd MMMM D');

  return dateString;
}

function updateCheckoutItems() {
  const numberOfItems = document.querySelectorAll('.js-cart-summary').length;

  document.querySelector('.js-items')
    .innerHTML = numberOfItems;
}







