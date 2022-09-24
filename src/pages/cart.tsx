import Header from "@components/Header";
import Footer from "@components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from '../Context/ContextProducts'

export default function Cart() {

  const { cartItems, setCartItems } = useContext(ProductContext)

  const decrement = (idItem: number) => {
    const findItem:any = cartItems.find( item => item.id === idItem );

    if(findItem.quantity > 0){ 
      setCartItems(cartItems.map( item => item.id === idItem ? 
        {...findItem, quantity: findItem.quantity - 1} : item))
    }
  }

  const increment = (idItem: number) => {
    const findItem:any = cartItems.find( item => item.id === idItem );

    if(findItem.quantity < 10){
      setCartItems(cartItems.map( item => item.id === idItem ? 
        {...findItem, quantity: findItem.quantity + 1} : item))
    }
  }

  const remove = (idItem: number) => {
    const items:any = cartItems.filter( item => item.id !== idItem );
    setCartItems(items);
  }

  return (
    <div>
      <Header/>

      <main className="w-full h-[100vh] grid-cols-2 py-5 px-3">

        <div className="flex items-center mb-7">
          <Link href={'/'} className="md:hidden">
            <a className="md:hidden"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>

            </a>

          </Link>
          <h1 className="w-full text-center py-5 text-xl"> Cart details </h1>
        </div>

        <div className="md:grid md:grid-cols-4">
          {cartItems.length === 0 ? 
            ( <span className="bg-red-200 p-5"> No items in your cart </span> ) : 
            (
              <table className=" md:col-span-3 md:mx-5 divide-y-[0.5px] w-full md:w-auto divide-[#dddddd]">
                  <tr className="bg-[#dddddd] h-0">
                    <th className="w-0 py-2"> Product </th>
                    <th className="w-0 py-2"> Price </th>
                    <th className="w-0 py-2"> Quantity </th>
                    <th className="w-0 py-2"> Total </th>
                  </tr>

                  {cartItems.map(item => (
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
                          <button className="mx-2 border-[1px] bg-[#f5f5f5] w-[20px]" onClick={ () => decrement(item.id) }> - </button>
                            {item.quantity === 0 ? 
                              ( <button onClick={ () => remove(item.id)} className="text-[#ff0000] border-[2px] border-[#ff0000] rounded-[5px] px-[5px]"> 
                                  remove
                                </button>) : 
                              ( <span> {item.quantity} </span> )
                            }
                          <button className="mx-2 border-[1px] bg-[#f5f5f5] w-[20px]" onClick={() => increment(item.id) }> + </button>

                        </div>
                      </td>

                      <td className="py-3 text-center"> €{item.price} </td>
                    </tr>
                  ))}

              </table>
            )}

          <aside className="md:col-span-1 md:border-2 md:border-[#e2e2e2] md:h-[300px] py-3 mt-8 md:mt-0 flex flex-col items-center relative">
            <div>
              <span> Subtotal:  </span>
              <span>  € subtotal </span>
            </div>

            <div>
              <span> Total:  </span>
              <span>  € total </span>
            </div>

            <button className="bg-blue-400 h-[40px] w-[90%] px-3 font-bold rounded-lg md:absolute md:bottom-[5%]"> Checkout </button>      
          </aside>
        </div>

      </main>

      <Footer/>
    </div>
  );
}

