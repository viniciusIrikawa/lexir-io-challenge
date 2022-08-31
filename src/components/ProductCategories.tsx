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

const ProductCategories = () => {

  // const [listProducts, setListProducts] = useState(products);
  
  const filterCategory = (category:string) => {
    console.log(category)
  }


  return (
    <div className='my-10'>
        <h1 className='mb-2'> Product Categories </h1>
        <div> 
            <button type="button" 
                    onClick={() => filterCategory('All')} 
                    className="bg-emerald-400 py-1 px-5 mx-2 rounded bg-gray-100"> All </button>
            <button type="button" 
                    onClick={() => filterCategory('Gin')} 
                    className="bg-emerald-400 py-1 px-5 mx-2 rounded bg-gray-100" > Gin </button>
            <button type="button" 
                    onClick={() => filterCategory('Vodka')} 
                    className="bg-emerald-400 py-1 px-5 mx-2 rounded bg-gray-100" > Vodka </button>
        </div>
    </div>
  )
}

export default ProductCategories