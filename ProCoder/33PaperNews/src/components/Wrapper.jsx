import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='m-auto px-10 max-w-[70rem]'>
      {children}
    </div>
  )
}

export default Wrapper
