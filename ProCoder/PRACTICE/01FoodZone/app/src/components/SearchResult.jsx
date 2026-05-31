import React from 'react'
import styled from 'styled-components'
import { Container, BASE_URL } from '../App'
import { Button } from './FilterContainer'

const SearchResult = ({data}) => {

    if(!data || data.length ===0 ){
        return(
            <FoodCardContainer>
                <Container>
                    <NoData>No food items found.</NoData>
                </Container>
            </FoodCardContainer>
        )
    }
  return (
    <FoodCardContainer>
        <Container>
           <FoodCards>
               {data.map((food)=>(<FoodCard key={food.name}>
                 <div className="food_image">
                    <img src={`${BASE_URL}${food.image}`} alt={food.name} />
                 </div>
                 <div className="food_info">
                    <div className="info">
                        <h3>{food.name}</h3>
                        <p>{food.text}</p>
                    </div>
                    <Button>
                        ${Number(food.price).toFixed(2)}
                    </Button>
                 </div>
               </FoodCard>))}
           </FoodCards>
        </Container>
    </FoodCardContainer>
  )
}

export default SearchResult

const FoodCardContainer = styled.section`
   min-height: calc(100vh - 220px);
   background-image: url("/bg.png");
   background-size: cover;
   background-position: center;
`

const FoodCards = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   padding: 80px 25px;
   row-gap: 35px;
   column-gap: 25px;
`

const FoodCard = styled.div`
    width: 350px;
    height: 180px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    display: flex;
    gap: 10px;
    padding: 10px;

    .food_image{
        display: flex;
        align-items: center;
    }
    .food_image img{
        width: 120px;
        height: 120px;
        object-fit: contain;
    }
    .food_info{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        color: white;
    }
    .info{
        width: 100%;
    }
     h3 {
    margin-top: 8px;
    font-size: 18px;
    font-weight: 600;
  }

  p {
    margin-top: 6px;
    font-size: 14px;
    line-height: 1.4;
  }

  button {
    font-size: 15px;
  }
`

const NoData = styled.h2`
  color: white;
  text-align: center;
  padding-top: 100px;
`