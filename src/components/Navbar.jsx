import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const hiddenRoutes = [
    "/portal/",
    "/portal",
    "/portal/dash",
    "/portal/profile",
    "/portal/pay",
    "/portal/payhistory",
    "/portal/course",
    "/portal/notice",
    "/portal/help",
    "/portal/chat",
    "/congrat",
    "/about",
  ];

  const isHidden = hiddenRoutes.includes(location.pathname);

  // ✅ Sync with system theme
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");
    const handleChange = (e) => setTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (isHidden) return null;

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-20 shadow-md transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-cyan-800 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-cyan-300 transition"
        >
          UNIVERSITY
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-[15px] font-medium">
          <li>
            <Link
              to="/"
              className={`hover:text-cyan-300 transition ${
                location.pathname === "/" ? "underline underline-offset-4" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portal/dash"
              className={`hover:text-cyan-300 transition ${
                location.pathname.includes("/portal/dash")
                  ? "underline underline-offset-4"
                  : ""
              }`}
            >
              Dashboard
            </Link>
          </li>

          {/* Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="hover:text-cyan-300 transition">Portal ▾</button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute left-0 mt-2 w-40 rounded-md shadow-lg py-2 ${
                    theme === "dark" ? "bg-gray-800" : "bg-white text-gray-800"
                  }`}
                >
                  <li>
                    <Link
                      to="/student/signup"
                      className="block px-4 py-2 hover:bg-cyan-100 dark:hover:bg-gray-700 font-semibold"
                      onClick={closeDropdown}
                    >
                      Student
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-cyan-100 dark:hover:bg-gray-700 font-semibold"
                      onClick={closeDropdown}
                    >
                      Admin
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link
              to="/about"
              className={`hover:text-cyan-300 transition ${
                location.pathname === "/about"
                  ? "underline underline-offset-4"
                  : ""
              }`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`md:hidden px-5 pb-6 space-y-3 ${
              theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-cyan-800"
            }`}
          >
            <Link
              to="/"
              className="block hover:text-cyan-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/portal/dash"
              className="block hover:text-cyan-300"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <button
              className="block w-full text-left hover:text-cyan-300"
              onClick={toggleDropdown}
            >
              Portal ▾
            </button>
            {dropdownOpen && (
              <div className="ml-4">
                <Link
                  to="/student/signup"
                  className="block hover:text-cyan-300"
                  onClick={() => setIsOpen(false)}
                >
                  Student
                </Link>
                <Link
                  to="#"
                  className="block hover:text-cyan-300"
                  onClick={() => setIsOpen(false)}
                >
                  Admin
                </Link>
              </div>
            )}
            <Link
              to="/about"
              className="block hover:text-cyan-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <p className="text-xs text-cyan-200 mt-4 opacity-70">
              Built by <span className="font-semibold">Papiloyaks</span> 💻
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
