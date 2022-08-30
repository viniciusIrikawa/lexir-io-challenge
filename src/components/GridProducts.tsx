import React from 'react'
import products from '../pages/api/products.json'


type dataProducts = {
  id: number,
  name: string,
  price: number,
  image: string
}

const GridProducts = () => {
  return (
    <div>GridProducts</div>
    // {products.map((product) =>)}
  )
}

export default GridProducts