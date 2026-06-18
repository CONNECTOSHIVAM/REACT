import React from 'react'
import Navbar from './components/Navbar'
import News from './pages/News'
import Category from './components/Category'
import Fotter from './components/Fotter'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Category className="py-10"/>
      <News/>
      <Fotter/>
    </div>
  )
}

export default App
