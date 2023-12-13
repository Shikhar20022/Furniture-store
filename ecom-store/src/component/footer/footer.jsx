import React from "react";
import {
  Facebook,
  Instagram,
  Google,
  Location,
  Call,
  Message,
} from "iconsax-react";

function Footer() {
  return (
    <div className="footer">
      {/* <div className="footer-content"> */}
      <div className="footer-item">
        <h2>Furniture</h2>
        <p>
          This seashell-inspired barrel chair adds touch of texture to your
          living room decor. It's made from a solid material that feel so smooth
          and relax for your body.
        </p>
        <div className="footer-icons">
          <Facebook size="25" color="#FFF" variant="Bold" />
          <Instagram size="25" color="#FFF" variant="Bold" />
          <Google size="25" color="#FFF" variant="Bold" />
        </div>
      </div>

      <div className="footer-item">
        <h2>Special Menu</h2>
        <ul>
          <li>Conatct</li>
          <li>Help</li>
          <li>Checkout</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="footer-item">
        <h2>Conatct Us</h2>
        <>
          <div className="text-icon">
            <Location size="30" color="#FFF" variant="Bold" />
            <p>House No 26 Buildeing H1 Delhi, India</p>
          </div>
          <div className="text-icon">
            <Call size="25" color="#FFF" variant="Bold" />
            <p>+91-9628363667</p>
          </div>
          <div className="text-icon">
            <Message size="25" color="#FFF" variant="Bold" />
            <p>yourmail@gmail.com</p>
          </div>
        </>
      </div>

      <div className="footer-item">
        <h2>Join to NewsLetter</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, est!
        </p>
        <div className="input-box">
          <input type="email" placeholder="enter your email" />

          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
