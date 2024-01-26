import  { useContext} from 'react';

import { MyContext } from "../../MyContext";

const ProductsList = ({products}) => {
    const {
        cartItems,
        updateCartItems
     } = useContext(MyContext);

     const handleAddToCart =(product)=>{
        updateCartItems([...cartItems,product])
     }
  return (
    <div>
    <h2>Products</h2>
    <ul>
      {products.map((product) => (
        <li key={product.title}>
          <h3>{product.title}</h3>
          <img src={product.imageUrl} alt={product.title} />
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ProductsList
