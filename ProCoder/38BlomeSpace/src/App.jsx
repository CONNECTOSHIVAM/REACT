import React from 'react'
import { fetchMemes, fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {
  return (
    <div className='bg-gray-950 w-full h-screen text-amber-50'>
      <button 
        onClick={()=>fetchMemes('lion')}
        className={`bg-amber-600 font-mono text-amber-200 font-semibold transition-all cursor-pointer active:scale-95 px-5 py-3 uppercase rounded-sm`}
        >Get Photos</button>
    </div>
  )
}

export default App
