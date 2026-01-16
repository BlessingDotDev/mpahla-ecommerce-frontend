import "./CheckoutPageHeader.css"

export function CheckoutPageHeader() {
  return (
    <header>
      <div class="header-container">
        <div class="logo-section">
          <a href="index.html">
            <span class="logo-name">
              <span class="logo-letter">M</span>p<span class="logo-letter">a</span>hl<span class="logo-letter">a</span>
            </span>
          </a>
        </div>

        <div class="header-right-section">
          <p class="checkout-items">Checkout (<span class="items js-items">0</span> items)</p>
        </div>

        <a href="checkout.html">
          <div class="cart-container primary-icon">
            <img src="images/icons/shopping-cart.svg" alt="cart icon"/>
              <div class="cart-item js-cart-item">0</div>
          </div>
        </a>
      </div>
  </header >
  );
}