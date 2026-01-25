
import { useState } from "react";
import "./Footer.css";
import facebookIcon from "../assets/images/icons/facebook.svg";
import twitterIcon from "../assets/images/icons/twitter.svg";
import instagramIcon from "../assets/images/icons/instagram.svg";
import youtubeIcon from "../assets/images/icons/youtube.svg";
import arrowIcon from "../assets/images/icons/arrow-down.svg";

export function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* Resources */}
        <div className="grid-box">
          <div
            className="footer-subtitle"
            onClick={() => toggleSection("resources")}
          >
            <p>Resources</p>
            <img className="arrow" src={arrowIcon} alt="" />
          </div>
          <ul className={openSections.resources ? "open" : ""}>
            <li><a href="https://www.nike.com/retail" target="_blank" rel="noreferrer">Find a Store</a></li>
            <li><a href="https://www.nike.com/journal" target="_blank" rel="noreferrer">Nike Journal</a></li>
            <li><a href="https://www.nike.com/member" target="_blank" rel="noreferrer">Become a Member</a></li>
            <li><a href="https://www.nike.com/help/feedback" target="_blank" rel="noreferrer">Feedback</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">Promo Codes</a></li>
          </ul>
        </div>

        {/* Help */}
        <div className="grid-box">
          <div
            className="footer-subtitle"
            onClick={() => toggleSection("help")}
          >
            <p>Help</p>
            <img className="arrow" src={arrowIcon} alt="" />
          </div>
          <ul className={openSections.help ? "open" : ""}>
            <li><a href="https://www.nike.com/help" target="_blank" rel="noreferrer">Get Help</a></li>
            <li><a href="https://www.nike.com/orders" target="_blank" rel="noreferrer">Order Status</a></li>
            <li><a href="https://www.nike.com/help/shipping" target="_blank" rel="noreferrer">Shipping and Delivery</a></li>
            <li><a href="https://www.nike.com/help/returns" target="_blank" rel="noreferrer">Returns</a></li>
            <li><a href="https://www.nike.com/help/contact" target="_blank" rel="noreferrer">Contact Us</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="grid-box">
          <div
            className="footer-subtitle"
            onClick={() => toggleSection("company")}
          >
            <p>Company</p>
            <img className="arrow" src={arrowIcon} alt="" />
          </div>
          <ul className={openSections.company ? "open" : ""}>
            <li><a href="https://www.nike.com/about" target="_blank" rel="noreferrer">About Nike</a></li>
            <li><a href="https://news.nike.com/" target="_blank" rel="noreferrer">News</a></li>
            <li><a href="https://jobs.nike.com/" target="_blank" rel="noreferrer">Careers</a></li>
            <li><a href="https://investors.nike.com/" target="_blank" rel="noreferrer">Investors</a></li>
            <li><a href="https://www.nike.com/sustainability" target="_blank" rel="noreferrer">Sustainability</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="grid-box">
          <div className="footer-subtitle">
            <p>South Africa</p>
          </div>
          <div className="newsletter">
            <p>Sign up for updates</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/nike" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com/Nike" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/nike" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/nike" target="_blank" rel="noreferrer">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
