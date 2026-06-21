import React, { useState } from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext';

const Categories = ({className}) => {

    

    const {setNews, fetchNews} = useNewsContext();
    const [selectBtn, setSelectBtn] = useState("");
    const category = ["Business", "Entertainment", "General", "health", "science", "sports", "technology"  ];

    const handleClick = async (e) => {
        const clickValue = e.target.value;
        const data = await fetchNews(`/everything?q=${clickValue}`);
        setNews(data.articles)
        setSelectBtn(clickValue)
        return clickValue;
    }


  return (
    <div className={`${className}`}>
      <Wrapper>
         <div className={`max-w-full w-fit m-auto flex overflow-x-auto scrollbar-none gap-3`}>
            {category.map((list,i)=>{
            return(
                <button onClick={handleClick} key={i} value={list} className={`btn btn-soft btn-warning ${selectBtn === list ?"bg-amber-400 text-amber-50":""}`}>{list}</button>
            )
            })}
         </div>
      </Wrapper>
    </div>
  )
}

export default Categories
