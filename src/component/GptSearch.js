import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-20 inset-0'>
          <img className='w-full h-full object-cover' alt='logo' src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg'/>
      </div>
      <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestion/>
      </div>
    </>
  )
}

export default GptSearch
