import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {

  const [user, setUser] = useState('John Doe')  

  return (
    <header className='w-full border-b-4 py-7 px-12 flex justify-between items-center'>
        <div>
            <Link href={"/"}> 
                <a className='text-5xl font-serif'> Lexir </a>
            </Link>
        </div>
        <div>
            <ul className='flex justify-around uppercase '>
                <li className='mx-5'>
                    <Link href={''}>
                        <a> products </a>
                    </Link>
                </li>
                <li className='mx-5'>
                    <Link href={''}>
                        <a> brands </a>
                    </Link>
                </li>
                <li className='mx-5'>
                    <Link href={''}>
                        <a> hello, <span className='font-bold'> {user} </span> </a>
                    </Link>
                </li>
                <li className='mx-5'>
                    <Link href={''}>
                        <span> cart </span>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header