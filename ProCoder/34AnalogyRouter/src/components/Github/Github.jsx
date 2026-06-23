import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    

    const [data, setData] = useState([])


    useEffect(()=>{
        fetch('https://api.github.com/users/connectoshivam')
        .then(response => response.json())
        .then(data => {
           console.log(data);
           setData(data);
           
        })
    },[])
  return (
    <div className='flex justify-center items-center'>
      <div className='m-7 p-9 bg-amber-50 outline-4 outline-amber-800 text-5xl text-center font-serif rounded-sm'>
         {data.login}
         <p className='text-[25px] text-gray-700 mt-5 p-3 text-center bg-amber-200 rounded-2xl'>followers: {data.followers}</p>
        <div >
            <img src={`${data.avatar_url} `} className='rounded-full m-5 mt-7 bg-amber-300' />
        </div>
      </div>
    </div>
  )
}

export default Github


