import React from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category'
import News from './Page/News'

const App = () => {
  return (
    <div>
      <Navbar className={`sticky top-0 z-20`}/>
      <Category className={`sticky py-10 top-14 z-10 bg-base-100`}/>
      <News/>
      {/* <button className="btn btn-soft btn-warning">Warning</button> */}
    </div>
  )
}

export default App
