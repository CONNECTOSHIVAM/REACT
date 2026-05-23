import React from "react";

const Hero = () => {
  return (
    <div>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            accusamus sapiente reiciendis temporibus. Molestiae soluta,
            blanditiis est perferendis cum rem porro earum nostrum quas sunt
            animi consequuntur quidem! Quaerat, praesentium.
          </p>

          <div className="hero-btn">
            <button>Shop Now</button>
            <button>Category</button>
          </div>

          <div className="shopping">
            <p>Also available on</p>
          </div>

          <div className="image-icons">
            <img src="/images/flipkart.png" alt="" />
            <img src="/images/amazon.png" alt="" />
          </div>
        </div>

        <div className="hero-image">
            <img src="/images/hero-image.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
