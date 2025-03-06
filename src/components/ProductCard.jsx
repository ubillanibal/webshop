const ProductCard = ({ product }) => (
  <>
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <button>Add to Cart</button>
  </>
);

export default ProductCard;
