import React from 'react'
import ProductCategories from "@components/ProductCategories";
import BaldoriaVermouth from "@components/BaldoriaVermouth";

const Sidebar = () => {
  return (
    <div>
        <h1> Sidebar </h1>
        <BaldoriaVermouth/>
        <ProductCategories/>
    </div>
  )
}

export default Sidebar