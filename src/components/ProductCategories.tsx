import React from 'react'

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
  return (
    <div>
        <h1> Sidebar </h1>
        <div> 
            <button> Gin </button>
            <button> Vodka </button>
        </div>
    </div>
  )
}

export default ProductCategories