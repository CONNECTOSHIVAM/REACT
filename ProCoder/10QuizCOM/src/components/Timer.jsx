import React, { use, useEffect, useState } from 'react'

const Timer = () => {

    const [leftTime, setLeftTime] = useState(10);
    const [displayTime, setDisplayTime] = useState('');
    // time left logic
    useEffect(()=>{
        let interValid = setInterval(()=>{
           setLeftTime( prev => {
            if(prev === 0)
            {
                clearInterval(interValid);
                return 0;
            }
              return prev - 1
           })
        },1000)

        return ()=>{
            clearInterval(interValid);
        }
    },[])

    useEffect(()=>{
        if(leftTime === 0)
        {
            setIsOver(true)
        }
        let formatedTime = (`${(Math.floor(leftTime/60)).toString().padStart(2,0)} : ${(leftTime%60).toString().padStart(2,0)}`)
        setDisplayTime(formatedTime)
    },[leftTime])

    
  return (
    <div className='felx m-[-40px]'>
      <h2 className='text-3xl font-mono text-amber-50  border-3 w-[15%] text-center p-4 rounded-3xl ml-[80%] opacity-75 duration-500 ease-out shadow-2xs'>🕝 {displayTime} </h2>
    </div>
  )
}

export default Timer
