import { useState } from "react";
import Popup from "./Popup";

function App() {
  const [flash, setFlash] = useState(false);
  const [flashOne, setFlashOne] = useState(false);
  const [visible, setVisible] = useState(false);

  const openFlash = () => {
    setFlash(true);
    setTimeout(() => {
      setVisible(true);
    }, 15);
  };

  const openFlashOne = () => {
    setFlashOne(true);
    setTimeout(()=>{setVisible(true)}, 15)
  };

  const closeFlash = () => {
    setFlash(false);
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  const closeFlashOne = () =>{
    setFlashOne(false);
    setTimeout(()=> {setVisible(false)}, 500)
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-8">
        <button
          onClick={openFlash}
          className="w-65 p-4 bg-blue-500 text-3xl text-center font-bold font-mono border-2 rounded-4xl hover:border-amber-50 duration-500 ease-out hover:shadow-2xs"
        >
          punch me
        </button>
        <button
          onClick={openFlashOne}
          className="w-65 p-4 bg-blue-500 text-3xl text-center font-bold font-mono border-2 rounded-4xl hover:border-amber-50 duration-500 ease-out hover:shadow-2xs"
        >
          hit me
        </button>
      </div>

      <Popup flash={flash} visible={visible} closeFlash={closeFlash} title={"Radhe radhe🙏"} description={"Main tumhari khoobi se nahi, tumhari kami se bhi pyaar karta hoon— kyunki tum poori tarah se real ho. Aur yahi mujhe sabse zyada pasand hai. Zindagi bhar ka saath maangta hoon — koi drama nahi, koi bada wada nahi. Bas tum, main, aur ek simple sa saath. Haan bologe? 🌹"} />
      <Popup flash={flashOne} visible={visible} closeFlash={closeFlashOne} title={"Radhe radhe🙏"} description={"Of all the souls this world doth hold, mine eyes found rest in thee alone — not by chance, but by the quiet grace of fate. I ask not for forever. I ask only for thee — today, tomorrow, and every breath between. Say yes, and I shall spend this lifetime proving thou wert worth every moment of waiting. 🌹"} />

    </>
  );
}

export default App;
