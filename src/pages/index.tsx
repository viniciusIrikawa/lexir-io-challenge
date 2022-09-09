// import styles from "../styles/Home.module.css";
import Header from "@components/Header";
import GridProducts from "@components/GridProducts";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";
import Cart from "@components/Cart";

export default function Home() {

  return (
    <div>
      <Header/>
      <main className="container md:grid md:grid-cols-4 py-10 px-5 gap-6 pb-16 items-start mx-auto">
        <div className="col-span-1">
          <Sidebar/>
        </div>
        <div className="col-span-3">
          <GridProducts/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

