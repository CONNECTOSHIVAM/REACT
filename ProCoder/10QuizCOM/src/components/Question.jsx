import React, { useEffect, useState } from "react";
import question from "./questions.json";

const Question = ({setScore, setIsOver}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === question[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }
    if (currentIndex < question.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsOver(true);
    }
  };

  return (
    <>
      <h2 className="text-4xl text-amber-50 font-mono text-center mt-18">
        Q.{question[currentIndex].question}
      </h2>

      <div className="flex justify-center items-center gap-25">
        {question[currentIndex].options.map((option) => {
          return (
            <button
              key={option}
              onClick={() => {
                handleOptionClick(option);
              }}
              className="text-amber-50 border-3 border-double w-35 p-4 rounded-2xl mt-18 hover:text-green-800 duration-500 ease-in-out "
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Question;
