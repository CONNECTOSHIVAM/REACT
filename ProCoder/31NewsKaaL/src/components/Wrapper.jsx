import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='m-auto max-w-[70rem] px-10'>
      {children}
    </div>
  )
}

export default Wrapper
