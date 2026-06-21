import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Category = ({ className }) => {
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];


  const {setNews, fetchNews} = useNewsContext();

  const handleClick = async(e) => {
    const value = e.target.value;
    const data = await fetchNews(`/everything?q=${value}`);
    setNews(data.articles)
  }
  



  return (
    <div className={`${className}`}>
      <Wrapper>
        <div
          className={`max-w-full w-fit gap-3 m-auto flex overflow-x-auto scrollbar-none`}
        >
          {categories.map((list, i) => (
            <button
              onClick={handleClick}
              key={i}
              value={list}
              className="btn btn-outline border font-serif hover:border-amber-200 hover:text-yellow-400"
            >
              {list}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
