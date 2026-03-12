import { useState } from "react";
import Button from "./components/Button";


function App() {
  const [count, setCount] = useState(0);

  const colors = [
    "#FF5733", // Red
    "#33FF57", // Green
    "#3357FF", // Blue
    "#F1C40F", // Yellow
    "#9B59B6", // Purple
    "#E67E22", // Orange
    "#1ABC9C", // Turquoise
    "#2ECC71", // Emerald
    "#3498DB", // Peter River
    "#E74C3C", // Alizarin
  ];

  return (
    <>
      <h1 className="text-center text-6xl underline decoration-wavy m-5 text-orange-500 font-mono font-bold">Color Munch🎨</h1>

      <div className="flex items-center justify-center gap-5">
        {colors.map((color) => {
          return (
            <Button label={color} color={color}>
              {color}
            </Button>
          );
        })}
      </div>
    </>
  );
}

export default App;
