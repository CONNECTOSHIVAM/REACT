import styled from "styled-components";
import Header from "./components/Header";
import FilterContainer from "./components/FilterContainer";
import SearchResult from "./components/SearchResult";
import { useEffect, useState } from "react";

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState(null);

  useEffect(()=>{

    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        setData(data)
        setfilteredData(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError("Unable to fetch data.");
        console.error(error);
      }
    };
    fetchFoodData();
  },[])

  const searchFood = (e) => {
     const searchValue = e.target.value;

     if(searchValue === "")
     {
      setfilteredData(data);
      return
     }

     const filter = data.filter((food)=>(food.name.toLowerCase().includes(searchValue.toLowerCase())));
     setfilteredData(filter);
  }

  const filterFood = (type) => {
    setSelectedBtn(type);

    if(type === "all")
    {
      setfilteredData(data);
      return
    }
    const filter = data.filter((food)=> food.type.toLowerCase() === type.toLowerCase());
    setfilteredData(filter)
  }

  if(error) return <div>{error}</div>
  if(loading) return <div>Loading...</div>



  return (
    <>
    <Container>
      <Header searchFood={searchFood} />
      <FilterContainer selectedBtn={selectedBtn} filterFood={filterFood} />
    </Container>
    <SearchResult data={filteredData}/>
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
