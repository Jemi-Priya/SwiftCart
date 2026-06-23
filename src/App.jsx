import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import ProductCheckout from "./pages/ProductCheckout";
import { LoginPage } from "./pages/LoginPage";
import { SignUp } from "./pages/SignUp";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<ProductCheckout />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
