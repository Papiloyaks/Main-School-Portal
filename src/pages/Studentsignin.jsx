import React from "react";
import photo from "../Images/photo.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Studentsignin = () => {
  const navigate = useNavigate();

  const url = "https://main-school-portal.onrender.com/student/signin";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post(url, values)
        .then((response) => {
          console.log(response);
          if (!response.data.status) {
            alert(response.data.message);
          } else {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("mystatus", true);
            localStorage.setItem("myprofile", JSON.stringify(response.data));
            navigate("/portal/dash");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Enter a valid email address"),
      password: Yup.string().required("Password is required"),
    }),
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex items-center justify-center px-4">
      <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden w-full max-w-6xl">
        {/* Left Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center p-10"
        >
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col w-full max-w-sm space-y-5"
          >
            <h1 className="text-3xl font-bold text-cyan-700 dark:text-cyan-300 mb-4 text-center">
              Student Sign In
            </h1>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="name@mail.com"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-3 rounded-lg border-2 outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors duration-300 focus:ring-2 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500 ring-red-400"
                    : "border-cyan-700 dark:border-cyan-500 focus:ring-cyan-500"
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <small className="text-red-500">{formik.errors.email}</small>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-3 rounded-lg border-2 outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors duration-300 focus:ring-2 ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500 ring-red-400"
                    : "border-cyan-700 dark:border-cyan-500 focus:ring-cyan-500"
                }`}
              />
              {formik.touched.password && formik.errors.password && (
                <small className="text-red-500">{formik.errors.password}</small>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow-md"
            >
              Sign In
            </button>

            {/* Signup Link */}
            <div className="flex justify-between items-center text-sm mt-2">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                New here?
              </p>
              <Link
                to="/student/signup"
                className="text-cyan-700 dark:text-cyan-400 underline hover:text-cyan-500 dark:hover:text-cyan-300 transition"
              >
                Sign Up Here
              </Link>
            </div>
          </form>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex items-center justify-center bg-gray-200 dark:bg-gray-700"
        >
          <img
            src={photo}
            alt="students"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Studentsignin;
