import React from 'react'

const Navigation = () => {
  return (
    <nav className='container'>
      <div className="logo">
         <img src="/images/brand_logo.png" alt="logo" />
      </div>

      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      

      <button>Login</button>
    </nav>
  )
}

export default Navigation
