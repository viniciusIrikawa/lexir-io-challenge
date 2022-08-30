// import styles from "../styles/Home.module.css";
import Header from "@components/Header";
import GridProducts from "@components/GridProducts";
import Sidebar from "@components/Sidebar";

export default function Home() {

  return (
    <div>
      <Header/>
      <h1 className="text-3xl font-bold underline"> Content </h1>
      <main className="container grid grid-cols-4 gap-6 pb-16 items-start mx-auto">
        <div className="col-span-1">
          <Sidebar/>
        </div>
        <div className="col-span-3">
          <GridProducts/>

        </div>
      </main>
    </div>
  );
}

