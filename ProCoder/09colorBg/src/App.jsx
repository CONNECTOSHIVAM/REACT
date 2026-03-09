import React from "react";

import Button from "./components/Button";

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

  return (
    <div>
      <h1 className="text-amber-800 hover:text-amber-950 transition duration-500 font-mono font-bold underline decoration-wavy decoration-amber-600 text-center text-5xl m-6 p-5 rounded-2xl">
        Color Crunch🎨
      </h1>

      <div className="flex justify-center items-center">
        {colors.map((items) => (
          <Button label={items} color={items} />
        ))}
      </div>
    </div>
  );
};

export default App;
