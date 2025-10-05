import React, { useRef } from "react";
import { motion, animate } from "framer-motion";
import "animate.css";
import Div from "../components/Div";

import indians from "../Images/indians.jpg";
import fully from "../Images/fully.jpg";
import teens from "../Images/teens.jpg";
import kid from "../Images/kid.jpg";
import Black from "../Images/Black.jpg";
import Raising from "../Images/Raising.jpg";
import news2 from "../Images/news2.jpg";

const Landing = () => {
  // 👇 Reference for scroll target
  const wondersRef = useRef(null);

  // 👇 Animated smooth scroll using Framer Motion
  const handleScroll = () => {
    const targetPosition = wondersRef.current.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1.2; // seconds

    let start = null;
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * ease);
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  const myFont = {
    fontFamily: "Quicksand",
  };

  const myBg = {
    backgroundImage: `linear-gradient(rgba(0, 56, 56, 0.7), rgba(0, 56, 56, 0.7)), url(${fully})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
  };

  const newStyle = {
    backgroundColor: "#f9eee4",
  };

  return (
    <>
      <div className="bg-cyan-900 text-white">
        {/* HERO SECTION */}
        <motion.section
          style={myBg}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center px-8 sm:px-12 md:px-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1
              style={myFont}
              className="text-white font-bold text-5xl md:text-6xl lg:text-7xl leading-tight max-w-2xl"
            >
              The New Way To Learn Properly Is With Us
            </h1>
            <motion.button
              onClick={handleScroll}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-cyan-800 font-semibold py-3 px-8 rounded-full shadow hover:bg-cyan-100 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.section>

        {/* MOTIVATIONAL QUOTE SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 py-20 px-8 lg:px-20 bg-cyan-800/90"
        >
          <div>
            <img
              className="rounded-xl shadow-lg w-full"
              src={indians}
              alt="Students"
            />
          </div>
          <div className="flex items-center justify-center">
            <h1
              style={myFont}
              className="text-3xl md:text-5xl font-semibold text-center leading-snug"
            >
              “Education is the passport to the future, for tomorrow belongs to
              those who prepare for it today.”
            </h1>
          </div>
        </motion.section>

        {/* WONDERS SECTION */}
        <section
          ref={wondersRef}
          className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-20 py-16 bg-white text-gray-800"
        >
          <Div
            name="Wonders of Education"
            title="Education is a journey of enlightenment, a path paved with countless benefits that enrich our lives in remarkable ways..."
            title2="At its core, education is empowerment. It equips individuals with knowledge and skills needed to navigate life..."
            title3="Education fuels progress, encouraging curiosity and discovery that transform the world."
            style="bg-white rounded-lg p-6 text-justify shadow-md"
          />
          <Div
            name="Wonders of Education (Cont.)"
            title="Technology enhances education, making it more accessible and engaging..."
            title2="Education builds communities that inspire and support one another."
            title3="It’s a lifelong pursuit that reminds us our journey of discovery never truly ends."
            style="rounded-lg p-6 text-justify shadow-md"
            mystyle={newStyle}
          />
        </section>

        {/* DR. SEUSS SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 py-20 px-8 lg:px-20 bg-cyan-800/80"
        >
          <div className="flex items-center justify-center">
            <h1
              style={myFont}
              className="text-3xl md:text-5xl text-center font-semibold leading-snug"
            >
              “The more that you read, the more things you will know. The more
              that you learn, the more places you’ll go.” — Dr. Seuss
            </h1>
          </div>
          <div>
            <img
              className="rounded-xl shadow-lg w-full"
              src={news2}
              alt="Books and learning"
            />
          </div>
        </motion.section>

        {/* INFO CARDS */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 px-8 lg:px-20 bg-white text-gray-800"
        >
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[teens, kid, Black, Raising].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`education-${i}`}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2 text-cyan-800">
                    Inspiring Story
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Education shapes lives, unlocks potential, and transforms
                    societies through learning and opportunity.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FINAL EDUCATION DIVS */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-20 py-16 bg-cyan-900 text-white"
        >
          <Div
            name="Other Wonders of Education"
            title="Education is a lifelong journey that fuels innovation and human progress."
            title2="It connects cultures, bridges understanding, and unites humanity."
            title3="Through knowledge, we find our shared strength and purpose."
            style="bg-cyan-800 rounded-lg p-6 text-justify shadow-md"
          />
          <Div
            name="Conclusion"
            title="Education preserves culture, inspires stewardship, and empowers future generations."
            title2="It ensures humanity continues to evolve with wisdom and compassion."
            title3="Education is a beacon of hope, progress, and endless possibility."
            style="bg-cyan-700 rounded-lg p-6 text-justify shadow-md"
          />
        </motion.section>
      </div>
    </>
  );
};

export default Landing;
