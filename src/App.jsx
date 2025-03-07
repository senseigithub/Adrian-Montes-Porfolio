import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";

const TRACKING_ID = "G-CRW6VW37VG"; // Reemplaza con tu ID de Google Analytics

// Componente para registrar eventos de cambio de ruta en Google Analytics
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Cargar el script de Google Analytics solo si aún no está en el DOM
    if (!window.gtag) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", TRACKING_ID);
    }

    // Registrar evento de vista de página en Google Analytics
    window.gtag("event", "page_view", { page_path: location.pathname });

  }, [location]); // Se ejecuta cada vez que cambia la ruta

  return null;
};

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Analytics /> {/* Se encarga de registrar los eventos */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </AnimatePresence>
  );
}

export default App;
