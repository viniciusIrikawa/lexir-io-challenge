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
        <h1 className='text-3xl text-center mb-5 font-serif '> Baldoria Vermouth </h1>
      </strong>
      <p> Badoria rosso is a red vermouth that balances fresh, herby bitter notes against. Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels’ and Wouters’ rebellious grandparents.</p>
      <div className='btnWrapper flex justify-center'>
        <button className='text-[#1C8C64] my-5 font-bold'> Read More </button>
      </div>
    </div>
  )
}

export default BaldoriaVermouth