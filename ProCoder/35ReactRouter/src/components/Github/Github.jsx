import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(()=>{

    //     const data = fetch('https://api.github.com/users/connectoshivam')
    //     .then(response => response.json())
    //     .then(data => {
    //            console.log(data);
    //            setData(data);
               
    //     });

    
  return (
    <div className='flex justify-center items-center'>
      <div className='p-7 m-9 bg-amber-100 rounded-sm text-center text-3xl font-serif'>
        {data.login}
        <p>followers: {data.followers}</p>
        <div>
            <img src={`${data.avatar_url}`} alt="github profile image"  className='m-5 rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {

    const response = await fetch('https://api.github.com/users/connectoshivam');
    return await response.json()
}
