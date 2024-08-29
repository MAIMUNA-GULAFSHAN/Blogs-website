"use client";
import {
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Contact = ({darkTheme}) => {
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
    <div className={`min-h-full flex flex-col items-center mb-16  ${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <main className="w-full max-w-6xl mx-auto p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-[#92A94E]">Contact Us</h1>
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <div className={`w-full lg:w-1/2 p-6 rounded-lg shadow-xl  ${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <div className="flex items-center mb-4">
              <FaMobileAlt className="text-2xl text-[#92A94E] mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Phone</h2>
                <p className="text-gray-600">+91 9391572366</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-2xl text-[#92A94E] mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="text-gray-600">maimunagulafshan1@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-2xl text-[#92A94E] mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Address</h2>
                <p className="text-gray-600">Hyderabad, India</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaLinkedin className="text-2xl text-[#92A94E] mr-4" />
              <div>
                <h2 className="text-xl font-semibold">LinkedIn</h2>
                <a
                  href="https://www.linkedin.com/in/maimuna-gulafshan-31206a260/"
                  className="text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 https://www.linkedin.com/in/maimuna-gulafshan-31206a260/
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <FaGithub className="text-2xl text-[#92A94E] mr-4" />
              <div>
                <h2 className="text-xl font-semibold">GitHub</h2>
                <a
                  href="https://github.com/MAIMUNA-GULAFSHAN"
                  className="text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/MAIMUNA-GULAFSHAN
                </a>
              </div>
            </div>
          </div>
          <div className={`w-full lg:w-1/2 p-6 rounded-lg shadow-xl  ${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium ${darkTheme ? "text-white" : "text-gray-700"}`} 
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
                  className={`block text-sm font-medium ${darkTheme ? "text-white" : "text-gray-700"}`}
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
                  className={`block text-sm font-medium ${darkTheme ? "text-white" : "text-gray-700"}`}
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
                className="w-full bg-[#92A94E] text-white p-2 rounded-md hover:bg-[#92A94E] transition"
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
