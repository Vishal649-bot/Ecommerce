import { useParams } from 'react-router-dom';
import "../components/product/product.css"

const Product = () => {
    const productsArr = [
        {
            id: 1,
            title: "Colors",
            price: 100,
            imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
        {
            id: 2,
            title: "Black and white Colors",
            price: 50,
            imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
        {
            id: 3,
            title: "Yellow and Black Colors",
            price: 70,
            imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
        {
            id: 4,
            title: "Blue Color",
            price: 100,
            imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
    ];

    const params = useParams();
    const productId = parseInt(params.productId);
    const product = productsArr.find(product => product.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='cart'>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.title} />
        </div>
    );
};

export default Product;
