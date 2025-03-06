import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <>
      <h1>Welcome to my Webshop</h1>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Link to="/cart">Go to Cart</Link>
    </>
  );
};

export default Home;
