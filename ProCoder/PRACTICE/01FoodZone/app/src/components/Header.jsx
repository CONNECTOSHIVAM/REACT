import styled from "styled-components"

const Header = ({searchFood}) => {
  return (
    <TopContainer>
        <div className="logo">
            <img src="/logo.svg" alt="" />
        </div>

        <div className="search">
            <input type="text" onChange={(searchFood)} placeholder="Search your food.." />
        </div>
      
    </TopContainer>
  )
}

export default Header

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    min-height: 140px;
    align-items: center;

    .search{
        input{
            all: unset;
            padding: 17px;
            border: 1px solid red;
            background: transparent;
            min-width: 360px;
            border-radius: 12px;
            color: white;
            font-family: cursive;
            font-size: x-large;
        }
    }

    @media (0< width < 600px){
        flex-direction: column;
        height: 120px;
    }
`
