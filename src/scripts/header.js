import { updateCartQuanity } from "../data/cart.js";

export function setupHeaderEvents() {
  document.querySelector('.js-search-icon')
    .addEventListener('click', () => {
     const searchbar = document.querySelector('.js-search-bar');

     const contains = searchbar.classList.contains('clicked-search-bar');

     if(!contains) {
      searchbar.classList.add('clicked-search-bar')
     } else {
       searchbar.classList.remove('clicked-search-bar')
     }
  }) 
}

// For the cart quantity
export function renderCartQuantity() {
    const cartQuantity = updateCartQuanity();
    document.querySelector('.js-cart-item')
      .innerHTML = cartQuantity;
}

