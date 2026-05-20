import React from 'react'

const Hero = () => {
  return (
    <div>
      <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam expedita, fuga dolore modi nemo autem odit doloremque fugiat cupiditate tenetur praesentium, illum accusamus vero architecto voluptates perferendis, ex exercitationem voluptate!</p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className='cat'>Category</button>
            </div>

            <div className="shopping">
                <p>Also available on</p>
            </div>

            <div className="icons-image">
                <img src="/images/amazon.png" alt="amazon" />
                <img src="/images/flipkart.png" alt="flipkart" />

            </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero-image.png" alt="hero-image" />
        </div>
      </main>
    </div>
  )
}

export default Hero
