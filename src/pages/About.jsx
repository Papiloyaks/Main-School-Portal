import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center py-10 px-5">
      <section className="grid lg:grid-cols-2 gap-6 max-w-6xl w-full">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-cyan-800 text-white rounded-2xl shadow-xl p-8 flex flex-col justify-between"
        >
          <div>
            <h4 className="text-sky-200 font-bold text-2xl mb-4">
              Welcome to <span className="text-white">[School Name]</span> 
            </h4>
            <p className="text-justify leading-relaxed text-gray-100">
              At [School Name], we believe that education is the key to unlocking
              a brighter future. Our school portal is more than just a digital
              platform; it's a gateway to the heart and soul of our educational
              community. We invite you to explore this page and discover what
              makes our institution a beacon of knowledge, innovation, and
              excellence.
              <br /> <br />
              As you embark on this virtual journey through our school's rich
              history, mission, and values, you'll gain insights into our
              commitment to nurturing young minds, fostering a culture of
              learning, and preparing students to become the leaders of tomorrow.
            </p>
          </div>

          <Link
            className="mt-6 inline-block px-6 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-semibold transition"
            to="/"
          >
            Go Home
          </Link>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h4 className="text-cyan-800 font-bold text-2xl mb-4">
            Our Brand Story 
          </h4>
          <p className="text-justify leading-relaxed text-gray-700 font-medium">
            In the heart of [City/Town Name], there exists a place where dreams
            take flight, where knowledge is the wind beneath young wings, and
            where the journey of education knows no bounds. Welcome to{" "}
            <span className="text-cyan-700 font-semibold">[School Name]</span>,
            a legacy of learning, innovation, and community.
            <br /> <br />
            Since our inception in [Year of Establishment], [School Name] has
            been a beacon of academic excellence and holistic development. From
            the moment students step through our doors, they become part of a
            vibrant family that supports, inspires, and empowers.
            <br /> <br />
            Our dedicated faculty, extracurricular programs, and commitment to
            innovation ensure every child has the tools to thrive. This portal
            is a digital bridge to connect families, staff, and students in
            shaping brighter futures.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
