"use client";
import {
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Header from "@/components/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
    const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);
    
    setFormData({ name: "", email: "", message: "" });
    router.push('/')
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <main className="w-full max-w-6xl mx-auto p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-[#FF7C7C]">Contact Us</h1>
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FaMobileAlt className="text-2xl text-[#FF7C7C] mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Phone</h2>
                <p className="text-gray-600">+91 9505934716</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-2xl text-[#FF7C7C] mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="text-gray-600">abdullahahil7861@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-2xl text-[#FF7C7C] mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Address</h2>
                <p className="text-gray-600">Development City, India</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaLinkedin className="text-2xl text-[#FF7C7C] mr-4" />
              <div>
                <h2 className="text-xl font-semibold">LinkedIn</h2>
                <a
                  href="https://www.linkedin.com/in/md-abdullah-29a067260/"
                  className="text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/md-abdullah-29a067260/
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <FaGithub className="text-2xl text-[#FF7C7C] mr-4" />
              <div>
                <h2 className="text-xl font-semibold">GitHub</h2>
                <a
                  href="https://github.com/Md-Abdullah1"
                  className="text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Md-Abdullah1
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF7C7C] text-white p-2 rounded-md hover:bg-[#ff4c4c] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
