import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { fetchProducts } from "../services/productService";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setCategories([...new Set(data.map((p) => p.category))]);
    });
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="product-list">
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
              <img src={product.image} alt={product.title} />
            </Link>
            <hr />
            <h3>${product.price}</h3>
            <p>{product.title}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
