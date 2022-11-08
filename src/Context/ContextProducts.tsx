import React, {useState} from "react";
import {products} from '../pages/api/products'
import {Product} from '../types/typeProducts'

interface Children{
    children: React.ReactNode;
}

type ToastMessage = {
  productName: string,
  active: boolean
}

interface ProductsContextProps{
    listProducts: Product[];
    setListProducts: (newState: Product[]) => void;
    cartItems: Product[];
    setCartItems: (newItem: Product[]) => void;
    isActive: ToastMessage,
    setIsActive: (newToast: ToastMessage) => void;
    chip: string,
    setChip: (newChip: string) => void;
    discount: number, 
    setDiscount: (newDiscount: number) => void;
}

const initialValue:ProductsContextProps = {
    listProducts: products,
    setListProducts: () => {},
    cartItems: [],
    setCartItems: () => {},
    isActive: {productName: '', active: false}, 
    setIsActive: () => {},
    chip: "",
    setChip: () => {},
    discount: 0, 
    setDiscount: () => {}
};

export const ProductContext = React.createContext(initialValue);

export const ProductsProvider = ({ children }:Children) => {

    const [listProducts, setListProducts] = useState(products);
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [isActive, setIsActive] = useState<ToastMessage>({productName: '', active: false});
    const [chip, setChip] = useState("");
    const [discount, setDiscount] = useState(0);

    return(
        <ProductContext.Provider value={{ listProducts, setListProducts, cartItems, setCartItems, isActive, setIsActive, chip, setChip, discount, setDiscount }}>
            {children}
        </ProductContext.Provider>
    )
}