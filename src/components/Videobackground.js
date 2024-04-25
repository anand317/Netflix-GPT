import React from 'react'

import { useSelector } from 'react-redux'
import useTrailerVideo from './customHooks/useTrailerVideo'

const Videobackground = ({id}) => {

   
    useTrailerVideo({id})
    const trailerVideo=useSelector((state)=>state.movie?.trailer)
    if(!trailerVideo) return;
    const {key}=trailerVideo;

  return (
    <div className='w-screen'><iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/e1k1PC0TtmE?si="+key+"?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
  )
}

export default Videobackground