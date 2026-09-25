import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

// Toastify এর CSS ইমপোর্ট
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Navbar />
      <main>
        <Banner />
        <TechnologySection />
      </main>
      <Footer />

      {/* Toast Alert Container */}
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
