import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../MyContext';
import axios from 'axios';
import AuthContext from '../../MyContext2';
const ProductsList = ({ products }) => {
    const {
        cartItems,
        updateCartItems
    } = useContext(MyContext);
    const authCtx = useContext(AuthContext)
    let email = localStorage.getItem('email');
    email = email.replace(/[@.]/g, '');

    const handleAddToCart = async(product) => {
        updateCartItems([...cartItems, product]);

        let obj = {
            product: product,
            email: email
        }
        // console.log(authCtx.emailid);
        const response = await axios.post(`https://crudcrud.com/api/03d678802bf84a378b1b4ea97b9d0f23/cart${obj.email}`, obj);
        console.log(response);
        console.log(obj.email);
    };

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.title}>
                        <h3>{product.title}</h3>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.imageUrl} alt={product.title} />
                        </Link>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;
