import React from 'react'

const Hero = () => {
  return (
    <div>
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, illo tempora! Fugiat, accusamus? Facere ab amet, nesciunt accusantium sed expedita minima recusandae fuga atque fugit, veniam perspiciatis! Voluptas, minus quisquam!</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>

                <div className="shopping">
                    <p>Also available on</p>
                </div>

                <div className="shop-icons">
                    <img src="/images/amazon.png" alt="" />
                    <img src="/images/flipkart.png" alt="" />
                </div>
            </div>


         <div className="brand-icons">
            <img src="/images/hero-image.png" alt="" />
         </div>
        </main>
    </div>
  )
}

export default Hero
