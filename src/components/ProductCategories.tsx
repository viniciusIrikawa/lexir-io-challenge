import React, { useContext, useState } from 'react'
import {products} from '../pages/api/products'
import {ProductContext} from '../Context/ContextProducts'

// interface Category {
//     categoryName: string[];
// }

// let productCategory: object;

// productCategory = {
//     categoryName: ['Gin', 'Vodka']
// }

// const categories:any = Object.values(productCategory)
// console.log(categories)

const ProductCategories = () => {
  const {listProducts} = useContext(ProductContext);
  console.log(listProducts)

  const filterCategory = (category:string) => {
    console.log(category)
  }


  return (
    <div className='my-10'>
      <div className='categoryWrapper flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-7 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
        </svg>
        <h4 className='mb-2 text-lg'> Product Categories </h4>
      </div>

      <div> 
        <button type="button" 
                onClick={() => filterCategory('All')} 
                className="bg-emerald-400 py-1 px-5 m-1 rounded bg-gray-100"> All </button>
        <button type="button" 
                onClick={() => filterCategory('Gin')} 
                className="bg-emerald-400 py-1 px-5 m-1 rounded bg-gray-100" > Gin </button>
        <button type="button" 
                onClick={() => filterCategory('Vodka')} 
                className="bg-emerald-400 py-1 px-5 m-1 rounded bg-gray-100" > Vodka </button>
      </div>
    </div>
  )
}

export default ProductCategories