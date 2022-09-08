import {ProductContext} from '../Context/ContextProducts'
import Image from 'next/image'
import { useContext } from 'react'

const GridProducts = () => {
  const {listProducts} = useContext(ProductContext);

  return (
    <div>
      <ul className='container my-10 md:grid md:grid-cols-4 md:my-0'>
        {listProducts.map((item) => (
          <li key={item.id} className='mx-5 mb-10 flex flex-col justify-center items-center'> 
            <div className='imgWrapper bg-[#F2F2F2] w-full py-5 flex justify-center items-center'> 
              <Image src={item.image} width={60} height={190} alt={item.name}></Image>
            </div>
            <div className='contentWrapper w-full p-3 shadow-lg'> 
              <div className='w-full flex justify-between items-center pt-2 pb-3'>
                <strong> <h3 className='itemName text-[#2D2D2D] uppercase'> {item.name} </h3> </strong>
                <span className='price text-[#6B6B6B]'> €{item.price} </span>
              </div>
              <button className='py-1 px-10 mt-2 w-full bg-[#4be64bc9] rounded-md'> Add to cart </button>
            
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GridProducts