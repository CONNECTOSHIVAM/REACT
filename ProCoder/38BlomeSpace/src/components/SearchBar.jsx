import React, { useState } from 'react'
import { setQuery } from '../redux/Featues/serachSlice';
import { useDispatch } from 'react-redux';

const SearchBar = () => {

  const dispatch = useDispatch();
  const [text, setText] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText('')
  }
  


  return (
    <div>
      <form onSubmit={(e)=>submitHandler(e)} className="flex items-center gap-5 p-10 bg-gray-900">
        <input value={text} onChange={(e)=>(setText(e.target.value))} type="text" placeholder='search anything...' className='h-12 w-full p-5 border-2 border-amber-700 outline-2 outline-amber-900 rounded-sm' />
        <button className='px-6 py-3 bg-amber-700 rounded-sm active:scale-95 cursor-pointer hover:bg-amber-800 transition-all ease-in-out duration-500'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
