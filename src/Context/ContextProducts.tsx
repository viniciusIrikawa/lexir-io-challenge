import React, {useState} from "react";
import {products} from '../pages/api/products'
import {Products} from '../types/typeProducts'

interface Children{
    children: React.ReactNode;
}

export const ProductContext = React.createContext({} as Products);

export function ProductsProvider({ children }:Children){
    const [listProducts, setListProducts] = useState(products);
    console.log(listProducts)

    return(
        <ProductContext.Provider value={{ listProducts, setListProducts }}>
            {children}
        </ProductContext.Provider>
    )
}