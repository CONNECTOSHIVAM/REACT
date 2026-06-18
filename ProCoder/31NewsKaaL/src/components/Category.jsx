import React from "react";
import Wrapper from "./Wrapper";

const Category = ({className}) => {
  const categoryList = [
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
        <div className={`max-w-full w-fit m-auto flex gap-3 scrollbar-none overflow-x-auto`}>
            {categoryList.map((list, i) => (
        <button key={i} className="btn btn-soft btn-warning">
          {list}
        </button>
      ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
