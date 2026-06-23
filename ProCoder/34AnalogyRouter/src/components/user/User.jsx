import React from 'react'
import { useParams } from 'react-router-dom'

const User = ({}) => {

    const {userid} = useParams();
  return (
    <div className='flex justify-center items-center'>
      <div className='text-5xl bg-amber-200 mx-auto p-7   m-5 rounded-2xl outline-4 outline-amber-700'>
      User-Id: {userid}
     </div>
    </div>
  )
}

export default User
