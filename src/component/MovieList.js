import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title,movies }) => {

   if (!movies) {
    return <div>No movies available</div>;
  }

  return (

    <div className='px-4'>
      <h1 className='text-3xl py-2 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitScrollbar: 'none' }}>
            <div className='flex '>
             {movies?.map((movie) =>(
              <MovieCard key={movie?.id} posterPath={movie?.poster_path}/>
             ))}
            </div>
        </div>
    </div>

  )
}

export default MovieList
