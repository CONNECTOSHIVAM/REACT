import React, { useState } from "react";
import question from "./questions.json";

const Questions = ({ setIsOver, setScore }) => {
  const [currrentIndex, setCurrentIndex] = useState(0);

  const handelOptionClick = (selectedOption) => {
    if (selectedOption === question[currrentIndex].answer) {
      setScore((prev) => prev + 1);
    }
    if (currrentIndex < question.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsOver(true);
    }
  };
  return (
    <div>
      <h2 className="text-3xl text-white font-mono text-center mt-7">
        Q.{question[currrentIndex].question}
      </h2>
      <div className="flex justify-center items-center mt-15 gap-6">
        {question[currrentIndex].options.map((option) => {
          return (
            <button
              className="w-35 p-4 border-4 border-double border-sky-400 text-sky-400 rounded-2xl  hover:border-amber-50 hover:text-amber-50 duration-500 ease-out"
              key={option}
              onClick={() => {
                handelOptionClick(option);
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
