import React from "react";
import { motion } from "framer-motion";

const Dashdiv = ({ id, level, style, mat, img }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`${style} flex flex-col justify-between border border-gray-200 dark:border-gray-700 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300`}
    >
      {/* Top Row */}
      <div className="flex justify-between items-center mb-2 border-b border-gray-300 dark:border-gray-600 pb-2">
        <div className="text-cyan-600 dark:text-cyan-400 text-xl">
          <motion.div
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            {img}
          </motion.div>
        </div>
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {level}
        </span>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between font-semibold text-gray-800 dark:text-gray-100">
        <p>{id}</p>
        <p className="text-cyan-700 dark:text-cyan-400">{mat}</p>
      </div>
    </motion.div>
  );
};

export default Dashdiv;
