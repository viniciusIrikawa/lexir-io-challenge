import React, { useContext } from 'react';
import {ProductContext} from '../Context/ContextProducts'

const ToastNotification = () => {

  const {isActive, setIsActive} = useContext(ProductContext);

  return (
    <div className={`${isActive.active ? 'block' && setTimeout(() => {setIsActive({productName: '', active: false})}, 3000) : 'hidden'} fixed bottom-[0%] left-[10%] md:left-[45%] -translate-y-7 animate-slideUP 
                    w-[80%] md:w-auto p-3 z-20 flex justify-around items-center 
                    bg-[#7fff7f] shadow-[2px_8px_10px_rgba(103,101,101,0.40)] rounded-[10px]`} >

        <div className="ml-3 text-md text-[#065106]"> <span className='font-semibold'> {isActive.productName} </span>  added! </div>
        <button type='button' className='text-[15px] text-[#065106] ml-[20px] bg-[#ffffffed] px-[10px] text-center rounded-full ' 
                onClick={() => setIsActive({productName: '', active: false})}> X
        </button>
    </div>
  )
}

export default ToastNotification