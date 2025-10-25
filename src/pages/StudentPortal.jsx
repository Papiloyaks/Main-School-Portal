import React, { useEffect, useState, useRef } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  CreditCard,
  History,
  BookOpen,
  Bell,
  MessageCircle,
  HelpCircle,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
  Sun,
  Moon,
} from "lucide-react";

import Profile from "./Profile";
import Main from "./Main";
import Pay from "./Pay";
import PayHistory from "./PayHistory";
import Course from "./Course";
import Notice from "./Notice";
import Help from "./Help";
import Chat from "./Chat";

import socketClient from "socket.io-client";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/portal/dash" },
  { name: "Profile", icon: <User size={18} />, path: "/portal/profile" },
  { name: "Pay Tuition", icon: <CreditCard size={18} />, path: "/portal/pay" },
  { name: "Payment History", icon: <History size={18} />, path: "/portal/payhistory" },
  { name: "Course Registration", icon: <BookOpen size={18} />, path: "/portal/course" },
  { name: "Notice Board", icon: <Bell size={18} />, path: "/portal/notice" },
  { name: "Chat With Students", icon: <MessageCircle size={18} />, path: "/portal/chat" },
  { name: "Help", icon: <HelpCircle size={18} />, path: "/portal/help" },
];

const StudentPortal = () => {
  const [newfirstname, setNewfirstname] = useState("");
  const [newlastname, setNewlastname] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const navigate = useNavigate();

  // SOCKET.IO
  const socket = useRef(null);
  const endpoint = "https://main-school-portal.onrender.com";

  // Theme auto detection
  useEffect(() => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === "system") {
      document.documentElement.classList.toggle("dark", systemDark);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Socket + user profile
  useEffect(() => {
    socket.current = socketClient(endpoint);

    let myprofile = JSON.parse(localStorage.getItem("myprofile"));
    if (myprofile?.response) {
      setNewfirstname(myprofile.response.firstname);
      setNewlastname(myprofile.response.lastname);
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("mystatus");
    localStorage.removeItem("myprofile");
    navigate("/student/signin");
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "dark") return "light";
      if (prev === "light") return "dark";
      return "dark";
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Top Navbar */}
      <header className="flex items-center justify-between bg-cyan-800 dark:bg-cyan-900 px-4 py-3 shadow-md transition-colors duration-500">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="block md:hidden text-white"
        >
          <Menu size={28} />
        </button>

        <h1 className="text-lg sm:text-xl font-semibold text-white">
          Welcome,{" "}
          <span className="text-teal-300">
            {newfirstname} {newlastname}
          </span>
        </h1>
        <button
          onClick={toggleTheme}
          className="text-white bg-cyan-700 hover:bg-cyan-600 p-2 rounded-lg transition"
          title="Toggle Theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Desktop */}
        <aside className="hidden md:flex flex-col w-64 bg-cyan-900 dark:bg-cyan-950 text-white shadow-lg transition-colors duration-500">
          <div className="px-6 py-4 border-b border-cyan-700">
            <h2 className="text-xl font-bold">Student Portal</h2>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-cyan-700 dark:hover:bg-cyan-800 transition"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-cyan-700">
            <button
              onClick={logOut}
              className="flex items-center gap-3 px-4 py-2 w-full text-left rounded-lg hover:bg-red-600 transition"
            >
              <LogOut size={18} />
              <span>Log Out</span>
            </button>
          </div>
        </aside>

        {/* Sidebar Mobile (Animated) */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-64 bg-cyan-900 dark:bg-cyan-950 text-white z-50 shadow-lg md:hidden flex flex-col transition-colors duration-500"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-700">
                <h2 className="text-lg font-bold">Menu</h2>
                <button onClick={() => setIsSidebarOpen(false)} className="text-white">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setIsSidebarOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-cyan-700 dark:hover:bg-cyan-800 transition"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
              <div className="p-4 border-t border-cyan-700">
                <button
                  onClick={logOut}
                  className="flex items-center gap-3 px-4 py-2 w-full text-left rounded-lg hover:bg-red-600 transition"
                >
                  <LogOut size={18} />
                  <span>Log Out</span>
                </button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto transition-colors duration-500">
          <Routes>
            <Route path="/dash" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/payhistory" element={<PayHistory />} />
            <Route path="/course" element={<Course />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/help" element={<Help />} />
            <Route path="/chat" element={<Chat socket={socket} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default StudentPortal;


