import React from 'react'
import { Image_CDN } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null
  return (
    <div className='w-48 pr-4 md:w-48 transition-transform hover:scale-110'>
        <img alt='Image_cdn' src={Image_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard
