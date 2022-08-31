import React, { useState } from 'react'

const Location = () => {
  const [location, setLocation] = useState('London, United Kindom')

  return (
    <div className='my-10'>
        <h4 className='mb-2 text-base'> Location </h4>
        <span className='text-[#595959] text-2xl'> {location} </span>
    </div>
  )
}

export default Location