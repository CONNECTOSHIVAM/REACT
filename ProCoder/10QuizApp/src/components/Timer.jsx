import React, { useEffect, useState } from 'react'

const Timer = ({setIsOver}) => {

    const [leftTime, setLeftTime] = useState(20);
    const [displayTime, setDisplayTime] = useState('');

    //left time logic
    useEffect(()=>{
        let intervalid = setInterval(()=>{
            setLeftTime(prev => {
                if(prev <= 0){
                    clearInterval(intervalid)
                    return 0;
                }
                return prev - 1;
            })
        },1000);

        return () => {
            clearInterval(intervalid)
        }
    },[])

    // Time format logic
    useEffect(()=>{

        if(leftTime === 0){
            setIsOver(true);
        }
        let formattedTime = (`${(Math.floor(leftTime/60)).toString().padStart(2,0)}: ${(leftTime%60).toString().padStart(2, 0)}`)
        setDisplayTime(formattedTime)
    },[leftTime])
   return (
    <div>
      <h1 className='text-center text-2xl text-sky-800 m-5 font-mono font-bold'>Time Left🕦: {displayTime}</h1>
    </div>
  )
}

export default Timer
