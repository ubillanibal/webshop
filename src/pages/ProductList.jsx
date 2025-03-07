import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setCategories([...new Set(data.map((p) => p.category))]);
      });
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div>
      <h1>Products</h1>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h3>{product.title}</h3>
            </Link>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
