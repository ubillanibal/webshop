import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to my Webshop</h1>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default Home;
