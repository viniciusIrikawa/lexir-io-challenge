import React from 'react'
import {products} from '../pages/api/products.js'

const GridProducts = () => {
  return (
    <div>
      <h1> Product Grid </h1>
      <ul>
        {products.map( item => (
          <li key={item.id}> 
            <img src={item.image} width="150px" height="150px" alt={item.name}/>
            <h3> {item.name} </h3>  
            <span> {item.price} </span> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GridProducts