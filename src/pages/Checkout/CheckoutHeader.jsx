import { Link } from "react-router";
import { HeaderUser } from "../../components/HeaderUser";
import menuIcon from "../../assets/images/icons/menu.svg";
import searchIcon from "../../assets/images/icons/search.svg";
import cartIcon from "../../assets/images/icons/pocket.svg";

import "./CheckoutHeader.css";

export function CheckoutHeader() {
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
        
        <div className="header-right-section">
          <div className="search-icon js-search-icon">
            <img src={searchIcon} />
          </div>

          <HeaderUser />

          <Link to="/orders">
            <div className="cart-container">
              <img src={cartIcon} alt="cart icon" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}