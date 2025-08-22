// // App.jsx (Plain CSS version)
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import './styles/App.module.css';

// export default function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <nav className="navbar">
//           <Link to="/" className="brand">MyPortfolio</Link>
//           <div className="nav-links">
//             <Link to="/about">About</Link>
//             <Link to="/projects">Projects</Link>
//             <Link to="/contact">Contact</Link>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>

//         <footer className="footer">
//           © 2025 Your Name. All rights reserved.
//         </footer>
//       </div>
//     </Router>
//   );
// }




import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import styles from "./styles/App.module.css";

export default function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.brand}>Karan Bavarva</Link>
          <div className={styles.navLinks}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/features">Features</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>

        <footer className={styles.footer}>
          © 2025 Karan Bavarva. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
