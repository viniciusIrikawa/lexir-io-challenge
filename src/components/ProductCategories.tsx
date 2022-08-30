import React, { useState } from 'react'
import {products} from '../pages/api/products'

// interface Category {
//     categoryName: string[];
// }

// let productCategory: object;

// productCategory = {
//     categoryName: ['Gin', 'Vodka']
// }

// const categories:any = Object.values(productCategory)
// console.log(categories)


const fillCategory = (category:string) => {
    console.log(category)
}

const ProductCategories = () => {
  return (
    <div>
        <h1> Product Categories </h1>
        <div> 
            <button type="button" 
                    onClick={() => fillCategory('All')} 
                    className="bg-emerald-400 py-1 px-5 mx-2 rounded bg-gray-100"> All </button>
            <button type="button" 
                    onClick={() => fillCategory('Gin')} 
                    className="bg-emerald-400 py-1 px-5 mx-2 rounded bg-gray-100" > Gin </button>
            <button type="button" 
                    onClick={() => fillCategory('Vodka')} 
                    className="bg-emerald-400 py-1 px-5 mx-2 rounded bg-gray-100" > Vodka </button>
        </div>
    </div>
  )
}

export default ProductCategories