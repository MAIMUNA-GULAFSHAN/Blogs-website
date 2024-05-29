import React from "react";
import {
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full h-fit p-2 bg-red-100 my-2 mb-0 flex flex-col justify-center items-center gap-3 fixed bottom-0 mt-5">
      <div className="flex gap-10">
        <div className="flex items-center ">
        <a
            href="mailto:abdullahahil7861@gmail.com"
            className="text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaEnvelope className="text-3xl text-[#FF7C7C] " />
          </a>
        </div>
        
        <div className="flex items-center ">
          <a
            href="https://www.linkedin.com/in/md-abdullah-29a067260/"
            className="text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-[#FF7C7C] " />
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/Md-Abdullah1"
            className="text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl text-[#FF7C7C] " />
          </a>
        </div>
      </div>
      <span className="text-md  text-[#FF7C7C]  ">
      &copy; 2024 Everyday Blogs . All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
