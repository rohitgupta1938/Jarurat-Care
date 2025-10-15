import React from "react";
import { FaHeartbeat, FaUserMd, FaNotesMedical, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-90"></div>


        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-20 flex flex-col lg:flex-row items-center gap-10">
         
          <motion.div
            className="text-white z-10 max-w-xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Welcome to <span className="text-yellow-300">Jarurat Care</span>
            </h1>
            <p className="text-lg text-indigo-100 mb-6">
              Your trusted platform for managing patient records with ease,
              security, and efficiency. Empowering healthcare with technology.
            </p>
            <motion.a
              href="#patients"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
            >
              Get Started <FaArrowRight />
            </motion.a>
          </motion.div>

          
          <motion.div
            className="flex justify-center items-center w-full lg:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="../img.jpg"
              alt="Healthcare Illustration"
              className="w-full max-w-md drop-shadow-2xl rounded-xl"
            />
          </motion.div>
        </div>


      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Why Choose <span className="text-indigo-600">Jarurat Care?</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHeartbeat className="text-indigo-600 text-3xl" />,
              title: "Easy Patient Records",
              desc: "Add, view, and manage patient data instantly with a clean interface.",
            },
            {
              icon: <FaUserMd className="text-indigo-600 text-3xl" />,
              title: "Doctor Friendly",
              desc: "A dashboard designed for speed, clarity, and accurate record keeping.",
            },
            {
              icon: <FaNotesMedical className="text-indigo-600 text-3xl" />,
              title: "Secure & Reliable",
              desc: "Your data stays safe — built with modern security and local storage.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-indigo-600 py-16 text-center text-white relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Ready to Manage Your Patients Seamlessly?
          </motion.h2>
          <motion.p
            className="text-indigo-100 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join Jarurat Care today and experience a smooth, modern patient
            management dashboard.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/patients"
              className="inline-block px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
            >
              Go to Dashboard
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
