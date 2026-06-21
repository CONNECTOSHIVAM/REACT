import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";
import News from "../pages/News";

const Category = ({ className }) => {


  const {setNews, fetchNews} = useNewsContext();

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleClick = async(e) => {
      const value = e.target.value;
      const data = await fetchNews(`/everything?q=${value}`)
      setNews(data.articles)
  }

  return (
    <div className={`${className}`}>
      <Wrapper>
        <div
          className={`max-w-full w-fit m-auto flex overflow-x-auto scrollbar-none gap-3 `}
        >
          {categories.map((list, i) => (
            <button onClick={handleClick} key={i} value={list} class="btn btn-primary">
              {list}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
