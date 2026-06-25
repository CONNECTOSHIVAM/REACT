import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const dispatch = useDispatch()

    const [text, setText] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text));
        console.log(text);
        
        setText('')
        
        
    }


  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}} className="flex bg-gray-900 gap-5 p-10">
        <input value={text} onChange={(e)=>(setText(e.target.value))} required type="text" placeholder='search anything...' className='w-full border-2 px-4 py-2 text-xl rounded outline-none' />
        <button  className='active:scale-95 border-2  bg-amber-600 text-amber-50 px-5 py-3 rounded-sm cursor-pointer transition-all ease-in-out duration-500'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
