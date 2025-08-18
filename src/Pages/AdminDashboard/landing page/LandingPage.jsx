import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-green-600">IRIS POS</h1>
        <div className="space-x-4">
          <a href="/" className="hover:text-green-600">Home</a>
          <a href="#about" className="hover:text-green-600">About Us</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
          <Link  to="/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700"
          >
            Sign In
          </motion.button>
          </Link>
          <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700"
          >
            Sign Up
          </motion.button>
          </Link>
           <Link  to="/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700"
          >
            Admin Login
          </motion.button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section  className="text-center py-20 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Smart Restaurant Ordering & Management
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-600">
          Manage all your restaurant orders, menus and deliveries in one place.
          Connect with Foodpanda, Deliveroo, UberEats and more seamlessly with IRIS POS.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700"
            >
              Get Started
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900"
          >
            Learn More
          </motion.button>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-6 text-green-600">About Us</h3>
        <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">
          IRIS POS is a modern solution for restaurants to handle in-house and delivery orders.
          With our system, you can list your products, manage orders from multiple delivery
          platforms, and boost your efficiency — all from one dashboard.
        </p>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-6 text-green-600">Contact Us</h3>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-700"
          >
            Send Message
          </motion.button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 bg-green-600 text-white">
        © {new Date().getFullYear()} IRIS POS. All rights reserved.
      </footer>
    </div>
  );
}
