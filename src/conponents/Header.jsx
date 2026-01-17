import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-section">
          <img className="menu-icon" src="images/icons/menu.svg" alt="" />
          <a href="/">
            <span className="logo-name">
              <span className="logo-letter">M</span>p<span className="logo-letter">a</span>hl<span className="logo-letter">a</span>
            </span>
          </a>
        </div>

        <div className="search-bar js-search-bar">
          <div className="search-icon-box ">
            <img src="images/icons/search.svg" />
          </div>
          <input type="search" placeholder="Search Items, Brands & Catagories" />
        </div>

        <div className="header-right-section">
          <div className="search-icon js-search-icon">
            <img src="images/icons/search.svg" />
          </div>

          <a href="/checkout">
            <div className="cart-container">
              <img src="images/icons/shopping-cart.svg" alt="cart icon" />
              <div className="cart-item js-cart-item">0</div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}