import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-cyan-700 via-cyan-800 to-gray-900">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-center text-white px-6 py-10 rounded-2xl shadow-2xl bg-black/40 backdrop-blur-md"
      >
        <h1 className="text-9xl font-extrabold text-red-500">404</h1>
        <h2 className="text-3xl font-bold mt-4">Oops! Page Not Found</h2>
        <p className="mt-2 text-gray-300">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 text-white px-6 py-3 rounded-lg shadow-md font-semibold"
        >
          ⬅ Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Error;
