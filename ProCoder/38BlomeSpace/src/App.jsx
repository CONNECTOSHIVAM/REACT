import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

const App = () => {
  return (
    <div className='bg-gray-950 w-full h-screen text-amber-50'>
      <SearchBar/>
      <Tabs/>
    </div>
  )
}

export default App
