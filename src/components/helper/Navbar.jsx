import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import {
  FaAddressBook,
  FaBriefcase,
  FaFileAlt,
  FaHome,
  FaLayerGroup,
  FaMoon,
  FaProjectDiagram,
  FaSun,
  FaTools,
} from "react-icons/fa";
const navItems = [
  { path: "/", label: "Home", shortLabel: "Home" },
  { path: "/features", label: "Features", shortLabel: "Feat" },
  { path: "/skills", label: "Skills", shortLabel: "Skills" },
  { path: "/experience", label: "Education & Experience", shortLabel: "Edu" },
  { path: "/projects", label: "Projects", shortLabel: "Proj" },
  { path: "/cv", label: "Resume", shortLabel: "Resume" },
  { path: "/contact", label: "Contact", shortLabel: "Contact" },
];

const navIconByPath = {
  "/": FaHome,
  "/features": FaLayerGroup,
  "/skills": FaTools,
  "/experience": FaBriefcase,
  "/projects": FaProjectDiagram,
  "/cv": FaFileAlt,
  "/contact": FaAddressBook,
};

const mobileQuickNavItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Work" },
  { path: "/experience", label: "About" },
  { path: "/contact", label: "Contact" },
];
 
const Navbar = ({ theme = "dark", onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const linkClass = ({ isActive }) =>
    `text-sm uppercase cursor-pointer transition-colors ${
      isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
    }`;

  return (
    <nav className="app-text-primary md:bg-[var(--surface)] md:p-4 md:fixed md:w-full md:top-0 md:z-10 md:shadow-lg md:border-b md:border-[var(--border)] transition-colors duration-300">
      <div className="hidden md:flex container lg:px-12 mx-auto justify-between items-center">
        <div
          className="cursor-pointer flex items-center gap-3"
           onClick={() => navigate("/")}
        >
          {/* Logo wrapper */}
          <div className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center">
            <img
              src="/images/right_image.png"
              alt="user image"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>

          {/* Brand text */}
          <span className="text-[var(--text-secondary)] font-medium tracking-wide">
            PORTFOLIO
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={linkClass}
                end={item.path === "/"}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="h-10 w-10 rounded-full app-card-soft flex items-center justify-center app-text-secondary hover:text-[var(--accent)] transition-colors"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <Link
            to="/cv"
            className="bg-[var(--surface)] border border-[var(--border)] hover:text-[var(--accent)] hidden md:block p-4 rounded-lg transition-transform duration-300 transform hover:translate-y-[-3px] px-8 py-2 text-[var(--accent)] text-sm"
          >
            Resume
          </Link>
        </div>

      </div>

      {/* Mobile Bottom Sheet Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-500 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        <div
          className={`absolute inset-x-0 bottom-0 bg-[var(--surface)] border-t border-[var(--border)] rounded-t-[2rem] px-5 pt-5 pb-6 transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="mx-auto mb-5 h-1.5 w-14 rounded-full bg-[var(--text-secondary)]/50" />
          <div className="mb-3 flex justify-end">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="h-9 w-9 rounded-full app-card-soft flex items-center justify-center app-text-secondary hover:text-[var(--accent)] transition-colors"
            >
              {theme === "dark" ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
            </button>
          </div>

          <ul className="space-y-2.5 max-h-[58vh] overflow-y-auto pr-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-3.5 py-2.5 font-semibold uppercase text-[13px] tracking-wide transition-colors ${
                      isActive
                        ? "bg-[var(--hover)] text-[var(--accent)]"
                        : "bg-[var(--surface-soft)] text-[var(--text-primary)]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-sm ${
                          isActive
                            ? "bg-[var(--surface)] text-[var(--accent)]"
                            : "bg-[var(--surface)] text-[var(--text-secondary)]"
                        }`}
                      >
                        →
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={closeMenu}
            className="mt-3 w-full rounded-xl app-card-soft py-2.5 text-base font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
          >
            Close Menu
          </button>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 w-full bg-[var(--surface)] rounded-t-[1.25rem] px-3 py-3.5 shadow-[0_-8px_22px_rgba(0,0,0,0.2)] border-t border-[var(--border)] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <ul className="flex items-center justify-between gap-1 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
          {mobileQuickNavItems.slice(0, 2).map((item) => {
              const Icon = navIconByPath[item.path] || FaLayerGroup;
              return (
                <li key={item.path} className="flex justify-center min-w-[64px]">
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `flex flex-col items-center gap-1 px-1.5 py-1 rounded-xl transition-all duration-200 active:scale-95 ${
                        isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon className={`text-[18px] ${isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)] "}`} />
                        <span className={`text-[11px] font-medium tracking-wide ${isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"}`}>
                          {item.label}
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}

          <li className="flex justify-center">
            <button
              onClick={toggleMenu}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--accent-strong)] border border-[var(--border)] shadow-[0_6px_16px_rgba(0,0,0,0.16)] transition-all duration-200 active:scale-95"
            >
              <span className="grid grid-cols-2 gap-1">
                <span className="h-1.5 w-1.5 rounded-full border-2 border-current" />
                <span className="h-1.5 w-1.5 rounded-full border-2 border-current" />
                <span className="h-1.5 w-1.5 rounded-full border-2 border-current" />
                <span className="h-1.5 w-1.5 rounded-full border-2 border-current" />
              </span>
            </button>
          </li>

          {mobileQuickNavItems.slice(2).map((item) => {
              const Icon = navIconByPath[item.path] || FaLayerGroup;
              return (
                <li key={item.path} className="flex justify-center min-w-[64px]">
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `flex flex-col items-center gap-1 px-1.5 py-1 rounded-xl transition-all duration-200 active:scale-95 ${
                        isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon className={`text-[18px] ${isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"}`} />
                        <span className={`text-[11px] font-medium tracking-wide ${isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"}`}>
                          {item.label}
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-[#212428] text-white p-4 fixed w-full top-0 z-10 shadow-lg">
//       <div className="container lg:px-12 mx-auto flex justify-between items-center">
//         <div className="text-xl font-bold">
//           <Link to="/">INBIO</Link>
//         </div>
//         <ul className="hidden md:flex space-x-6">
//           <li><Link to="/" className="hover:text-yellow-500 text-[#C5D0DE] relative after:block after:h-[1px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Home</Link></li>
//           <li><Link to="/features" className="hover:text-yellow-500 text-[#C5D0DE] relative after:block after:h-[1px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Features</Link></li>
//           <li><Link to="/portfolio" className="hover:text-yellow-500 text-[#C5D0DE] relative after:block after:h-[1px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Portfolio</Link></li>
//           <li><Link to="/resume" className="hover:text-yellow-500 text-[#C5D0DE] relative after:block after:h-[1px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Resume</Link></li>
//         </ul>
//         <button className="bg-[#212428] border border-gray-800 hover:text-yellow-500 text-[#C5D0DE] shadow-[0_2px_1px_0px_rgba(255,255,255,0.1)] p-4 rounded-lg transition-transform duration-300 transform hover:translate-y-[-3px] px-8 py-2 text-yellow-500 text-sm">
//           Buy Now
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
