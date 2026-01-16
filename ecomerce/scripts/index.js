import { products, productsCatagories } from "../data/products.js";
import { renderCartQuantity } from "./header.js";
import { saveCategory } from "./category.js";
import { removeFromStorage } from "./category.js";

renderProductsCategories();

function renderProductsCategories() {
  let productsCategoryHTML = '';

  productsCatagories.forEach((category) => {
   const matchingProduct = getMatchingProduct(category);

    productsCategoryHTML += `
      <a href="shop.html">
        <div class="content-container js-content-container"
        data-product-category="${matchingProduct.category}">
          <img src="${matchingProduct.image}" alt="men content image">
          <div class="content-link">
            <span>${category.category}</span>
            <p>&gt</p>
          </div>
        </div>
      </a>
    `;
  })

  document.querySelector('.js-home-grid-layout')
    .innerHTML = productsCategoryHTML;

  document.querySelectorAll('.js-content-container')
    .forEach((container) => {
      container.addEventListener('click', () => {
        const {productCategory} = container.dataset;
        saveCategory(productCategory);
      })
    })

  function getMatchingProduct(category) {
    let matchingProduct;

    products.forEach(product => {
      if (category.category === product.category) {
        matchingProduct = product;
      };
    });

    return matchingProduct;
  }
renderCartQuantity();
}
// For the shop all button in the home page
document.querySelector('.js-shop-all-button')
  .addEventListener('click', () => {
    removeFromStorage();
  })