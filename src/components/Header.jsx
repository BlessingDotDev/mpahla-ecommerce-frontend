import { Link } from "react-router";
import { HeaderUser } from "./HeaderUser";
import menuIcon from "../assets/images/icons/menu.svg";
import searchIcon from "../assets/images/icons/search.svg";
import cartIcon from "../assets/images/icons/shopping-cart.svg";

import "./Header.css";

export function Header({ cart }) {
  let totalQuantity = 0;
  if (cart) {
  
    cart.forEach(cartItem => {
      totalQuantity += cartItem.quantity;
    })

  }

  return (
    <header>
      <div className="header-container">
        <div className="logo-section">
          <img className="menu-icon" src={menuIcon} alt="" />
          <Link to="/">
            <span className="logo-name">
              <span className="logo-letter">M</span>p<span className="logo-letter">a</span>hl<span className="logo-letter">a</span>
            </span>
          </Link>
        </div>

        <div className="search-bar js-search-bar">
          <div className="search-icon-box ">
            <img src={searchIcon} />
          </div>
          <input type="search" placeholder="Search Items, Brands & Catagories" />
        </div>

        <div className="header-right-section">
          <div className="search-icon js-search-icon">
            <img src={searchIcon} />
          </div>

          <HeaderUser />

          <Link to="/checkout">
            <div className="cart-container">
              <img src={cartIcon} alt="cart icon" />
              <div className="cart-item js-cart-item">{totalQuantity}</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}