import React from 'react'
import Wrapper from './Wrapper'

const Categories = ({className}) => {

    

    const category = ["Business", "Entertainment", "General", "health", "science", "sports", "technology"  ];


  return (
    <div className={`${className}`}>
      <Wrapper>
         <div className={`max-w-full w-fit m-auto flex overflow-x-auto scrollbar-none gap-3`}>
            {category.map((list,i)=>{
            return(
                <button key={i} className="btn btn-soft btn-warning">{list}</button>
            )
            })}
         </div>
      </Wrapper>
    </div>
  )
}

export default Categories
