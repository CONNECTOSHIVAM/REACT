import React from "react";
import Wrapper from "./Wrapper";

const Category = ({ className }) => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div className={`${className}`}>
      <Wrapper>
        <div
          className={`max-w-full w-fit m-auto flex overflow-x-auto scrollbar-none gap-3 `}
        >
          {categories.map((list, i) => (
            <button key={i} class="btn btn-primary">
              {list}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
