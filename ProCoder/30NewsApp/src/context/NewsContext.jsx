import { createContext, useContext, useState } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  const fetchNews = async (url = "/everything?q=india") => {
     try {
          const response = await api.get(
      `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );
     console.log(response.data);
     return response.data
     } catch (error) {
       console.log(error);
     }
  };

  const value = {news, setNews, fetchNews}

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };
