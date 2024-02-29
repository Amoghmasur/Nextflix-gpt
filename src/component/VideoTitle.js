import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='md:px-24 w-screen aspect-video pt-[20%] px-24 absolute text-white  bg-gradient-to-t from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 test-lg w-1/3 hidden md:inline-block'>{overview}</p>
      <div className='my-4 md:m-0'>
        <button className='bg-white rounded-lg hover:bg-opacity-50 text-black p-3 px-8 text-xl md:py-4 md:px-12'>▶️Play</button>
        <button className='bg-gray-500 rounded-lg bg-opacity-50 text-white p-3 mx-5 px-8 text-xl hidden md:inline-block'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
