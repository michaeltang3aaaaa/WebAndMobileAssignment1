import { useState } from "react";
import { BrowserRouter, Routes, Link, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Travel_Packages from "./components/Travel_Packages";
import About from "./components/About";
import Contact from "./components/Contact";
import HighlightPackages from "./components/HighlightPackages";
import ThemeToggle from "./components/Theme_Toggle";

function App() {
  // State to track whether the header is open or collapsed
  const [isOpen, setIsOpen] = useState(true);

  const toggleHeader = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      {/* Sticky Header with Collapse/Expand behavior */}
      <div id="AppHeader" className={isOpen ? "header-open" : "header-closed"}>
        <div className="header-content">
          <h1>Explore Malaysia</h1>
          <h3>Discover Malaysia, Create Memories.</h3>
          <nav className="nav-menu">
            <Link to="/Home" className="nav-menu-item">
              Home
            </Link>
            <Link to="/Package" className="nav-menu-item">
              Packages
            </Link>
            <Link to="/AboutUs" className="nav-menu-item">
              About Us
            </Link>
            <Link to="/Contact" className="nav-menu-item">
              Contact
            </Link>
          </nav>
          <ThemeToggle />
        </div>

        {/* Toggle Button / Arrow Handle */}
        <button
          onClick={toggleHeader}
          className="header-toggle-btn"
          aria-label={isOpen ? "Collapse header" : "Expand header"}
        >
          <span className={`arrow-icon ${isOpen ? "up" : "down"}`}></span>
        </button>
      </div>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Package" element={<Travel_Packages />} />
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/highlights/:category" element={<HighlightPackages />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <footer className="footer">© Explore Malaysia 2026</footer>
    </BrowserRouter>
  );
}

export default App;
