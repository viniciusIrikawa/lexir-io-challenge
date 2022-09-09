import React, { useContext } from 'react'
import { ProductContext } from 'src/Context/ContextProducts'

const Cart = () => {

    const {cartItems} = useContext(ProductContext);

    
    return (
        <div></div>
    )
}

export default Cart