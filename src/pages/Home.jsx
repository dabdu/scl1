import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import IconsSection from "../components/IconsSection";
import MissionVision from "../components/MissionVision";
import Navbar from "../components/Navbar";
import Support from "../components/Support";
import ValuesSection from "../components/ValuesSection";
import VideoSection from "../components/VideoSection";
import FieldAgentForm from "../components/FieldAgentForm";
import { RegButton } from "../components/RegButton";

const Home = () => {
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
        <div style={{ transition: "500ms" }}>
          {/* <Header /> */}
          <Navbar />
          <Hero />
          <RegButton />
          <About />
          <IconsSection />
          <ValuesSection />
          <Support />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
