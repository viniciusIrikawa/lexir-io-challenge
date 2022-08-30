import {products} from '../pages/api/products'
import Image from 'next/image'

interface Products {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
}

const GridProducts = () => {
  return (
    <div>
      <h1> Product Grid </h1>
      <ul>
        {products.map((item:Products) => (
          <li key={item.id}> 
            <Image src={item.image} width={60} height={195} alt={item.name}></Image>
            <h3> {item.name} </h3>  
            <span> {item.price} </span> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GridProducts