import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaHeartbeat, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16 px-6 sm:px-12 lg:px-24">
      {/* Decorative Background Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>

      {/* Main Content */}
      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-indigo-600">Jarurat Care</span>
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          We're creating a sustainable, tech-enabled support network where no family faces cancer alone.
          Our mission is to empower, connect, and care — ensuring every patient and family receives the
          help and compassion they deserve.
        </p>

        {/* Feature Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-indigo-600 text-4xl mb-3 flex justify-center">
              <FaHandsHelping />
            </div>
            <h3 className="text-lg font-semibold mb-2">Community Support</h3>
            <p className="text-gray-500 text-sm">
              Bringing people together through care, empathy, and shared strength.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-indigo-600 text-4xl mb-3 flex justify-center">
              <FaHeartbeat />
            </div>
            <h3 className="text-lg font-semibold mb-2">Holistic Care</h3>
            <p className="text-gray-500 text-sm">
              Combining technology and compassion to provide emotional and medical support.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-indigo-600 text-4xl mb-3 flex justify-center">
              <FaUsers />
            </div>
            <h3 className="text-lg font-semibold mb-2">Stronger Together</h3>
            <p className="text-gray-500 text-sm">
              Building connections where families and patients uplift each other every step of the way.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
