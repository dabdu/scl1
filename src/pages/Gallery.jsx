import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Home from "../components/Gallery/Home";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Gallery = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Navbar />
          <Home />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Gallery;
