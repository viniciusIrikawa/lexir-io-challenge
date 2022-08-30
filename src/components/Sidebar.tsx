import React from 'react'
import ProductCategories from "@components/ProductCategories";
import BaldoriaVermouth from "@components/BaldoriaVermouth";

const Sidebar = () => {
  return (
    <div className='border-solid border-2 p-5'>
        <h1> Sidebar </h1>
        <BaldoriaVermouth/>
        <ProductCategories/>
    </div>
  )
}

export default Sidebar