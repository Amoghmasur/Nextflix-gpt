import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 test-lg w-1/2'>{overview}</p>
      <div>
        <button className='bg-gray-500 rounded-lg bg-opacity-50 text-black p-3 px-8 text-xl'>▶️Play</button>
        <button className='bg-gray-500 rounded-lg bg-opacity-50 text-black p-3 mx-5 px-8 text-xl'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
