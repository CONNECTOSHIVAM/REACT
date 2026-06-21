import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { useNewsContext } from "../context/NewsContext";
import Loader from "../components/Loader";

const News = ({ className }) => {

  const {news, setNews, fetchNews, loading } = useNewsContext();


  useEffect(()=>{
    (async()=>{
       const data = await fetchNews();
       setNews(data.articles);
    })()
  },[]);

  if(loading) return <Loader className={`w-fit mx-auto py-24 mb-32`}/>
  

  return (
    <div className={`${className}`}>
      <Wrapper>
        <div className={`grid grid-cols-3 gap-4`}>
          {news.map((newsList,i)=>{
            if(!newsList.urlToImage) return null;
            return(
                <NewsCard key={i} details={newsList}/>
            )
          })}
        </div>
      </Wrapper>
    </div>
  );
};

const NewsCard = ({details}) => {
    
  return (
    <div className="card bg-base-200 shadow-sm">
      <figure>
        <img
          className="w-full aspect-video object-contain"
          src={`${details?.urlToImage}`}
          alt="News Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{`${details?.title}`}</h2>
        <p className="line-clamp-3">
          {details?.description}
        </p>
        <div className="card-actions justify-end">
          <button onClick={()=>(window.open(details.url))} className="btn btn-soft btn-warning ">Read More</button>
        </div>
      </div>
    </div>
  );
};
export default News;
