import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-zinc-800 py-5 w-full py-7 px-12'>
      <div className='flex justify-around'>
        <div className='text-[#fff] text-4xl font-serif'> Lexir </div>

        <ul className='text-[#fff]'>
          <span className='uppercase text-[#8F8F8F] '> Community</span>
          <li className='my-2'>Lexir for Brands</li>
          <li className='my-2'>Business Buyers </li>
          <li className='my-2'>Sales Affiliates </li>
        </ul>

        <ul className='text-[#fff]'>
          <span className='uppercase text-[#8F8F8F]'> Platform </span>
          <li className='my-2'>Resources</li>
          <li className='my-2'>Pricing </li>
          <li className='my-2'>Get Started </li>
        </ul>

        <ul className='text-[#fff]'>
          <span className='uppercase text-[#8F8F8F]'> Company</span>
          <li className='my-2'>About</li>
          <li className='my-2'>Contact </li>
          <li className='my-2'>Legal </li>
        </ul>

        <ul className='text-[#fff]'>
          <span className='uppercase text-[#8F8F8F]'> Lexir Shop</span>
          <li className='my-2'>Brands</li>
          <li className='my-2'>Spirits </li>
          <li className='my-2'>Wine</li>
          <li className='my-2'>Blog</li>
        </ul>
      </div>
      
      <div className='h-px w-full bg-stone-600 text-[#8F8F8F] my-5'>  </div>
  
      <div className='w-full flex justify-between'>
        <div className='mx-5 text-[#fff]'> © 2022 Lexir Inc. </div>
        <div>
          <span className='mx-5 text-[#fff]'>Privacy</span>
          <span className='mx-5 text-[#fff]'>Terms of service</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer