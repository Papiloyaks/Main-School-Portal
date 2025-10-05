import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Help = () => {
  const navigate = useNavigate();
  const [help, setHelp] = useState("");
  const [subject, setSubject] = useState("");
  const [myHelp, setMyHelp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!localStorage.mystatus) {
      navigate("/student/signin");
    }
  }, [navigate]);

  let date = new Date();
  const helpDate = date.toLocaleDateString();
  const helpTime = date.toLocaleTimeString();

  // const baseUrl = "http://localhost:4223/student";
  const baseUrl = "https://main-school-portal.onrender.com/student";

  // Send help request
  const sendHelp = async () => {
    if (!subject.trim() || !help.trim()) {
      alert("Please fill out both Subject and Help fields.");
      return;
    }

    const helpStudent = { subject, help, helpTime, helpDate };

    try {
      setLoading(true);
      const response = await axios.post(`${baseUrl}/help`, helpStudent);
      setMyHelp(response.data.result);
      setSubject("");
      setHelp("");
    } catch (error) {
      console.error("Error sending help request:", error);
      alert("Failed to send help request.");
    } finally {
      setLoading(false);
    }
  };

  // Delete help request
  const deleteHelp = async () => {
    if (!myHelp?._id) {
      alert("No help request to delete.");
      return;
    }

    try {
      setDeleting(true);
      await axios.delete(`${baseUrl}/help/${myHelp._id}`);
      setMyHelp(null); // Remove from UI
    } catch (error) {
      console.error("Error deleting help request:", error);
      alert("Failed to delete help request.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {/* Help Form */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-lg"
      >
        <h4 className="text-2xl font-bold text-cyan-800 text-center mb-3">
          Need Help?
        </h4>
        <p className="text-gray-600 text-center mb-6">
          Fill in your issue below and our support team will get back to you.
        </p>

        <input
          type="text"
          placeholder="Subject"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />

        <textarea
          rows="6"
          placeholder="How can we help?"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
          onChange={(e) => setHelp(e.target.value)}
          value={help}
        ></textarea>

        <button
          onClick={sendHelp}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            loading
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-cyan-700 hover:bg-cyan-800 text-white shadow-md"
          }`}
        >
          {loading ? "Sending..." : "Send Request"}
        </button>
      </motion.section>

      {/* Show Help Submitted */}
      {myHelp && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg mt-8"
        >
          <h5 className="text-lg font-bold text-cyan-700 mb-4">
            ✅ Request Submitted
          </h5>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Subject:</span> {myHelp.subject}
            </p>
            <p>
              <span className="font-semibold">Issue:</span> {myHelp.help}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Time:</span> {myHelp.helpTime} |{" "}
              <span className="font-semibold">Date:</span> {myHelp.helpDate}
            </p>
          </div>

          <button
            onClick={deleteHelp}
            disabled={deleting}
            className={`w-full mt-4 py-2 rounded-lg font-semibold transition ${
              deleting
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 text-white shadow-md"
            }`}
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </motion.section>
      )}
    </div>
  );
};

export default Help;

