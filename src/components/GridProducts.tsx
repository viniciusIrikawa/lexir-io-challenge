import {products} from '../pages/api/products'
import {Products} from '../types/typeProducts'
import Image from 'next/image'

const GridProducts = () => {
  return (
    <div>
      <ul className='container grid grid-cols-4'>
        {products.map((item:Products) => (
          <li key={item.id} className='mx-5 mb-10 flex flex-col justify-center items-center'> 
            <div className='imgWrapper bg-[#F2F2F2] w-full py-5 flex justify-center items-center'> 
              <Image src={item.image} width={60} height={190} alt={item.name}></Image>
            </div>
            <div className='contentWrapper w-full p-3 shadow-lg flex justify-between items-center'> 
              <strong> <h3 className='itemName text-[#2D2D2D] uppercase'> {item.name} </h3> </strong>
              <span className='price text-[#6B6B6B]'> €{item.price} </span> 
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GridProducts