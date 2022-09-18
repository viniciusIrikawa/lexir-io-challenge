// import styles from "../styles/Home.module.css";
import Header from "@components/Header";
import GridProducts from "@components/GridProducts";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";
import { Carousel } from 'flowbite-react'


export default function Home() {

  return (
    <div>
      <Header />
      <main className="container md:grid md:grid-cols-4 py-10 px-5 gap-6 pb-16 items-start mx-auto">
        <div className="col-span-1"> <Sidebar/> </div>

        <div className="col-span-3">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-5 md:px-5">
            <Carousel>
              <img src="https://img.freepik.com/fotos-gratis/copo-de-vinho-tinto-e-garrafa-no-balcao-de-bar_107420-65845.jpg?w=1380&t=st=1663181089~exp=1663181689~hmac=03d0fe3e77adabfa5f617ed93d2ba136eabf925436bb688d8739c4869489b529" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              <img src="https://img.freepik.com/fotos-gratis/linha-de-garrafas-de-vinho-e-tacas-de-vinho_23-2148214968.jpg?w=1380&t=st=1663180790~exp=1663181390~hmac=70bb159cdf3579b489987a7705875089011d9e431291729e19880b5ede184def" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              <img src="https://img.freepik.com/fotos-gratis/barris-na-antiga-adega_1398-4735.jpg?w=1380&t=st=1663181055~exp=1663181655~hmac=856a73ee0f5ab234817b7d35003f2fdd57b0214857979e00923f5260add000b0" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."  />
            </Carousel>
          </div>

          <GridProducts />

        </div>
      </main>
      <Footer />
    </div>
  );
}

