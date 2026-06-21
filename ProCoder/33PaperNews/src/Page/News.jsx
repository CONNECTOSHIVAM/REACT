import React from 'react'
import Wrapper from '../components/Wrapper'

const News = () => {
  return (
    <div>
      <Wrapper>
        <div className='grid grid-cols-3 flex gap-5 bg-base-100 p-10 border-x-2 border-amber-100 rounded-4xl pb-12'>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
      </Wrapper>
    </div>
  )
}

const NewsCard = () => {

    return(
        <div >
            <div className="card bg-base-200 shadow-sm rounded-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-soft btn-warning hover:opacity-70">Read More</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default News
