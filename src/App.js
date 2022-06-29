import "./App.css";
import MyNavbar from "./Components/nanbar/navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/about/about.jsx";
import Contact from "./Components/contact/contact.jsx";
import View from "./Components/view.jsx";
import NotFound from "./Components/notfound/NotFound.jsx";
import Prodocts from './Components/Producsts/prodocts';
import ProductDetails from './Components/productDetails/ProductDetails';

function App() {
  return (
    <>
      <MyNavbar />
      <div className="container">
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/project" element={<Project />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/prodocts" element={<Prodocts />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/counter" element={<View />} />
          <Route path="*" element={< NotFound/>} />
          </Routes>
      </div>
    </>
  );
}

export default App;
