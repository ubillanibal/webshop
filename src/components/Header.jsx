import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>TODO-App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/products">Products</Link>
      </nav>
    </header>
  );
};

export default Header;
