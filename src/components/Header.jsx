import { Link, useNavigate } from "react-router";
import { HeaderUser } from "./HeaderUser";
import { useState } from "react";
import menuIcon from "../assets/images/icons/menu.svg";
import searchIcon from "../assets/images/icons/search.svg";
import cartIcon from "../assets/images/icons/shopping-cart.svg";
import MobileSidebar from "./MobileSidebar";
import "./Header.css";

export function Header({ totalQuantity }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
    setMobileSearchOpen(false);
  };

  return (
    <header>
      <MobileSidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="header-container">
        {/* LOGO */}
        <div className="logo-section">
          <img
            onClick={() => setMenuOpen(true)}
            className="menu-icon"
            src={menuIcon}
            alt="menu"
          />
          <Link to="/">
            <span className="logo-name">
              <span className="logo-letter">M</span>p
              <span className="logo-letter">a</span>hl
              <span className="logo-letter">a</span>
            </span>
          </Link>
        </div>

        {/* DESKTOP SEARCH */}
        <form className="search-bar desktop-search" onSubmit={handleSearch}>
          <div className="search-icon-box">
            <img src={searchIcon} alt="search" />
          </div>
          <input
            type="search"
            placeholder="Search items, brands & categories"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        {/* RIGHT SECTION */}
        <div className="header-right-section">
          {/* MOBILE SEARCH ICON */}
          <button
            className="search-icon mobile-only"
            onClick={() => setMobileSearchOpen(true)}
          >
            <img src={searchIcon} alt="search" />
          </button>

          <HeaderUser />

          <Link to="/checkout">
            <div className="cart-container">
              <img src={cartIcon} alt="cart" />
              <div className="cart-item">{totalQuantity}</div>
            </div>
          </Link>
        </div>
      </div>

      {/* MOBILE SEARCH BAR */}
      {mobileSearchOpen && (
        <form className="mobile-search-bar" onSubmit={handleSearch}>
          <input
            autoFocus
            type="search"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
          <span className="close-search" onClick={() => setMobileSearchOpen(false)}>
            ✕
          </span>
        </form>
      )}
    </header>
  );
}
