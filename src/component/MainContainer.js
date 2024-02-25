import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {

    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)

    //early return
    if (!movies)return

    const mainMovies=movies[0]
    console.log(mainMovies)

    const{original_title,overview}=mainMovies

  return (
    <div>
     <VideoBackground/>
     <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer
