import { useState } from "react";
import Popup from "./Popup";

function App() {
  const [popup, setPopup] = useState(false);
  const [triggerPopup, setTriggerPopup] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center h-screen gap-8">
        <button onClick={()=>{setPopup(true)}} className="w-55 p-4 bg-amber-400 text-2xl border-3 font-mono font-bold text-sky-900 border-[#d97706] rounded-3xl hover:border-sky-600 duration-500 ease-out">
          punch me
        </button>
        <button onClick={()=>{setTriggerPopup(true)}} className="w-55 p-4 bg-amber-400 text-2xl border-3 font-mono font-bold text-sky-900 border-[#d97706] rounded-3xl hover:border-sky-600 duration-500 ease-out">
          trigger me
        </button>
      </div>

      <Popup popup={popup} setPopup={setPopup} title={"radhe radhe🙏"} description={"/P Maine Google kiya — 'how to stop thinking about someone.' 1 crore results aaye, koi kaam nahi aaya. Tumhara naam search kiya — dil ne bola 'yahi answer hai bhai.' Toh seriously yaar, kya hum officially ek baar try kar sakte hain? Worst case — dono friends rahenge. Best case — best story banegi. Deal hai? 😂❤️"} />
      <Popup popup={triggerPopup} setPopup={setTriggerPopup} title={"radhe radhe🙏"} description={"/T Suno, main toh bas timepass kar raha tha life mein — sab theek tha. Phir tum aaye, muskuraye, kuch bola kiya aur dil ne bola 'bhai ab game over.' Seriously yaar, yeh sab tumhari galti hai. Ab ek kaam karo — meri life mein officially aa jao, unofficially toh aa hi chuke ho. 😄🌸"} />

    </>
  );
}

export default App;
