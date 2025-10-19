import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import BreadCrumbs from "./components/BreadCrumbs";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Nathan's Store </h1>
        <BreadCrumbs />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
