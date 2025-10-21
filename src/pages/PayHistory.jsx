import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ReceiptText, Trash2 } from "lucide-react";

const PayHistory = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!localStorage.mystatus) {
      navigate("/student/signin");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(stored);
  }, [navigate]);

  const clearHistory = () => {
    if (window.confirm("Are you sure you want to clear all payment records?")) {
      localStorage.removeItem("transactions");
      setTransactions([]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col items-center p-6 transition-all duration-500">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-white dark:bg-gray-900 shadow-xl rounded-2xl border border-gray-300 dark:border-gray-800 p-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-2">
            <ReceiptText /> Payment History
          </h1>
          {transactions.length > 0 && (
            <button
              onClick={clearHistory}
              className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-sm"
            >
              <Trash2 size={16} /> Clear
            </button>
          )}
        </div>

        {/* Table */}
        {transactions.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-10">
            No payment records found 
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-cyan-700 text-white">
                <tr>
                  <th className="p-3 text-sm">#</th>
                  <th className="p-3 text-sm">Reference</th>
                  <th className="p-3 text-sm">Amount</th>
                  <th className="p-3 text-sm">Date</th>
                  <th className="p-3 text-sm">Time</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, index) => (
                  <motion.tr
                    key={t.reference || index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="p-3 text-gray-800 dark:text-gray-200">{index + 1}</td>
                    <td className="p-3 text-gray-800 dark:text-gray-200 text-sm">
                      {t.reference || "N/A"}
                    </td>
                    <td className="p-3 font-semibold text-green-600 dark:text-green-400">
                      ₦{t.amount?.toLocaleString() || "0"}
                    </td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      {t.myDate || "—"}
                    </td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      {t.myTime || "—"}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </main>
  );
};

export default PayHistory;
