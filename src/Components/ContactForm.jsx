// Import necessary libraries and hooks
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

// ContactForm component for submitting messages to the backend
const ContactForm = () => {
  // Local state to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Loading state for submit button and success response flag
  const [loading, setLoading] = useState(false);
  const [responseSent, setResponseSent] = useState(false);

  // Handle input changes and update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Utility function to validate email format
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Submit handler to send form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseSent(false);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setLoading(false);
      return;
    }

    // Validate email format
    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      // Send form data to backend API
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact/submit`,
        formData
      );

      // Show success message and reset form
      toast.success(response.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setResponseSent(true);
    } catch (error) {
      // Show error message on failure
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Render contact section with animation and form
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="scroll-mt-20 px-6 md:px-20 py-16 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Let’s Work Together
        </h2>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
          {/* Name input field */}
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white w-full"
              required
            />
          </div>

          {/* Email input field */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white w-full"
              required
            />
          </div>

          {/* Message textarea */}
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white w-full resize-none"
              required
              aria-label="Your Message"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Confirmation message */}
          {responseSent && (
            <p className="text-green-600 dark:text-green-400 text-center mt-4">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default ContactForm;
