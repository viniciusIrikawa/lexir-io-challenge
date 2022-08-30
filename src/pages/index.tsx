import styles from "../styles/Home.module.css";
import Header from "@components/Header";
import GridProducts from "@components/GridProducts";
import Sidebar from "@components/Sidebar";

export default function Home() {

  return (
    <div>
      <Header/>
      <h1 className="text-3xl font-bold underline"> Content </h1>
      <GridProducts/>
      <Sidebar/>
    </div>
  );
}

