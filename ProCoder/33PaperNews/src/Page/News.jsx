import React, { useEffect } from 'react'
import Wrapper from '../components/Wrapper'
import { useNewsContext } from '../context/NewsContext'
import Loader from '../components/Loader';

const News = () => {

    const {news, setNews, fetchNews, loading} = useNewsContext();

    useEffect(()=>{
        (async()=>{
            const data = await fetchNews();
            setNews(data.articles);
        })()
    },[])

    if(loading) return <Loader/>

  return (
    <div>
      <Wrapper>
        <div className='grid grid-cols-3 flex gap-5 bg-base-100 p-10 border-x-2 border-amber-100 rounded-4xl pb-12'>
            {news.map((list, index)=>{
                if(!list.urlToImage) return null;
                return(
                    <NewsCard key={index} details={list}/>
                )
            })}
        </div>
      </Wrapper>
    </div>
  )
}

const NewsCard = ({details}) => {

    console.log(details);

    return(

            <div className="card bg-base-200 shadow-sm rounded-xl">
  <figure>
    <img
      className='w-full aspect-video object-contain'
      src={details.urlToImage}
      alt="News Thumbnail" />
  </figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-2">{details.title}</h2>
    <p className='line-clamp-3'>{details.description}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>(window.open(details.url))} className="btn btn-soft btn-warning hover:opacity-70">Read More</button>
    </div>
  </div>
</div>
    )
}

export default News
