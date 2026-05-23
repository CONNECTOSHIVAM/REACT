import React from 'react'

const Navigation = () => {
  return (
    <div>
      <nav className='container'>
         <div className="logo">
          <img src="images/brand_logo.png" alt="" />
         </div>

         <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>Contact</li>
          <li>About</li>
         </ul>

         <button>Login</button>
      </nav>
    </div>
  )
}

export default Navigation
