import React, { useEffect, useState } from "react";
import PaystackPop from "@paystack/inline-js";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CreditCard, CheckCircle2, Loader2 } from "lucide-react";

const Pay = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [amount] = useState(50000);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!localStorage.mystatus) {
      navigate("/student/signin");
    }
  }, []);

  const payWithPaystack = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill in all fields before payment.");
      return;
    }

    setLoading(true);
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_db6ba7663112c3b323f7996c95bbedf9a9f6c1c8",
      amount: amount * 100,
      email,
      name,
      onSuccess(transaction) {
        const details = {
          id: Date.now(),
          email,
          name,
          reference: transaction.reference,
          amount,
          myDate: new Date().toLocaleDateString(),
          myTime: new Date().toLocaleTimeString(),
        };

        // Get existing transactions or create a new array
        const existing = JSON.parse(localStorage.getItem("transactions")) || [];
        existing.push(details);

        localStorage.setItem("transactions", JSON.stringify(existing));

        setLoading(false);
        setSuccess(true);
        setName("");
        setEmail("");

        setTimeout(() => {
          navigate("/student/payment-history");
        }, 3000);
      },
      onCancel() {
        alert("Transaction canceled");
        setLoading(false);
      },
    });
  };

  return (
    <main className="content flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="shadow-xl rounded-2xl p-6 w-full max-w-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900"
      >
        {!success ? (
          <>
            <h1 className="text-2xl font-bold mb-2 text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
              <CreditCard size={22} /> Pay School Fees
            </h1>
            <p className="text-sm mb-4 text-gray-500 dark:text-gray-400">
              Enter your details below to make payment securely.
            </p>

            <form onSubmit={payWithPaystack}>
              <div className="my-3">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full rounded-lg border border-gray-400 dark:border-gray-700 bg-transparent dark:text-white"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div className="my-3">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 p-2 w-full rounded-lg border border-gray-400 dark:border-gray-700 bg-transparent dark:text-white"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="my-3">
                <label className="text-sm font-medium">Amount</label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full rounded-lg border border-gray-400 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white"
                  disabled
                  value={`₦${amount.toLocaleString()}`}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className={`w-full py-2 rounded-lg font-semibold text-white transition ${
                  loading
                    ? "bg-cyan-400 cursor-not-allowed"
                    : "bg-cyan-700 hover:bg-cyan-800"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 size={18} className="animate-spin" />
                    Processing...
                  </div>
                ) : (
                  "Pay ₦50,000"
                )}
              </motion.button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-10"
          >
            <CheckCircle2
              size={70}
              className="mx-auto text-green-500 animate-bounce"
            />
            <h2 className="mt-4 text-xl font-bold text-green-500">
              Payment Successful 🎉
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Redirecting to Payment History...
            </p>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
};

export default Pay;
