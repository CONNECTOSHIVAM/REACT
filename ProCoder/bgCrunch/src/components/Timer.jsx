import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [leftTime, setLeftTime] = useState(15);
    const [isRunning, setIsRunning] = useState(true);

    //left time logic
    useEffect(()=>{
        const timer = setInterval(()=>{
            setLeftTime((prev)=> {
                if(prev === 0){
                    clearInterval(timer);
                    return 0
                }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [])
 
    // time formatting logic
    useEffect(()=>{
        let formattedTime = (`${Math.floor(leftTime/60).toString().padStart(2, '0')} min  ${(leftTime%60).toString().padStart(2, '0')} sec`);
        setIsRunning(formattedTime)
    },[leftTime])

  return (
    <div className='flex items-center  justify-center'>
    
      <h1 className='text-center w-[40%] rounded-2xl bg-amber-600 py-6 m-6 text-3xl font-bold text-blue-950 border-3 hover:bg-amber-700 '>Time Left 🕦: {isRunning}</h1>
    </div>
  )
}

export default Timer
