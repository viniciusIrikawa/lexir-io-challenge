import Header from "@components/Header";
import Footer from "@components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { ProductContext } from '../Context/ContextProducts'
import { Product } from '../types/typeProducts';

export default function Cart() {

  const promoCode = "#NICE10"
  const discountValue = -5;

  const [inputPromoCode, setInputPromoCode] = useState("");

  const { cartItems, setCartItems, chip, setChip, discount, setDiscount } = useContext(ProductContext)
  let subtotalCartPrice = 0;

  const decrementItem = (idItem: number) => {
    const findItem:Product = cartItems.find( item => item.id === idItem )!;

    if(findItem.quantity > 0){
      setCartItems(cartItems.map( item => item.id === idItem ? 
        {...findItem, quantity: findItem.quantity - 1} : item))
    }
  }

  const incrementItem = (idItem: number) => {
    const findItem:Product = cartItems.find( item => item.id === idItem )!;

    if(findItem.quantity < 10){
      setCartItems(cartItems.map( item => item.id === idItem ? 
        {...findItem, quantity: findItem.quantity + 1} : item))
    }    
  }

  const removeItem = (idItem: number) => {
    const items:Product[] = cartItems.filter( item => item.id !== idItem );
    setCartItems(items);
  }

  const applyPromoCode = () => {
    if (inputPromoCode.toUpperCase() === promoCode) {
      setDiscount(discountValue);
      createChipPromoCode(promoCode);
    }
    
    setInputPromoCode("");
  }

  const removePromoCode = () => {
    setDiscount(0);
    setChip("");
  }

  const createChipPromoCode = (namePromoCode: string) => {
    setChip(namePromoCode)
  }

  return (
    <div>
      <Header/>

      <main className="w-full grid-cols-2 pt-[50px] pb-[300px] px-3">
        <div className={`${cartItems.length === 0 && "hidden"} md:px-[1.5%] flex items-center justify-around mb-10`}>
          <Link href={'/'} >
            <a className="md:bg-[#f5f5f5] md:hover:bg-slate-200 transition duration-300 p-2 rounded-full absolute left-[2%]"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
            </a>
          </Link>
          <h1 className="w-full text-center text-xl"> Cart details </h1>
        </div>

        <div className={`md:grid md:grid-cols-4 ${cartItems.length === 0 && "md:grid-cols-1"}`}>
          {cartItems.length === 0 ? 
            ( <div className="flex flex-col h-[40vh]">
                <div className="w-full flex justify-center mb-5">
                  <Image src={require("../assets/images/empty_cart.jpg")} width={200} height={200} alt=''></Image>
                </div>
                <span className="pb-2 text-center text-[20px]"> No items in your cart. </span> 
                <Link href={'/'}>
                  <a className="underline text-center text-[#ff0505]"> Go back </a>
                </Link>
              </div>
            ) : 
            (
              <table className=" md:col-span-3 md:mx-5 divide-y-[0.5px] w-full h-[20vh] md:w-auto divide-[#dddddd]">
                <thead>
                  <tr className="bg-[#dddddd] h-0">
                    <th className="w-0 py-2"> Product </th>
                    <th className="w-0 py-2"> Price </th>
                    <th className="w-0 py-2"> Quantity </th>
                    <th className="w-0 py-2"> Total </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item:Product) => {
                    subtotalCartPrice += item.price * item.quantity
                    return (
                      <tr key={item.id} className="">
                        <td className="py-3 text-center flex items-center justify-center">
                          <Image src={item.image} width={35} height={120} alt={item.name}></Image>
                          <div className="ml-3 text-left">
                            <h4 className=""> {item.name} </h4>
                            <span className="text-[#AFAEAE]"> {item.category} </span>
                          </div>
                        </td>
  
                        <td className="py-3 text-center text-[#059e05] font-bold-400"> €{item.price} </td>
  
                        <td className="py-3 text-center"> 
                          <div className="">
                            <button className="mx-2 border-[1px] bg-[#f5f5f5] w-[20px]" onClick={ () => decrementItem(item.id) }> - </button>
                              {item.quantity === 0 ? 
                                ( <button onClick={ () => removeItem(item.id)} className=""> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#ff0505]">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
  
                                  </button>) : 
                                ( <span> {item.quantity} </span> )
                              }
                            <button className="mx-2 border-[1px] bg-[#f5f5f5] w-[20px]" onClick={() => incrementItem(item.id) }> + </button>
  
                          </div>
                        </td>
  
                        <td className="py-3 text-center"> €{item.price * item.quantity} </td>
                      </tr>
                    )
                  }
                  )}
                </tbody>
              </table>
            )
          }

          <aside className={`${cartItems.length === 0 && "hidden"} md:col-span-1 md:h-[270px] mt-8 md:mt-0 relative `}>
            <div className="w-full flex justify-between items-start">
              <input type="text"
                  placeholder="Promo Code (#NICE10)"
                  className="w-full h-10 rounded-l-md"
                  onChange={(e) => setInputPromoCode(e.target.value)}
                  value={inputPromoCode}/>
                  
              <button className="bg-[#505050] h-[40px] text-[#e4e4e4] rounded-r-md px-3 font-bold "
                      title="Apply promo"
                      onClick={applyPromoCode}> Apply </button>
            </div>
            
            <div className={`${chip === "" ?  "hidden" : "block"} chipPromoCode bg-gray-300 inline-block mt-2 px-3 py-1 rounded-full text-[#4e4e4e]`}> 
                <span> {chip} </span>
                <button className="rounded-full h-auto" 
                        title="Remove promo code" 
                        onClick={removePromoCode}> x </button>
            </div>

            <div className="w-full flex justify-between px-[3%] text-zinc-500 my-2">
              <span> Subtotal:  </span>
              <span>  € {subtotalCartPrice} </span>
            </div>
            
            <div className="w-full flex justify-between px-[3%] text-zinc-500 my-2">
              <span> Discount:  </span>
              <span> € {discount} </span>
            </div>

            <div className="w-full flex justify-between px-[3%] text-zinc-500 my-2">
              <span> Total:  </span>
              <span>  € {subtotalCartPrice + (discount)} </span>
            </div>

            <button className="bg-[#505050] h-[40px] w-[100%] text-[#e4e4e4] px-3 mt-3 font-bold rounded-lg md:absolute md:bottom-[5%]"
                    title="Checkout"> Checkout 
            </button>      
          </aside>
        </div>

      </main>

      <Footer/>
    </div>
  );
}

