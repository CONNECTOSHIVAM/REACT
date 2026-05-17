import React from 'react'

const Hero = () => {
  return (
    <div>
      <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum alias quis ducimus omnis repellat ad odit dicta qui quidem. Iure suscipit ducimus dolore et, deleniti neque eligendi doloremque velit nulla!</p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button>Category</button>
            </div>

            <div className="shopping">
                <p>Also available on</p>
            </div>

            <div className="brand-icons">
                <img src="images/amazon.png" alt="amazon" />
                <img src="images/flipkart.png" alt="flipkart" />
            </div>
        </div>
        <div className="hero-image">
            <img src="images/hero-image.png" alt="hero-logo" />
        </div>

      </main>
    </div>
  )
}

export default Hero
