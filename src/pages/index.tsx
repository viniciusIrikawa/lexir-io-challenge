// import styles from "../styles/Home.module.css";
import Header from "@components/Header";
import GridProducts from "@components/GridProducts";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";
import Cart from "@components/Cart";
import { Toast } from 'flowbite-react'
import { Carousel } from 'flowbite-react'


export default function Home() {

  return (
    <div>
      <Header />
      <main className="container md:grid md:grid-cols-4 py-10 px-5 gap-6 pb-16 items-start mx-auto">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3">
          {/* <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div className="ml-3 text-sm font-normal">
              Item moved successfully.
            </div>
            <Toast.Toggle />
          </Toast> */}
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-5">
            <Carousel>
              <img src="https://img.freepik.com/fotos-gratis/copo-de-vinho-tinto-e-garrafa-no-balcao-de-bar_107420-65845.jpg?w=1380&t=st=1663181089~exp=1663181689~hmac=03d0fe3e77adabfa5f617ed93d2ba136eabf925436bb688d8739c4869489b529" alt="..."/>
              <img src="https://img.freepik.com/fotos-gratis/linha-de-garrafas-de-vinho-e-tacas-de-vinho_23-2148214968.jpg?w=1380&t=st=1663180790~exp=1663181390~hmac=70bb159cdf3579b489987a7705875089011d9e431291729e19880b5ede184def" alt="..." />
              <img src="https://img.freepik.com/fotos-gratis/barris-na-antiga-adega_1398-4735.jpg?w=1380&t=st=1663181055~exp=1663181655~hmac=856a73ee0f5ab234817b7d35003f2fdd57b0214857979e00923f5260add000b0" alt="..." />
            </Carousel>
          </div>
          <GridProducts />
        </div>
      </main>
      <Footer />
    </div>
  );
}

