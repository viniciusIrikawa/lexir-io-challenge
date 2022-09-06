import React, {useContext} from 'react'
import { products } from 'src/pages/api/products'
import {ProductContext} from '../Context/ContextProducts'

const CategoryButtons = () => {

    const {setListProducts} = useContext(ProductContext);
    
    const buttons = [...new Set(products.map((item) => item.category))]; 
    // spread operator will display all the values from our category section of our data while Set will only allow the single value of each kind to be displayed

    const filterCategory = (currentCategory:string) => {
        const newItem = products.filter((newVal) => {
          return newVal.category === currentCategory;
        })

        setListProducts(newItem)
      }   

    return (
        <div>
            <button type="button"
                 onClick={() => setListProducts(products)} 
                 className="bg-emerald-400 py-1 px-5 m-1 rounded bg-gray-100"> All 
            </button>

            {buttons.map((category, index) => (   
                <button type="button"
                        key={index} 
                        onClick={() => filterCategory(category)} 
                        className="bg-emerald-400 py-1 px-5 m-1 rounded bg-gray-100" > {category} 
                </button>
            ))} 
      </div>
    )
}

export default CategoryButtons