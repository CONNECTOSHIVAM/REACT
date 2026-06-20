import React, { useContext, useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { useNewsContext } from "../context/NewsContext";

const News = ({ className }) => {
  const { fetchNews, news, setNews } = useNewsContext();

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);

  console.log(news);

  return (
    <Wrapper>
      <div className={`grid grid-cols-4 gap-4 ${className}`}>
        {news.map((newsDetails, index) => {
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
