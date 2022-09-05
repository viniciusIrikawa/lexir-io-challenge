import Image from 'next/image'
import React from 'react'

const BaldoriaVermouth = () => {
  return (
    <div className='my-10'>
      <div className='imageWrapper w-full flex justify-center mb-10'>
          <Image src={require('../assets/images/baldoria-logo.png')} 
                width={216} 
                height={77}  
                alt='Baldoria Vermouth'
                className=''/>
      </div>
      <strong>
        <h1 className='text-3xl text-center mb-5 font-serif '> Lorem ipsum dolor </h1>
      </strong>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className='btnWrapper flex justify-center'>
        <button className='text-[#1C8C64] my-5 font-bold'> Read More </button>
      </div>
    </div>
  )
}

export default BaldoriaVermouth