import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around'>
      <h1>Logo</h1>

      <div>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Contact</a>
        <a href="">Login</a>
      </div>

      <div>
        <span>🔍</span>
        <span>📄 </span>
      </div>
    </div>
  )
}

export default Navbar
