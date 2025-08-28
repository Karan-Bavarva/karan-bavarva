// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useLocation,
// } from "react-router-dom";

// // Pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";

// // Styles (CSS Module)
// import styles from "./styles/App.module.css";

// /** Inner app so we can use useLocation() while keeping BrowserRouter at the top */
// function AppShell() {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   const toggle = () => setOpen((v) => !v);
//   const close = () => setOpen(false);

//   // Close drawer whenever route changes
//   useEffect(() => {
//     setOpen(false);
//     // scroll to top on route change if needed
//     // window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location.pathname]);

//   // Close on Escape & lock body scroll when drawer is open
//   useEffect(() => {
//     function onKey(e) {
//       if (e.key === "Escape") setOpen(false);
//     }
//     if (open) {
//       document.body.style.overflow = "hidden";
//       window.addEventListener("keydown", onKey);
//     } else {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", onKey);
//     }
//     // cleanup
//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", onKey);
//     };
//   }, [open]);

//   return (
//     <>
//       {/* Header — desktop inline nav stays the same; mobile button shows via CSS */}
//       <header className={styles.navbar}>
//         <div className={styles.brandWrap}>
//           <Link to="/" className={styles.brand} onClick={close}>
//             Karan Bavarva
//           </Link>
//         </div>

//         {/* Desktop links (hidden on mobile via CSS) */}
//         <nav className={styles.navLinks} aria-label="Primary">
//           <Link to="/" onClick={close}>Home</Link>
//           <Link to="/about" onClick={close}>About</Link>
//           <Link to="/resume" onClick={close}>Resume</Link>
//           <Link to="/projects" onClick={close}>Projects</Link>
//           {/* If your route is /features instead, keep this too: */}
//           {/* <Link to="/features" onClick={close}>Projects</Link> */}
//           <Link to="/contact" onClick={close}>Contact</Link>
//         </nav>

//         {/* Mobile toggle (visible ≤768px via CSS .menuBtn) */}
//         <button
//           className={styles.menuBtn}
//           onClick={toggle}
//           aria-label={open ? "Close menu" : "Open menu"}
//           aria-expanded={open}
//           aria-controls="mobile-drawer"
//           type="button"
//         >
//           ☰
//         </button>
//       </header>

//       {/* Drawer & backdrop (mobile only via CSS; desktop unaffected) */}
//       <aside
//         id="mobile-drawer"
//         className={`${styles.drawer} ${open ? styles.open : ""}`}
//         role="dialog"
//         aria-modal="true"
//         aria-label="Site navigation"
//       >
//         <div className={styles.drawerHeader}>
//           <span className={styles.brand}>Menu</span>
//           <button
//             className={styles.closeBtn}
//             onClick={close}
//             aria-label="Close menu"
//             type="button"
//           >
//             ✕
//           </button>
//         </div>

//         <div className={styles.drawerLinks}>
//           <Link to="/" onClick={close}>Home</Link>
//           <Link to="/about" onClick={close}>About</Link>
//           <Link to="/resume" onClick={close}>Resume</Link>
//           <Link to="/projects" onClick={close}>Projects</Link>
//           {/* If you also have /features pointing to Projects: */}
//           {/* <Link to="/features" onClick={close}>Projects</Link> */}
//           <Link to="/contact" onClick={close}>Contact</Link>
//         </div>
//       </aside>
//       <div
//         className={`${styles.backdrop} ${open ? styles.open : ""}`}
//         onClick={close}
//         aria-hidden="true"
//       />

//       {/* Main content */}
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/projects" element={<Projects />} />
//           {/* Support both routes if you use /features */}
//           {/* <Route path="/features" element={<Projects />} /> */}
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>

//       {/* Footer */}
//       <footer className={styles.footer}>
//         © {new Date().getFullYear()} Karan Bavarva. All rights reserved.
//       </footer>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppShell />
//     </Router>
//   );
// }









// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useLocation,
// } from "react-router-dom";

// // Pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";

// // Styles (CSS Module)
// import styles from "./styles/App.module.css";

// /** Inner app so we can use useLocation() while keeping BrowserRouter at the top */
// function AppShell() {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   const toggle = () => setOpen((v) => !v);
//   const close = () => setOpen(false);

//   // Close drawer whenever route changes
//   useEffect(() => {
//     setOpen(false);
//   }, [location.pathname]);

