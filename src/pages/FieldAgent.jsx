import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../components/FieldAgent/Home";

const FieldAgent = () => {
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

export default FieldAgent;
