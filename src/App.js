import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/dataContext";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from './components/Footer/Footer';
import Mens_banner from "./components/Assets/banner_mens.png"
import Womenens_banner from "./components/Assets/banner_women.png"
import kids_banner from "./components/Assets/banner_kids.png"
function App() {
  return (
    <DataProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner= {Mens_banner} category ="men"/>} />
        <Route path="/women" element={<ShopCategory banner = {Womenens_banner} category ="women" />} />
        <Route path="/kids" element={<ShopCategory banner = {kids_banner} category ="kid" />} />
        <Route path="/product" element ={<Product />}>
             <Route path=":product_ID" element = {<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
