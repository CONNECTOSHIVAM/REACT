import { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
  const [count, setCount] = useState(0);

  const colors = [
    "tomato",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan",
    "magenta",
    "lime",
  ];

  return (
    <>
      <h1 className="text-center text-5xl text-teal-700 font-extrabold font-mono underline decoration-wavy m-7 ">
        Color Crunch
      </h1>

      <div className="flex justify-center items-center gap-2.5 text-center ">
        {colors.map((color) => {
          
          return (
            <Buttons label={color} color={color} >
              {color}
            </Buttons>
          );
        })}
      </div>
    </>
  );
}

export default App;
