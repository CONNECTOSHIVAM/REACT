import React from 'react'

const Popup = ({flash, visible, closeFlash, title, description}) => {
  return (
    <>
    {flash && (
        <div className='absolute top-0 left-0 w-screen h-screen bg-[#232323] flex justify-center items-center transition-opacity duration-500 ease-out ${visible ? "opacity-100" : "opacity-0"}'>
          <button
            onClick={closeFlash}
            className="absolute text-center p-4 border-2 text-orange-700 rounded-2xl top-[1rem] right-[1rem] hover:opacity-70 duration-500 ease-out"
          >
            ❌
          </button>

          <div className="w-full h-full max-h-[23rem] max-w-[47rem] rounded-t-4xl rounded-b-[40%] bg-[white] opacity-65 hover:opacity-80  flex items-center justify-center flex-col border-3 border-double hover:border-pink-500 duration-500 ease-out">
            <h1 className="text-3xl text-pink-800 font-mono font-bold">
              {title}
            </h1>
            <p className="text-xl font-serif p-8 text-pink-700">
              {description}
            </p>


            <div className="flex justify-center items-center gap-7">
              <button className="w-45 p-4 bg-pink-700 text-amber-50 text-center font-mono rounded-2xl text-xl border-3 border-double hover:border-amber-100 cursor-pointer">Love❤️ </button>
              <button className="w-45 p-4 bg-pink-700 text-amber-50 text-center font-mono rounded-2xl text-xl border-3 border-double hover:border-amber-100 cursor-pointer">Hanji..😍 </button>


            </div>
          </div>
        </div>
      )}

      
    </>
  )
}

export default Popup
