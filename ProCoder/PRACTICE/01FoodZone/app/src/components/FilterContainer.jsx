import React from 'react'
import styled from 'styled-components'

const FilterContainer = ({selectedBtn, filterFood }) => {

     const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];
  return (
    <FilterButtonsBox>
      {filterBtns.map((value)=>(<Button key={value.name
      } isSelected={selectedBtn === value.type} onClick={()=>(filterFood(value.type))}>{value.name}</Button>))}
    </FilterButtonsBox>
  )
}

export default FilterContainer

const FilterButtonsBox = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
    gap: 25px;
`
export const Button = styled.button`
    border: none;
    border: 8px;
    padding: 12px 20px;
    font-size: large;
    color: white;
    cursor: pointer;
    transition: 0.3s ease;
    background: ${({isSelected})=>(isSelected ? "#ff4500" : "tomato")};
    &:hover{
        opacity: 0.8;
    }
`