import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { SiTodoist } from 'react-icons/si'

const Navbar = ({totalTodos = 0}) => {
  return (
    <header className='sticky top-3 z-40 my-4'>
        <div className='flex justify-between items-center rounded-2xl border border-amber-200 bg-gradient-to-r from-[#F8F5EF] to-[#F1E8D8] px-5 py-4 shadow-sm backdrop-blur-sm'>
            {/* logo section */}
            <div className='flex items-center gap-3'>
                <div className='flex w-12 h-12 bg-amber-100 items-center justify-center rounded-xl'>
                    <SiTodoist className='text-2xl text-amber-700'/>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-amber-900'>TodoSpace</h1>
                    <p className='text-sm text-amber-600'>Organize your day efficiently</p>
                </div>
            </div>

            {/* stats */}
            <div className='flex gap-2 bg-white items-center px-4 py-2 rounded-xl shadow-sm border border-amber-100'>
                <RiCheckboxCircleFill className="text-lg text-green-600"/>

                <div className='flex flex-col'>
                    <span className='font-semibold text-sm text-amber-900'>{totalTodos}</span>
                    <span className='text-[11px] text-gray-500'>Total Tasks</span>
                </div>
            </div>
        </div>
      
    </header>
  )
}

export default Navbar
