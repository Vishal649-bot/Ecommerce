import Cart from "../components/Store/Cart";
import ProductsList from "../components/Store/ProductsList";
import Product from "./Product";

const Store = () => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div>
      <ProductsList products={productsArr} />
      <Cart />
      <Product obj={productsArr} />
    </div>
  );
};

export default Store;
