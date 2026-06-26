import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import { fetchMemes } from './api/mediaApi'

const App = () => {
  return (
    <div className='bg-gray-950 w-full h-screen text-amber-50'>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default App
