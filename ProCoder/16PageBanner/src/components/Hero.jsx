import React from 'react'

const Hero = () => {
  return (
    <div>
      <main className="hero-container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ea nemo iste illo eligendi. Beatae ad praesentium assumenda, non nemo repellat culpa sequi obcaecati doloribus suscipit! Voluptatibus est veritatis eveniet!</p>


            <div className="hero-btn">
                    <button>Shop Now</button>
                    <button>Category</button>
            </div>

            <div className="shopping">
                <p>Also available on</p>
            </div>

            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon" />
                <img src="/images/flipkart.png" alt="filpkart" />

            </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero-image.png" alt="show image" />
        </div>
      </main>
    </div>
  )
}

export default Hero
