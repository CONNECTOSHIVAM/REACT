import React from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category'
import News from './page/News'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar className={`sticky top-0 z-20`}/>
      <Category className={`py-10 sticky top-14 z-10 bg-base-100`}/>
      <News className={`pb-10`}/>
      <Footer/>
    </div>
  )
}

export default App
