import React, { useEffect, useState } from "react";
import "../Side.css";
import { useNavigate } from "react-router-dom";
import Dashdiv from "../components/Dashdiv";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserGraduate,
  FaGraduationCap,
  FaBookOpen,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { BiLineChart } from "react-icons/bi";
import { SiLevelsdotfyi } from "react-icons/si";
import { IoIosPaper } from "react-icons/io";
import { MdEmojiPeople } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";

const Main = () => {
  const [matricno, setMatricno] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  let endpoint = "https://main-school-portal.onrender.com/student/portal";
  let token = localStorage.token;
  let navigate = useNavigate();

  //  Detect and apply theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (!response.data.status) {
          navigate("/student/signin");
        } else {
          localStorage.setItem("mystatus", JSON.stringify(response.data.status));
          setMatricno(response.data.response.matric);
          setFirst(response.data.response.firstname);
          setLast(response.data.response.lastname);
          localStorage.setItem("myprofile", JSON.stringify(response.data));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full"
        ></motion.div>
      </div>
    );
  }

  return (
    <main className="content bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-500">
      {/* Header Section */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-gray-800 dark:to-gray-700 text-white py-5 px-6 shadow-md flex justify-between items-center"
      >
        <div>
          <h1 className="text-2xl font-bold">
            Welcome, {first} {last} 
          </h1>
          <p className="text-sm opacity-90">Here’s your academic overview</p>
        </div>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
        >
          <AnimatePresence mode="wait" initial={false}>
            {darkMode ? (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                <FaSun size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <FaMoon size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Dashboard Section */}
      <section className="p-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {[
            { id: "Matric No:", value: matricno, icon: <FaUserGraduate /> },
            { id: "Semester", value: "Harmattan", icon: <FaGraduationCap /> },
            { id: "Current CGPA", value: "nil", icon: <BiLineChart /> },
            { id: "Department", value: "nil", icon: <FaBookOpen /> },
            { id: "Current Level", value: "nil", icon: <SiLevelsdotfyi /> },
            { id: "Attendance", value: "—", icon: <IoIosPaper /> },
            { id: "Student Leave", value: "none", icon: <MdEmojiPeople /> },
            { id: "Notes", value: "nil", icon: <BsPencilFill /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Dashdiv
                id={item.id}
                style="shadow-md p-3 bg-white dark:bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-200"
                mat={item.value}
                img={item.icon}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4"
        >
          <div className="shadow bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
            <h2 className="font-semibold mb-2 text-cyan-600 dark:text-cyan-400">
              Student Info
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Welcome to your personal academic dashboard. Here you’ll find your
              semester details, grades, and important updates. Keep an eye on
              your performance and attendance records.
            </p>
          </div>

          <div className="shadow bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
            <h2 className="font-semibold mb-2 text-cyan-600 dark:text-cyan-400">
              Reminders
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Don’t forget to check your course registration status and submit
              your assignments before deadlines. Stay consistent, and keep
              pushing towards excellence.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Main;
