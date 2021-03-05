import React from "react";
import { Button } from "./Button";
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          subscribe to our newsletter to get the best deals
        </p>

        <p className="footer-subscription-text">You can unsubscribe anytime</p>

        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
          </form>

          <Button buttonStyle="btn-outline">Subscribe</Button>
        </div>
      </section>
    </div>
  );
}

export default Footer;
