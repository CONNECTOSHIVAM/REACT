import React from 'react'
import { fetchVideos, fetchPhotos, fetchMemes } from '../api/mediaApi'
import { setQuery, setActiveTab, setResults, setLoading, setError } from '../redux/Featues/serachSlice'
import { useDispatch, useSelector } from 'react-redux'

const ResultGrid = () => {

  const dispatch = useDispatch();
  const {query, activeTab, results, loading, error } = useSelector((store)=>store.search);

  const getData = async() => {

    try {
      let data = []
      if(activeTab === "photos")
      {
        let response = await fetchPhotos(query)
        console.log(response);
      }
      if(activeTab === "videos")
      {
        let response = await fetchVideos(query) 
        console.log(response);
        
      }
      
    } catch (error) {
      
    }
  }
  return (
    <div>
      
    </div>
  )
}

export default ResultGrid
