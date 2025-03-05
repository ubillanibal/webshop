import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      console.log("Fetching products...");
      const data = await fetchProducts();
      if (data) setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <>
      <h1>Welcome to my Webshop</h1>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
      <Link to="/cart">Go to Cart</Link>
    </>
  );
}

export default Home;
