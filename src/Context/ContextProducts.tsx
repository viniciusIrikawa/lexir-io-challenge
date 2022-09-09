import React, {useState} from "react";
import {products} from '../pages/api/products'
import {Product} from '../types/typeProducts'

interface Children{
    children: React.ReactNode;
}

interface ProductsContextProps{
    listProducts: Product[];
    setListProducts: (newState: Product[]) => void;
    cartItems: Product[];
    setCartItems: (newItem: any) => void;
}

const initialValue:ProductsContextProps = {
    listProducts: products,
    setListProducts: () => {},
    cartItems: [],
    setCartItems: () => {}
};

export const ProductContext = React.createContext(initialValue);

export const ProductsProvider = ({ children }:Children) => {

    const [listProducts, setListProducts] = useState(products);
    const [cartItems, setCartItems] = useState([]);

    return(
        <ProductContext.Provider value={{ listProducts, setListProducts, cartItems, setCartItems }}>
            {children}
        </ProductContext.Provider>
    )
}