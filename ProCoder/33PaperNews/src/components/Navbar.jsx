import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext'

const Navbar = ({className}) => {

  const {setNews, fetchNews} = useNewsContext();

  let timer = null;
  const searchNews = async(e) => {

    const searchValue = e.target.value;
    if(!searchValue) return;

    clearTimeout(timer)

    timer = setTimeout(async()=>{
        const data = await fetchNews(`/everything?q=${searchValue}`);
        setNews(data.articles) 
    },1000);

  }



  return (
    <div className={`${className}`}>
      <Wrapper>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-amber-400 font-mono">PAPER NEWS📰</a>
  </div>
  <div className="flex gap-2">
    <input onChange={searchNews} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto border-amber-400 outline-1 focus:outline-amber-500" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://t3.ftcdn.net/jpg/06/07/84/82/360_F_607848231_w5iFN4tMmtI2woJjMh7Q8mGvgARnzHgQ.jpg" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
      </Wrapper>
    </div>
  )
}

export default Navbar
