import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [matric, setMatric] = useState("");
  const [image, setImage] = useState("");
  const [newImage, setNewImage] = useState("");
  const [editing, setEditing] = useState(false);

  const endpoint = "https://main-school-portal.onrender.com/student/image/";
  const storedImage = JSON.parse(localStorage.getItem("myimage"));

  useEffect(() => {
    const mystatus = localStorage.getItem("mystatus");
    if (!mystatus) {
      window.location.href = "/student/signin";
    } else {
      setNewImage(storedImage);
      const myProfile = JSON.parse(localStorage.getItem("myprofile"));
      if (myProfile?.response) {
        setFirstname(myProfile.response.firstname);
        setLastname(myProfile.response.lastname);
        setEmail(myProfile.response.email);
        setMatric(myProfile.response.matric);
      }
    }
  }, []);

  const changeFile = (e) => {
    const myImage = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(myImage);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const uploadFile = () => {
    axios
      .post(endpoint, { image })
      .then((response) => {
        localStorage.setItem("myimage", JSON.stringify(response.data.firstImage));
        setNewImage(response.data.firstImage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-10 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto border border-cyan-400 dark:border-cyan-600 rounded-2xl p-6 shadow-lg bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-cyan-800 dark:text-cyan-300">
            Profile
          </h1>
          <img
            src={newImage || "/default-avatar.png"}
            alt="profile"
            className="w-20 h-20 object-cover rounded-full border-2 border-cyan-500 dark:border-cyan-400"
          />
        </div>

        {/* Image upload */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <input
            type="file"
            accept="image/*"
            className="border border-gray-400 dark:border-gray-600 px-3 py-2 rounded-md text-sm w-full sm:w-auto bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors duration-300"
            onChange={changeFile}
          />
          <button
            onClick={uploadFile}
            className="bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white px-4 py-2 rounded-md transition-all duration-300"
          >
            Upload Image
          </button>
        </div>

        {/* Info fields */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-300">Firstname:</p>
            <p className="mt-2 border border-cyan-600 dark:border-cyan-400 py-2 px-3 rounded-md text-center font-medium bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
              {firstname}
            </p>
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-300">Lastname:</p>
            <p className="mt-2 border border-cyan-600 dark:border-cyan-400 py-2 px-3 rounded-md text-center font-medium bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
              {lastname}
            </p>
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-300">Email:</p>
            <p className="mt-2 border border-cyan-600 dark:border-cyan-400 py-2 px-3 rounded-md text-center font-medium bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
              {email}
            </p>
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-300">Matric No:</p>
            <p className="mt-2 border border-cyan-600 dark:border-cyan-400 py-2 px-3 rounded-md text-center font-medium bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
              {matric}
            </p>
          </div>
        </div>

        {/* Edit section placeholder */}
        <div className="mt-12 border-t border-cyan-500 dark:border-cyan-700 pt-6">
          <h2 className="text-lg font-semibold mb-4 text-cyan-700 dark:text-cyan-300">
            Edit Profile / Change Password (coming soon)
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This section will allow you to update your personal details or securely
            change your password.
          </p>
        </div>
      </div>
    </motion.main>
  );
};

export default Profile;


