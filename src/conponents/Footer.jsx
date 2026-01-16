import "./Footer.css";

export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        <div className="grid-box">
          <div className="footer-subtitle">
            <p>Resources</p>
            <img className="arrow" src="images/icons/arrow-down.svg" alt="" />
          </div>
          <ul>
            <li><a href="#">Find a Store</a></li>
            <li><a href="#">Nike Journal</a></li>
            <li><a href="#">Become a Member</a></li>
            <li><a href="#">feedback</a></li>
            <li><a href="#">Promo Codes</a></li>
          </ul>
        </div>
        <div className="grid-box">
          <div className="footer-subtitle">
            <p>Help</p>
            <img className="arrow" src="images/icons/arrow-down.svg" alt="" />
          </div>
          <ul>
            <li><a href="#">Get Help</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Shipping and Delivery</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="grid-box">
          <div className="footer-subtitle">
            <p>Company</p>
            <img className="arrow" src="images/icons/arrow-down.svg" alt="" />
          </div>
          <ul>
            <li><a href="#">About Nike</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Review</a></li>
          </ul>
        </div>
        <div className="grid-box">
          <div className="footer-subtitle">
            <p>South Africa</p>
          </div>
        </div>
      </div>
    </div>
  );
}