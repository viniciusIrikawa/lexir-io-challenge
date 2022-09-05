import React, {useState} from "react";
import {products} from '../pages/api/products'
import {Product} from '../types/typeProducts'

interface Children{
    children: React.ReactNode;
}

interface ProductsContextProps{
    listProducts: Product[],
    setListProducts: (newState: Product[]) => void;
}

const initialValue:ProductsContextProps = {
    listProducts: products,
    setListProducts: () => {}
};

export const ProductContext = React.createContext(initialValue);

export const ProductsProvider = ({ children }:Children) => {

    const [listProducts, setListProducts] = useState(products);

    return(
        <ProductContext.Provider value={{ listProducts, setListProducts }}>
            {children}
        </ProductContext.Provider>
    )
}