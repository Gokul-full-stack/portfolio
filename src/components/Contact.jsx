import React, { useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaLinkedin, FaEnvelope, FaGithub, } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import contactImage1 from "../assets/social.gif"; // Replace with your actual image
import contactImage2 from "../assets/pro.gif"; // Replace with your actual image

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("https://portfolio-2-xrcv.onrender.com/send-email", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 text-white p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8 text-teal-400">Contact</h1>

      {/* First Section - Get in Touch */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl bg-gray-800 text-white p-6 rounded-2xl shadow-lg">
        {/* Left: Contact Details */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-teal-600">Get in Touch</h2>
          <div className="flex items-center gap-3 mb-3">
            <FaMapMarkerAlt className="text-teal-400" size={24} />
            <p className="text-lg">Trichy, Tamil Nadu, India</p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-teal-400" size={24} />
            <p className="text-lg">gokulven01@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <FaLinkedin className="text-teal-400" size={24} />
            <a
              href="https://www.linkedin.com/in/gokul-v-822b01220/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <FaGithub className="text-teal-400" size={24} />
            <a
              href='https://github.com/Gok-max?tab=repositories'
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 hover:text-white"
            >
              GitHub
            </a>
          </div>
           <div className="flex items-center gap-3">
            <MdOutlineManageAccounts className="text-teal-400" size={30} />
            <a
              href='https://drive.google.com/file/d/1jWmt3HtCArSCCG_jy1I4xtV7IKUdBmIF/view?usp=sharing'
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={contactImage1} alt="Contact" className="w-full max-w-sm" />
        </div>
      </div>

      {/* Second Section - Contact Form */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl bg-gray-900 text-white p-6 mt-10 rounded-2xl shadow-lg">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={contactImage2} alt="Contact Form" className="w-full max-w-sm" />
        </div>
        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-center text-teal-600">Contact Form</h2>
          <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded-t-lg w-full hover:border-teal-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full hover:border-teal-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="border p-2 rounded-b-lg w-full h-24 hover:border-teal-400"
              required
            />
            <button
              type="submit"
              className="bg-teal-900 text-white py-2 px-4 rounded-md text-center hover:bg-teal-700 transition font-bold"
            >
              Send Message
            </button>
          </form>
          {status && <p className="text-center mt-3 text-lg font-semibold">{status}</p>}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-5xl bg-gray-800 text-gray-400 p-6 mt-10 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4 text-teal-600">Frequently Asked Questions</h2>
        <div className="text-center">
          <div className="mb-3 border-2 border-teal-900 rounded-t-xl p-1">
            <h3 className="text-lg font-semibold">How quickly do you respond to inquiries?</h3>
            <p className="text-md">I typically respond within 24 hours.</p>
          </div>
          <div className="mb-3 border-2 border-teal-600 rounded-xl p-0.5">
            <h3 className="text-lg font-semibold">Can we schedule a call to discuss a project?</h3>
            <p className="text-md">Yes! You can schedule a call via LinkedIn or email.</p>
          </div>
          <div className="mb-3 border-2 border-teal-900 rounded-b-xl p-1">
            <h3 className="text-lg font-semibold">Are you available for freelance or full-time work?</h3>
            <p className="text-md">I'm open to both freelance and full-time opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

