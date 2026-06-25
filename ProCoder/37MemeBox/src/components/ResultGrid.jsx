import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos, fetchMems } from '../api/mediaApi'
import { setQuery, setResults, setActiveTabs, setError, setLoading } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const ResultGrid = () => {

    const dispatch = useDispatch()
    const {query, activeTab, results, loading, eroor} = useSelector((store) => store.search);

    

        const getData = async() => {
            try {
                let data = []
                if(activeTab === 'photos')
                {
                    let response = await fetchPhotos(query)
                    console.log(response);
                    
                }
                if(activeTab == "videos")
                {
                    let response = await fetchVideos(query);
                    console.log(response);
                    
                }
                if(activeTab == "gif")
                {
                    let response = await fetchMems(query);
                    console.log(response);
                    
                }

            } catch (error) {
                
            }
        }

        useEffect(()=>{
            getData()
        },[activeTab,query])
   
  return (
    <div>
      

    </div>
  )
}

export default ResultGrid
