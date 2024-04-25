

import React from 'react'
import { options } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {addNowPlayingMovie} from '../utils/movieSlice'

const useNetflix = () => {

    const dispatch=useDispatch();

  const GetMovieData= async () =>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)

    const json= await data.json();
    console.log(json)
    dispatch(addNowPlayingMovie(json.results))
  }

  

  useEffect (()=>{
    GetMovieData();
  })
  return {
    
  }
  
}

export default useNetflix