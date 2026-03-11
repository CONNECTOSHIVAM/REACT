import React, { useState } from 'react'
import questions from './questions.json'

const Questions = () => {

  const [currentIndex, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <div>
      <h2 className=' w-[60%] m-auto my-5 text-4xl text-amber-600'>Q. {questions[currentIndex].question} </h2>

      <div className='flex flex-col items-center  justify-center '>

        {
        questions[currentIndex].options.map((option)=>{
          return <button className='w-[30%] rounded-2xl bg-amber-100 py-6 m-6 text-3xl font-bold text-blue-950 border-3 hover:border-3 hover:border-amber-700 hover:shadow-2xl '> {option}</button>
        })
      }

      </div>
    </div>
  )
}

export default Questions
