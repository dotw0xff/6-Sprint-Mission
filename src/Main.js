import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsedMarket from "./pages/UsedMarketPage";
import AddItem from "./pages/AddItemPage";
import App from "./components/App";

function Main() {
  return (
    <BrowserRouter>
      <App />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<UsedMarket />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Main;
