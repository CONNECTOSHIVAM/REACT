import React from 'react'
import Navbar from './components/Navbar'
import News from './pages/News'
import Category from './components/Category'
import Fotter from './components/Fotter'

const App = () => {
  return (
    <div>
      <Navbar className={`sticky top-0 z-20 `}/>
      <Category className="py-10 sticky top-14 z-10 bg-base-100"/>
      <News className="pb-10"/>
      <Fotter/>
    </div>
  )
}

export default App
