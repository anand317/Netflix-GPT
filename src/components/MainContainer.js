import React from 'react'
import { useSelector } from 'react-redux'
import Videobackground from './Videobackground'
import { VideoTitle } from './VideoTitle'

const MainContainer = () => {

    const movie=useSelector((store)=>store.movie?.nowPlayingMovies)
    if(!movie) return;

    const {title,overview,id}=movie[0]

  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <Videobackground id={id}/>

        
    </div>
  )
}

export default MainContainer