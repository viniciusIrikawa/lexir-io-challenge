import React from 'react'
import ProductCategories from "@components/ProductCategories";
import BaldoriaVermouth from "@components/BaldoriaVermouth";

const Sidebar = () => {
  return (
    <div className='border-solid border-2 p-5'>
        <BaldoriaVermouth/>
        <ProductCategories/>
    </div>
  )
}

export default Sidebar