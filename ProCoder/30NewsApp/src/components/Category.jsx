import React from "react";
import Wrapper from "./Wrapper";

const Category = ({className}) => {
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
     <Wrapper>
        <div className={`max-w-full w-fit m-auto flex overflow-x-auto scrollbar-none gap-3 ${className}`}>
            {categories.map((list,i)=>(
              <button key={i} class="btn btn-primary">{list}</button>
            ))}
        </div>
     </Wrapper>
  );
};

export default Category;
