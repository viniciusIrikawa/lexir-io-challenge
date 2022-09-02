import React, {useState} from "react";
import {products} from '../pages/api/products'
import {Product} from '../types/typeProducts'

interface Children{
    children: React.ReactNode;
}

type ProductsContextProps = {
    listProducts: Product[];
    setListProducts: (newState: Product[]) => void;
}

const initialValue = {
    listProducts: products,
    setlistProducts: () => {}
};

export const ProductContext = React.createContext(products);

export const ProductsProvider = ({ children }:Children) => {

    const [listProducts, setListProducts] = useState<ProductsContextProps>(initialValue);

    return(
        <ProductContext.Provider value={{ listProducts, setListProducts }}>
            {children}
        </ProductContext.Provider>
    )
}