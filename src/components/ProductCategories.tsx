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
            <button type="button" onClick={() => fillCategory('All')}> All </button>
            <button type="button" onClick={() => fillCategory('Gin')}> Gin </button>
            <button type="button" onClick={() => fillCategory('Vodka')}> Vodka </button>
        </div>
    </div>
  )
}

export default ProductCategories