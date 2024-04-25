import React from 'react'
import { addTrailerVideo } from '../../utils/movieSlice'
import { options } from '../../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useTrailerVideo = ({id}) => {

    const dispatch=useDispatch();


    const GetMovieVideo = async ()=>{
        const video= await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",options)

        const json=await video.json();
        const trailer=json.results?.filter((t)=>t.type=="Trailer");
        dispatch(addTrailerVideo(trailer))
        
    }

    useEffect(()=>{
        GetMovieVideo();
    },[])

}

export default useTrailerVideo