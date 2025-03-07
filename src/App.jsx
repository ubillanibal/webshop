import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import OrderConfirmation from "./pages/OrderConfirmation";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
