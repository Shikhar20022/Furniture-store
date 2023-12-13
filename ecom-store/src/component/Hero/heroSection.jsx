import React from "react";
import Navbar from "../Navbar/Navbar";

function HeroSection() {
  return (
    <div className="background">
      <div>
        <Navbar />
        <div className="content">
          <h1>
            Furniture That Gives You <br />
            Great Comfort
          </h1>
          <p>
            This seashell-inspired barrel chair adds a touch of texture to your
            <br />
            living room decor. It’s made from a solid material that feel so
            smooth and relax for your body.
          </p>
          <button className="btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
