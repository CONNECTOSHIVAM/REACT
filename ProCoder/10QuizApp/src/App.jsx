import { useState } from "react";
import Buttons from "./components/Buttons";
import Colorbox from "./components/Colorbox";

function App() {
  // const [count, setCount] = useState(0);
  const [color, setColor] = useState("transparent");

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
            <Buttons label={color} color={color} setColor={setColor} >
              {color}
            </Buttons >
          );
        })}
      </div>

      <Colorbox color={color}/>
    </>
  );
}

export default App;
