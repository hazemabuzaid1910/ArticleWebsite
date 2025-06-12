import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import About from "./pages/About";
import ContactUS from "./pages/ContactUS";
import Jobs from "./pages/Jobs";
import ErrorPage from "./pages/ErrorPage";
import FooterError from "./components/FooterError";
import FAQs from "./pages/FAQs";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const location = useLocation();

  const isErrorPage = location.pathname === "/error";
    const signIn = location.pathname === "/signin";
    const createAccount = location.pathname === "/create-account";

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);
  return (
    <div>
      <Navbar toggleDarkMode={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

{!(isErrorPage || signIn || createAccount) ? <Footer /> : isErrorPage ? <FooterError /> : null}



    </div>
  );
}

export default App;
