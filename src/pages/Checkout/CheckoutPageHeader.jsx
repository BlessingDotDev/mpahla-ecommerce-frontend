import { Link } from "react-router";
import cartIcon from "../../assets/images/icons/shopping-cart.svg";
import orderIcon from "../../assets/images/icons/pocket.svg";
import "./CheckoutPageHeader.css"

export function CheckoutPageHeader() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-section">
          <Link to="/">
            <span className="logo-name">
              <span className="logo-letter">M</span>p<span className="logo-letter">a</span>hl<span className="logo-letter">a</span>
            </span>
          </Link>
        </div>

        <div className="header-right-section">
          <p className="checkout-items">Checkout (<span className="items js-items">0</span> items)</p>
        </div>

        <div className="right-section">
          <Link to="/orders">
            <div className="cart-container primary-icon">
              <img src={orderIcon} alt="pcket icon" />
            </div>
          </Link>

          <Link to="/checkout">
            <div className="cart-container primary-icon">
              <img src={cartIcon} alt="cart icon" />
              <div className="cart-item js-cart-item">0</div>
            </div>
          </Link>

        </div>

      </div>
    </header >
  );
}