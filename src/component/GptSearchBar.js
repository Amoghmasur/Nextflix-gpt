import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { tmdb_api_options } from '../utils/constant'
import { addGptMovieResults } from '../utils/gptSlice'

const GptSearchBar = () => {

  const langkey=useSelector(store=>store.config.lang)
  const dispatch=useDispatch()
  const searchText=useRef(null)

  const searchMovieTMDB = async (movie)=>{
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1',tmdb_api_options
    )
    const json=await data.json()
    return json.results
  }


  const handleGptSearchClick = async () =>{

    const gptquery='act as a movie recommendation system and suggest some movies for the query'+ searchText.current.value + 'give me only 5 top movies,comma seperated'

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptquery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices?.[0]?.message?.content)

    const gptMovies=gptResults.choices?.[0]?.message?.content.split(',')

    const promiseArray=gptMovies.map((movie)=> searchMovieTMDB(movie))
    const tmbdresults= await Promise.all(promiseArray)
    console.log(tmbdresults)

   dispatch(addGptMovieResults({movieNames:gptMovies,movieresults: tmbdresults}))

  }


  return (
    <div className='pt-[20%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
          <input
          ref={searchText}
          type='text'
          className='p-4 m-4 col-span-9 rounded-lg'
          placeholder={lang[langkey].gptSearchPlaceholder}
          />
          <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
           onClick={handleGptSearchClick}
           >
            {lang[langkey].search}
          </button>
      </form>
    </div>
  )
}

export default GptSearchBar
