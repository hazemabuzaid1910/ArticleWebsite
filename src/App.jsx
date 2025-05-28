import { BrowserRouter as Router, Route, Routes,useLocation  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import About from "./pages/About";
import ContactUS from "./pages/ContactUS";
import Jobs from "./pages/Jobs";
import ErrorPage from "./pages/ErrorPage";
import FooterError from "./components/FooterError";
function App() {
    const location = useLocation();

  const isErrorPage = location.pathname === "/error";
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
        {isErrorPage ? <FooterError /> : <Footer />}
    </div>
  );
}

export default App;
