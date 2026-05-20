// src/App.jsx
import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Signup from "./components/Signup";
import Courses from './components/Courses'
import BudgetTools from './components/BudgetTools'

function HomePage() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to Moola Master!
        </h1>

        <p className="hero-subtitle">
          Learn budgeting, saving, investing, and financial literacy through
          interactive tools and guided learning experiences.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "Moola Master";
  }, []);

  return (
    <div className="layout">
      {/* HEADER */}
      <header className="header">
        <div className="left-container">
          <img
            src="/images/moola_logo.png"
            alt="Moola Master Logo"
            className="logo"
          />

          <Link to="/" className="brand">
            Moola Master
          </Link>
        </div>

        <div className="right-container">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/courses" className="nav-link">
            Courses
          </Link>

          <Link to="/budget-tools" className="nav-link">
            Budget Tools
          </Link>

          <Link to="/investing" className="nav-link">
            Investing
          </Link>

          <Link to="/signup" className="login-btn">
            Login / Sign Up
          </Link>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Placeholder Routes */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/budget-tools" element={<BudgetTools />} />
          <Route path="/investing" element={<div />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        Established in 2026 to help people master their moola!
      </footer>
    </div>
  );
}