//   // Close on Escape & lock body scroll when drawer is open
//   useEffect(() => {
//     function onKey(e) {
//       if (e.key === "Escape") setOpen(false);
//     }
//     if (open) {
//       document.body.style.overflow = "hidden";
//       window.addEventListener("keydown", onKey);
//     } else {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", onKey);
//     }
//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", onKey);
//     };
//   }, [open]);

//   return (
//     <div className={styles.appWrapper}>
//       {/* Header */}
//       <header className={styles.navbar}>
//         <div className={styles.brandWrap}>
//           <Link to="/" className={styles.brand} onClick={close}>
//             Karan Bavarva
//           </Link>
//         </div>

//         <nav className={styles.navLinks} aria-label="Primary">
//           <Link to="/" onClick={close}>Home</Link>
//           <Link to="/about" onClick={close}>About</Link>
//           <Link to="/resume" onClick={close}>Resume</Link>
//           <Link to="/projects" onClick={close}>Projects</Link>
//           <Link to="/contact" onClick={close}>Contact</Link>
//         </nav>

//         <button
//           className={styles.menuBtn}
//           onClick={toggle}
//           aria-label={open ? "Close menu" : "Open menu"}
//           aria-expanded={open}
//           aria-controls="mobile-drawer"
//           type="button"
//         >
//           ☰
//         </button>
//       </header>

//       {/* Drawer & backdrop */}
//       <aside
//         id="mobile-drawer"
//         className={`${styles.drawer} ${open ? styles.open : ""}`}
//         role="dialog"
//         aria-modal="true"
//         aria-label="Site navigation"
//       >
//         <div className={styles.drawerHeader}>
//           <span className={styles.brand}>Menu</span>
//           <button
//             className={styles.closeBtn}
//             onClick={close}
//             aria-label="Close menu"
//             type="button"
//           >
//             ✕
//           </button>
//         </div>

//         <div className={styles.drawerLinks}>
//           <Link to="/" onClick={close}>Home</Link>
//           <Link to="/about" onClick={close}>About</Link>
//           <Link to="/resume" onClick={close}>Resume</Link>
//           <Link to="/projects" onClick={close}>Projects</Link>
//           <Link to="/contact" onClick={close}>Contact</Link>
//         </div>
//       </aside>
//       <div
//         className={`${styles.backdrop} ${open ? styles.open : ""}`}
//         onClick={close}
//         aria-hidden="true"
//       />

//       {/* Main content */}
//       <main className={styles.main}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>

//       {/* Footer */}
//       <footer className={styles.footer}>
//         © {new Date().getFullYear()} Karan Bavarva. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppShell />
//     </Router>
//   );
// }


















import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import styles from "./styles/App.module.css";

function AppShell() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") setOpen(false); };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const active = (path) =>
    `${styles.drawerLink} ${location.pathname === path ? styles.drawerLinkActive : ""}`;

  return (
    <div className={styles.appWrapper}>
      <header className={styles.navbar}>
        <div className={styles.brandWrap}>
          <Link to="/" className={styles.brand} onClick={close}>
            Karan Bavarva
          </Link>
        </div>

        <nav className={styles.navLinks} aria-label="Primary">
          <Link to="/" onClick={close}>Home</Link>
          <Link to="/about" onClick={close}>About</Link>
          <Link to="/resume" onClick={close}>Resume</Link>
          <Link to="/projects" onClick={close}>Projects</Link>
          <Link to="/contact" onClick={close}>Contact</Link>
        </nav>

        <button
          className={styles.menuBtn}
          onClick={toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          type="button"
        >
          ☰
        </button>
      </header>

      <aside
        id="mobile-drawer"
        className={`${styles.drawer} ${open ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className={styles.drawerHeader}>
          <span className={styles.brand}>Menu</span>
          <button className={styles.closeBtn} onClick={close} aria-label="Close menu" type="button">
            ✕
          </button>
        </div>

        <div className={styles.drawerLinks}>
          <Link to="/" onClick={close} className={active("/")}>Home</Link>
          <Link to="/about" onClick={close} className={active("/about")}>About</Link>
          <Link to="/resume" onClick={close} className={active("/resume")}>Resume</Link>
          <Link to="/projects" onClick={close} className={active("/projects")}>Projects</Link>
          <Link to="/contact" onClick={close} className={active("/contact")}>Contact</Link>
        </div>
      </aside>

      <div
        className={`${styles.backdrop} ${open ? styles.open : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Karan Bavarva. All rights reserved.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

