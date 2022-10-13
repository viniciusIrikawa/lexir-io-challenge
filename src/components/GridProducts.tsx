import {ProductContext} from '../Context/ContextProducts'
import Image from 'next/image'
import { useContext } from 'react'
import {Product} from '../types/typeProducts'
import ToastNotification from './ToastNotification'

const GridProducts = () => {

  const {listProducts, cartItems, setCartItems, setIsActive} = useContext(ProductContext);

  const addProduct = (product:Product) => {
    const itemExist = cartItems.find((element) => element.id === product.id);
    
    if(itemExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...itemExist, quantity: itemExist.quantity = 1}: item ))   
      alert ('This product is already in the cart!')
    }
    else{
      setCartItems([...cartItems, product])     
      setIsActive({productName: product.name, active: true})
    }    
  }
  
  return (
    <div>
      <ul className='container my-10 md:grid md:grid-cols-4 md:my-0'>
        {listProducts.map((item) => (
          <li key={item.id} className='mx-5 mb-10 flex flex-col justify-center items-center'> 
            <div className='imgWrapper bg-[#F2F2F2] w-full py-5 flex justify-center items-center'> 
              <Image src={item.image} width={60} height={190} alt={item.name}></Image>
            </div>
            <div className='contentWrapper w-full p-3 shadow-lg'> 
              <div className='w-full flex justify-between items-center pt-2 '>
                <strong> <h3 className='itemName text-[#2D2D2D] uppercase'> {item.name} </h3> </strong>
                <span className='price text-[#6B6B6B]'> €{item.price} </span>
              </div>
                <span className='price text-[#afaeae]'> {item.category} </span>
              <button className='py-1 px-10 mt-2 w-full bg-[#505050] text-[#eeeeee] rounded-md' 
                      onClick={() => {
                        addProduct(item)}}> Add to cart 
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ToastNotification/>
    </div>
  )
}

export default GridProducts