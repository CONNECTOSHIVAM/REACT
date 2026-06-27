import React from 'react'
import { useDispatch } from 'react-redux'

const ResultCard = ({item}) => {


  const dispatch = useDispatch();
  const addToCollection = (item)  => {
    const oldData = JSON.parse(localStorage.getItem('collection')) || []
    const newData = [...oldData, item]
    localStorage.setItem('collection', JSON.stringify(newData)); 
    
  
  }
  return (
    <div className='w-[18vw] relative h-80 bg-gray-900 rounded-xl overflow-hidden'>
      <a target='_blank' className='h-full' href={item.url}>
        {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt=''/>  :''}
        {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} ></video> : ''}
        {item.type == 'gif' ? <img   className='h-full w-full object-cover object-center' src={item.src}/> : ''}
      </a>
      <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
        <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
        <button
         onClick={()=>{addToCollection(item)}}
         className='bg-amber-600 active:scale-95 text-amber-200 rounded-sm px-3 py-1 cursor-pointer font-medium'
        >Save</button>
      </div>
    </div>
  )
}

export default ResultCard
