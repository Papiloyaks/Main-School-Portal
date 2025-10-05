import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Congratulation = () => {
  const navigate = useNavigate();
  const myResult = JSON.parse(localStorage.getItem("myResult"));
  const matric = myResult?.result?.matric;
  const name = myResult?.result?.lastname;

  // Auto redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/student/signin");
    }, 5000);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-cyan-900">
      <motion.section
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-[90%] sm:w-[500px] text-center"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold text-cyan-800 mb-4"
        >
          Sign Up Successful 
        </motion.h1>

        <p className="text-lg text-gray-700 mb-2">
          Welcome, <span className="font-bold text-cyan-700">{name}</span>
        </p>

        <p className="text-xl text-gray-800 font-medium mb-6">
          Your matric number is{" "}
          <span className="text-red-600 font-bold">{matric}</span>
        </p>

        <div className="mt-4">
          <p className="text-gray-600 text-sm italic">
            Redirecting you to Sign In page in{" "}
            <span className="font-semibold text-cyan-700">5 seconds...</span>
          </p>
        </div>

        <Link
          to="/student/signin"
          className="mt-6 inline-block bg-cyan-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-cyan-800 transition duration-300"
        >
          Click here to Sign In
        </Link>
      </motion.section>
    </div>
  );
};

export default Congratulation;

