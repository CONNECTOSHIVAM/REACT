import React, { useState } from "react";

import Button from "./components/Button";
import Box from "./components/Box";

const App = () => {
  const colors = [
    "yellow",
    "teal",
    "olive",
    "green",
    "red",
    "orange",
    "pink",
    "tomato",
  ];

  const [color, setColor] = useState("transparent");

  return (
    <div>
      <h1 className="text-amber-800 hover:text-amber-950 transition duration-500 font-mono font-bold underline decoration-wavy decoration-amber-600 text-center text-5xl m-6 p-5 rounded-2xl">
        Color Crunch🎨
      </h1>

      <div className="flex justify-center items-center">
        {colors.map((items) => (
          <Button label={items} color={items} setColor={setColor}  />
        ))}
      </div>
      
      <Box color={color}/>
    </div>
  );
};

export default App;
