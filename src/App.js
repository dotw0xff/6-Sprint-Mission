import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import { PAGES } from "./constants/paths";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={PAGES.home.link} element={<MainPage />} />
      <Route path={PAGES.products.link} element={<ProductPage />} />
    </Routes>
  );
}

export default App;
