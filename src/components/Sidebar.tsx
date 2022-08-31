import React from 'react'
import ProductCategories from "@components/ProductCategories";
import BaldoriaVermouth from "@components/BaldoriaVermouth";
import Location from "@components/Location";

const Sidebar = () => {
  return (
    <div className='border-solid border-2 p-5'>
        <BaldoriaVermouth/>
        <Location/>
        <ProductCategories/>
    </div>
  )
}

export default Sidebar