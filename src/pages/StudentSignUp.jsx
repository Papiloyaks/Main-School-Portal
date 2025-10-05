import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const StudentSignUp = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [message, setMessage] = useState(null);
  const endpoint1 = "https://main-school-portal.onrender.com/student/signup/";

  // ✅ Auto-sync with system theme
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");
    const handleChange = (e) => setTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      dob: "",
      password: "",
      confirmPassword: "",
      matric: `UNI2023${Math.round(Math.random() * 10000)}`,
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Only numbers are allowed")
        .required("Phone number is required"),
      dob: Yup.date().required("Date of birth is required"),
      password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const result = await axios.post(endpoint1, values);
        if (result?.data) {
          localStorage.setItem("myResult", JSON.stringify(result.data));
          setMessage({ type: "success", text: "Signup successful! 🎉 Redirecting..." });
          setTimeout(() => navigate("/congrat"), 1500);
        }
      } catch (error) {
        setMessage({
          type: "error",
          text:
            error.response?.data?.message ||
            "Something went wrong. Please try again.",
        });
      }
    },
  });

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-cyan-100 text-gray-800"
      }`}
    >
      <section
        className={`p-8 rounded-2xl shadow-2xl w-[95%] sm:w-[400px] ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className="font-extrabold text-3xl text-center mb-4">Student Sign Up</h1>

        {message && (
          <div
            className={`p-2 text-center rounded mb-3 ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={formik.handleSubmit} className="grid gap-3">
          {[
            { name: "firstname", label: "First Name", type: "text" },
            { name: "lastname", label: "Last Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Phone", type: "text" },
            { name: "dob", label: "Date of Birth", type: "date" },
            { name: "password", label: "Password", type: "password" },
            { name: "confirmPassword", label: "Confirm Password", type: "password" },
          ].map((field) => (
            <div key={field.name}>
              <label className="font-semibold">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={`Enter ${field.label.toLowerCase()}`}
                className={`w-full p-2 mt-1 rounded-xl border-2 focus:outline-none transition-colors ${
                  formik.touched[field.name] && formik.errors[field.name]
                    ? "border-red-500"
                    : theme === "dark"
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-cyan-500 bg-cyan-50"
                }`}
              />
              {formik.touched[field.name] && formik.errors[field.name] && (
                <small className="text-red-500">{formik.errors[field.name]}</small>
              )}
            </div>
          ))}

          <button
            type="submit"
            className={`mt-3 py-2 font-bold rounded-xl transition-all ${
              theme === "dark"
                ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                : "bg-black hover:bg-gray-900 text-white"
            }`}
          >
            Sign Up
          </button>

          <div className="flex justify-between mt-2">
            <p className="text-sm">Already have an account?</p>
            <Link
              to="/student/signin"
              className={`font-semibold underline ${
                theme === "dark" ? "text-cyan-400" : "text-cyan-700"
              }`}
            >
              Sign In
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default StudentSignUp;
