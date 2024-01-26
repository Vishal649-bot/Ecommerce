
const ProductsList = ({products}) => {
    console.log('====================================');
    console.log(products);
    console.log('====================================');
  return (
    <div>
    <h2>Products</h2>
    <ul>
      {products.map((product) => (
        <li key={product.title}>
          <h3>{product.title}</h3>
          <img src={product.imageUrl} alt={product.title} />
          <p>Price: ${product.price}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ProductsList
