import React, {useContext, useState} from 'react'
import { products } from 'src/pages/api/products'
import {ProductContext} from '../Context/ContextProducts'

const CategoryButtons = () => {

    const {setListProducts} = useContext(ProductContext);
    const [active, setActive] = useState<string>('All')
    
    const buttons = [...new Set(products.map((item) => item.category))]; 
    // spread operator will display all the values from our category section of our data while Set will only allow the single value of each kind to be displayed

    const filterCategory = (currentCategory: string) => {
        const newItem = products.filter((newVal) => {
          return newVal.category === currentCategory;
        })

        return newItem
    }

    return (
        <div>
            <button type="button"
                 onClick={() => {setListProducts(products), setActive('All')}} 
                 className={`py-1 px-5 m-1 rounded ${active === 'All' ? 'bg-[#d7d7d7]' : 'bg-gray-100'}`}> All ({products.length})
            </button>

            {buttons.map((category, index) => (   
                <button type="button"
                        key={index} 
                        onClick={() => { setListProducts(filterCategory(category)), setActive(category) }} 
                        className={ `py-1 px-2 m-1 rounded ${active === category ? 'bg-[#d7d7d7]' : 'bg-gray-100' }`}> {category} ({ filterCategory(category).length }) 
   
                </button>
            ))} 
      </div>
    )
}

export default CategoryButtons