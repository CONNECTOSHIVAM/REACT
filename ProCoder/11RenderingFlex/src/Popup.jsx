import React from "react";

const Popup = ({popup, setPopup, title, description}) => {
  return (
    <>
      {popup && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-[#121212] flex justify-center items-center">
          <button
            onClick={() => {
              setPopup(false);
            }}
            className="rounded-2xl hover:opacity-70 border-2 border-double text-[tomato] p-4 text-center absolute top-[1rem] right-[1rem]"
          >
            ❌
          </button>

          <div className="w-full h-full max-w-[45rem] max-h-[25rem] rounded-b-4xl bg-[#272626] shadow-2xs hover:border-2 text-blue-400 duration-300 ease-linear">
            <h1 className="text-center text-4xl text-orange-600 font-mono font-bold mt-8">
              {title}
            </h1>
            <p className="text-center text-lg text-amber-100 mt-4 font-serif ">
              {description}
            </p>

            <div className="flex items-center justify-center gap-8 mt-10 ">
              <button className="w-32 p-4 bg-emerald-400 text-lg font-sans font-bold text-sky-900 border-[#10b981] rounded-2xl hover:opacity-70 duration-500 ease-out">
                Love
              </button>
              <button className="w-32 p-4 bg-red-400 text-lg font-sans font-bold text-sky-900 border-[#ef4444] rounded-2xl hover:opacity-70 duration-500 ease-out ">
                Sachii..
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
