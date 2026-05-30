import { useEffect, useState } from "react";
import styled from "styled-components";

import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButton] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Unable to fetch data.");
        console.error(error);
      }
    };

    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(data);
      return;
    }

    const filter = data.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter);
  };

  const filterFood = (type) => {
    setSelectedButton(type);

    if (type === "all") {
      setFilteredData(data);
      return;
    }

    const filter = data.filter(
      (food) => food.type.toLowerCase() === type.toLowerCase()
    );

    setFilteredData(filter);
  };

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

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="Logo" />
          </div>

          <div className="search">
            <input
              type="text"
              onChange={searchFood}
              placeholder="Search your food..."
            />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <Button
              key={value.name}
              isSelected={selectedButton === value.type}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>

      <SearchResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      all: unset;
      background-color: transparent;
      padding: 8px 25px;
      min-width: 380px;
      border: 1px solid tomato;
      color: white;
      font-family: cursive;
      font-size: x-large;
      border-radius: 8px;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 35px;
`;

export const Button = styled.button`
  background: ${({ isSelected }) =>
    isSelected ? "#ff4500" : "tomato"};

  border-radius: 8px;
  padding: 12px 20px;
  font-size: large;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;