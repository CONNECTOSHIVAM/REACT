import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_API_KEY;


export const fetchPhotos = async (query,page=1,per_page=20) => {

    const response = await axios.get('https://api.unsplash.com/search/photos',{
        params: {query, page, per_page},
        headers: {Authorization: `Client-ID ${UNSPLASH_KEY}`},
    });

    console.log(response.data.results);
    
    
    return response.data.results

    
}

export const fetchVideos = async(query, per_page=15) => {

    const response = await axios.get('https://api.pexels.com/v1/videos/search',
        {
            params: {query, per_page},
            headers: {Authorization: PEXELS_KEY}
        }
    )

    console.log(response.data.videos);
    
    
    return response.data.videos
    

}

export const fetchMems = async () => {
    const response = await axios.get('https://api.imgflip.com/get_memes');
    console.log(response.data.data.memes);
    
}