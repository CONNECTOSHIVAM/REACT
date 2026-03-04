import React from 'react'
import { FaLinkedin, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";


const UserCard = () => {
  return (
    <div className='w-[20rem] h-[30rem] bg-amber-100 rounded-2xl justify-around m-10'>
      <div className='relative w-[20rem] h-[11rem] bg-sky-200 rounded-2xl'>
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQF8oP4q4fi5pg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731502043627?e=2147483647&v=beta&t=iqZ6o7xVbsoraAFYyzLZw7b7HcCM-9AehVJZzyR_LuQ" alt="User Avatar" className='h-full aspect-square object-cover object-top rounded-full absolute translate-x-[42%] translate-y-[30%] border-3 border-amber-400 p-1.5 bg-amber-50' />
      </div>

      {/* bottom part */}
      <div className='flex flex-col items-center pt-[4rem]'>
        <h1 className='text-[21px] font-bold'>Shivam Kumar</h1>
        <p>Founder of ConnectoShivam</p>
        <div className='flex mt-10 space-x-5 text-3xl'>
          <FaLinkedin  className='text-blue-600'/>
          <FaXTwitter  className='text-black'/>
          <FaInstagram className='text-pink-500' />
          <FaYoutube className='text-red-500' />
        </div>
      </div>
    </div>
  )
}

export default UserCard
