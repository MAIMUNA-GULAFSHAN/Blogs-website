import React from "react";
import {
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Footer = ({ darkTheme }) => {
  return (
    <div className={`w-full h-fit p-2  ${darkTheme ? 'bg-gray-800 text-white' : 'bg-red-100 text-black'} my-2 mb-0 flex flex-col justify-center items-center gap-3 fixed bottom-0 mt-5`}>
      <div className="flex gap-10">
        <div className="flex items-center ">
        <a
            href="mailto:maimunagulafshan1@gmail.com"
            className="${darkTheme ? 'text-white' : 'text-[#FF7C7C]'}"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaEnvelope className="text-xl md:text-3xl text-[#FF7C7C] " />
          </a>
        </div>
        
        <div className="flex items-center ">
          <a
            href="https://www.linkedin.com/in/maimuna-gulafshan-31206a260/"
            // className={`${darkTheme ? 'text-white' : 'text-[#FF7C7C]'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl md:text-3xl text-[#FF7C7C] " />
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/MAIMUNA-GULAFSHAN"
            className={`${darkTheme ? 'text-white' : 'text-[#FF7C7C]'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl md:text-3xl text-[#FF7C7C] " />
          </a>
        </div>
      </div>
      <span className={`text-base md:text-lg ${darkTheme ? 'text-white' : 'text-[#FF7C7C]'} `}>
      &copy; 2024 Everyday Blogs . All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
