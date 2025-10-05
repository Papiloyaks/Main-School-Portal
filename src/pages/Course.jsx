import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Course = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const courses = [
    "CHE 101 - Chemistry",
    "MTH 102 - Mathematics",
    "BIO 103 - Biology",
    "SOC 104 - Sociology",
    "AGR 105 - Agriculture",
    "PHY 106 - Physics",
    "PSY 107 - Psychology",
    "CVE 108 - Civil Engineering",
    "GEO 109 - Geography",
  ];

  // Redirect if not logged in
  useEffect(() => {
    if (!localStorage.mystatus) {
      navigate("/student/signin");
    }
  }, [navigate]);

  const addCourse = () => {
    if (selectedCourse && !registeredCourses.includes(selectedCourse)) {
      setRegisteredCourses([...registeredCourses, selectedCourse]);
      setSelectedCourse("");
    }
  };

  const removeCourse = (course) => {
    setRegisteredCourses(registeredCourses.filter((c) => c !== course));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 px-4">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold text-cyan-800 text-center mb-6">
          📚 Course Registration
        </h1>

        {/* Course Selection */}
        <div className="flex gap-3 items-center mb-6">
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="flex-1 border border-cyan-500 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">Select a Course</option>
            {courses.map((course, idx) => (
              <option key={idx} value={course}>
                {course}
              </option>
            ))}
          </select>
          <button
            onClick={addCourse}
            className="bg-cyan-700 text-white px-4 py-2 rounded-lg shadow hover:bg-cyan-800 transition"
          >
            Add
          </button>
        </div>

        {/* Registered Courses */}
        {registeredCourses.length > 0 ? (
          <div>
            <h2 className="font-semibold text-gray-800 mb-2">Your Courses:</h2>
            <ul className="space-y-2">
              <AnimatePresence>
                {registeredCourses.map((course, index) => (
                  <motion.li
                    key={course}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 30, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-between items-center bg-slate-200 px-3 py-2 rounded-md"
                  >
                    <span>{course}</span>
                    <button
                      onClick={() => removeCourse(course)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                    >
                      Remove
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
        ) : (
          <p className="text-gray-500 italic text-center">
            No courses registered yet.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Course;

