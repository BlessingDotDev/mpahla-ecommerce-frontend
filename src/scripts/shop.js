import { setupHeaderEvents, renderCartQuantity } from './header.js';
import { products } from '../data/products.js';
import { addToCart } from '../data/cart.js';
import { formatCurrency } from './utils/money.js';
import { saveitemId, itemId } from '../data/itemdata.js';
import { category } from './category.js';

let filteredProducts = products;

if (category[0]) {
  filteredProducts = 
    products.filter(product => 
      product.category === category[0])
} 

renderProductList();

function renderProductList() {

  let productListHTML = '';
  
  filteredProducts.forEach((product) => {
    productListHTML += `
      <div class="product-container">
        <div class="product-image js-product-image"
        data-product-id="${product.id}">
          <img src="${product.image}" alt="">
        </div>
        <div class="product-info">
          <p class="product-name">
            ${product.name}
          </p>
          <p class="product-brand">
            Nike-Jordan
          </p>
          <div class="product-ratings">
            <img class="rating-image" src="images/ratings/rating-${product.ratings.starts * 10}.png" alt="">
            <span class="rating-count">
             ${product.ratings.counts}
            </span>
          </div>
          <p class="product-price">
            R${formatCurrency(product.priceCents)}
          </p>

          <div class="added-row">
          <select name="number" id="number" class="js-select-value-${product.id}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          
          <span class="added-message js-added-message-${product.id}">Added</span>
          </div>

          <button class="add-to-cart-button js-add-to-cart-button" data-product-id="${product.id}">
           Add to cart
          </button>
        </div>
      </div>
    `;
  })
  
  document.querySelector('.js-grid-layout')
    .innerHTML = productListHTML;


  document.querySelectorAll('.js-add-to-cart-button')
    .forEach((button) => {
      button.addEventListener('click', () => {

        const {productId} = button.dataset;
        const selectElement = document.querySelector(`.js-select-value-${productId}`);
        const selectValue = Number(selectElement.value);

        addToCart(productId, selectValue);
        renderCartQuantity();
        
        renderAddedMessage(productId);
        selectElement.value = '1';
      })
    })

  let timeoutId;

  function renderAddedMessage(productId) {
    document.querySelector(`.js-added-message-${productId}`)
      .classList.add('show-message');

    clearInterval(timeoutId);

    timeoutId = setTimeout(() => {
       document.querySelector(`.js-added-message-${productId}`)
      .classList.remove('show-message');
    }, 1000)
  }

// For the Item.html page and itemdata.js,item.js
  document.querySelectorAll('.js-product-image')
    .forEach(image => {
      image.addEventListener('click', () => {
        const { productId } = image.dataset;
        
        saveitemId(productId);
        window.location.href = 'item.html';
      })
    })

  // when the page load also render cart
  renderCartQuantity()

}

document.addEventListener('DOMContentLoaded', () => {
  setupHeaderEvents();
})