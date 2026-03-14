import { useState } from "react";

function App() {
  const [popup, setPopup] = useState(true);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <button onClick={()=>{setPopup(true)}} className="w-55 p-4 bg-amber-400 text-2xl border-3 font-mono font-bold text-sky-900 border-[#d97706] rounded-3xl hover:border-sky-600 duration-500 ease-out">
          punch me
        </button>
      </div>

    </>
  );
}

export default App;
