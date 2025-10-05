import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  const hiddenRoutes = ["/congrat", "/about"];
  const isHidden = hiddenRoutes.includes(location.pathname);

  // ✅ Sync with system dark mode
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");
    const handleChange = (e) => setTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (isHidden) return null;

  return (
    <footer
      className={`w-full py-10 transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-cyan-800 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">School Portal</h2>
          <p className="text-sm opacity-80">
            Simplifying student management and access to learning resources.
          </p>
          <p className="mt-3 text-sm opacity-70">
            Built with ❤️ by{" "}
            <span className="font-semibold text-cyan-200">Papiloyaks</span>
          </p>
          <p className="mt-2 text-xs opacity-70">© {new Date().getFullYear()} All rights reserved</p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1 text-sm opacity-80">
            <li><Link to="/" className="hover:text-cyan-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-cyan-300">About</Link></li>
            <li><Link to="/student/signin" className="hover:text-cyan-300">Login</Link></li>
            <li><Link to="/student/signup" className="hover:text-cyan-300">Register</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Resources</h5>
          <ul className="space-y-1 text-sm opacity-80">
            <li><a href="#" className="hover:text-cyan-300">FAQs</a></li>
            <li><a href="#" className="hover:text-cyan-300">Support</a></li>
            <li><a href="#" className="hover:text-cyan-300">Policies</a></li>
            <li><a href="#" className="hover:text-cyan-300">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Connect</h5>
          <ul className="space-y-1 text-sm opacity-80">
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-cyan-300">Twitter</a></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-300">GitHub</a></li>
            <li><a href="mailto:support@schoolportal.com" className="hover:text-cyan-300">Email Us</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t border-cyan-600 pt-4 opacity-70">
        Designed & Developed by <span className="font-semibold text-cyan-200">Papiloyaks</span> 🚀
      </div>
    </footer>
  );
};

export default Footer;
