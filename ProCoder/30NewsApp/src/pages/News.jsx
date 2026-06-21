import React, { useContext, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { useNewsContext } from "../context/NewsContext";
import Loader from "../components/Loader";

const News = ({ className }) => {
  const { fetchNews, news, setNews, loading } = useNewsContext();

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);

  if(loading) return <Loader className={`w-fit mx-auto py-24 mb-32`}/>

  return (
    <Wrapper>
      <div className={`grid grid-cols-4 gap-4 ${className}`}>
        {news.map((newsDetails, index) => {
          if(!newsDetails.urlToImage)   return null; 
          return <NewsCard key={index} details={newsDetails} />;
        })}
      </div>
    </Wrapper>
  );
};

const NewsCard = ({ details }) => {
  console.log(details);
  return (
    <div className={`card bg-base-300  shadow-sm `}>
      <figure>
        <img
          className="w-full aspect-video object-contain"
          src={details?.urlToImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{details?.title}</h2>
        <p className="line-clamp-3">
          {details?.description}
        </p>
        <div className="card-actions justify-end mt-7">
          <button onClick={()=>(window.open(details.url))} className="btn badge-outline-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default News;
