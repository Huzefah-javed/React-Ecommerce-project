// Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="newsletter-content">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest updates and offers from our store</p>
          <div className="newsletter-input">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="footer-main">
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="/about">Company Info</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/shipping">Shipping Info</a>
            </li>
            <li>
              <a href="/returns">Returns & Exchanges</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; 2025 E-commerce Store. All rights reserved.
          <br />
          <a href="/terms">Terms of Service</a> | <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
