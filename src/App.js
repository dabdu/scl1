import "./assets/css/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Home,
  About,
  Products,
  Gallery,
  Academy,
  Contact,
  FieldAgent,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/form" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/field-agent-register" element={<FieldAgent />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
