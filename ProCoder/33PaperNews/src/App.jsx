import React from 'react'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import News from './Page/News'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      {/* <h1 className='text-3xl text-center text-orange-400'>Radhe radhe</h1> */}
      <Navbar className={`sticky top-0 z-20`}/>
      <Categories className={`sticky top-10 z-10 bg-base-100 py-10`}/>
      <News />
      <Footer/>
    </div>
  )
}

export default App
