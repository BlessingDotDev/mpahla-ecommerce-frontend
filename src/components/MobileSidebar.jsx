import { useState } from "react";
import "./MobileSidebar.css";
import { Link } from "react-router";

export default function MobileSidebar({ isOpen, onClose }) {
  const [openCategories, setOpenCategories] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="sidebar-header">
          <span className="brand">ShopEase</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Sign in */}
        <Link to="/login" className="signin-btn">
          Sign In / Account
        </Link>

        {/* Search */}
        <div className="sidebar-search">
          <input type="text" placeholder="Search products..." />
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <Link to="/" onClick={onClose}>Home</Link>

          {/* Categories */}
          <button
            className="dropdown-toggle"
            onClick={() => setOpenCategories(!openCategories)}
          >
            Categories
            <span className={`arrow ${openCategories ? "rotate" : ""}`}>▾</span>
          </button>

          {openCategories && (
            <div className="dropdown-menu">
              <Link to="/category/men" onClick={onClose}>Men</Link>
              <Link to="/category/women" onClick={onClose}>Women</Link>
              <Link to="/category/kids" onClick={onClose}>Kids</Link>
              <Link to="/category/big-kids" onClick={onClose}>Big Kids</Link>
              <Link to="/category/shoes" onClick={onClose}>Shoes</Link>
              <Link to="/category/accessories" onClick={onClose}>Accessories</Link>
            </div>
          )}

          <Link to="/checkout" onClick={onClose}>Checkout</Link>
          <Link to="/orders" onClick={onClose}>Orders</Link>
          <Link to="/tracking" onClick={onClose}>Tracking</Link>
        </nav>
      </aside>
    </>
  );
}
