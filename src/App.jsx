import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
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
import MyAccount from "./pages/MyAccount";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./dashboard/Dashboard";
import Users from "./dashboard/pages/Users";
import Articles from "./dashboard/pages/Articles";
import HomeDash from "./dashboard/pages/Home";
import Writer from "./dashboard/pages/Writer";
import { useTranslation } from "react-i18next";

function App() {

  const location = useLocation();
  const isErrorPage = location.pathname === "/error";
  const signIn = location.pathname === "/signin";
  const dashboard=location.pathname.startsWith("/dashboard");
  const createAccount = location.pathname === "/create-account";
  const [isDarkMode, setIsDarkMode] = useState(false);
  const{i18n}=useTranslation();
  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);
   useEffect(() => {
    const currentLang = i18n.language || localStorage.getItem("i18nextLng") || "en";
    document.body.style.direction = currentLang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <div>
     {!dashboard && <Navbar toggleDarkMode={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/signin" element={<SignIn />} />

<Route path="/dashboard/*" element={<Dashboard />}>
  <Route index element={<HomeDash />} />

  <Route path="users" element={<Users />} />
  <Route path="articles" element={<Articles />} />
    <Route path="writers" element={<Users />} />
</Route>

  <Route
    path="/myaccount"
    element={
        <MyAccount />
    }
  />
      </Routes>

{!dashboard && !(isErrorPage || signIn || createAccount) ? <Footer /> : isErrorPage ? <FooterError /> : null}

    </div>
  );
}

export default App;
