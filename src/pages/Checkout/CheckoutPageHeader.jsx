import "./CheckoutPageHeader.css"

export function CheckoutPageHeader() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-section">
          <a href="index.html">
            <span className="logo-name">
              <span className="logo-letter">M</span>p<span className="logo-letter">a</span>hl<span className="logo-letter">a</span>
            </span>
          </a>
        </div>

        <div className="header-right-section">
          <p className="checkout-items">Checkout (<span className="items js-items">0</span> items)</p>
        </div>

        <a href="checkout.html">
          <div className="cart-container primary-icon">
            <img src="images/icons/shopping-cart.svg" alt="cart icon"/>
              <div className="cart-item js-cart-item">0</div>
          </div>
        </a>
      </div>
  </header >
  );
}