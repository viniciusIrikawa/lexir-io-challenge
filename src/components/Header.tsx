import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <div>
            <Link href={"/"}> 
                <a> Lexir </a>
            </Link>
        </div>
        <div>
            <ul>
                <li>
                    <Link href={''}>
                        <a> PRODUCTS </a>
                    </Link>
                </li>
                <li>
                    <Link href={''}>
                        <a> BRANDS </a>
                    </Link>
                </li>
                <li>
                    <Link href={''}>
                        <a> Hello, USER </a>
                    </Link>
                </li>
                <li>
                    <Link href={''}>
                        <span> CART </span>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header