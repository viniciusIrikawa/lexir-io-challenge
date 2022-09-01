import React, { useState } from 'react'

const Location = () => {
  const [location, setLocation] = useState('London, United Kindom')

  return (
    <div className='my-10'>

      <div className='locationWrapper flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-7 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <h4 className='mb-2 text-lg'> Location </h4>
      </div>

      <span className='text-[#595959] text-2xl text-right ml-1'> {location} </span>

    </div>
  )
}

export default Location