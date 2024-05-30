"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
const Header = ({ onSearch, onThemeChange, darkTheme }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log("pathname", pathname);
    if (darkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [pathname, darkTheme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log("searched value", e.target.value);
    onSearch(e.target.value); // Pass the search query to the parent component
  };
  return (
    <motion.div
      className={`w-full ${
        darkTheme ? "bg-gray-800" : "bg-red-100"
      }  h-fit flex justify-between px-12 items-center py-3`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className={`font-extrabold ${
          darkTheme ? "text-white" : "text-[#FF7C7C]"
        }  ${isMobile ? "text-md" : "text-2xl"}`}
        whileHover={{ scale: 1.1, color: darkTheme ? "#FFD700" : "#FF7C7C" }}
      >
        Everyday Blogs
      </motion.h1>
      {pathname === "/" && (
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={`px-4 py-2 border rounded-md ${
            darkTheme
              ? "bg-gray-700 text-white border-gray-600"
              : "bg-white text-black border-gray-300"
          } ${isMobile ? "w-[30%] h-1vh" : "w-[25%] h-5vh"} `}
        />
      )}
      <div className="relative">
        {isMobile ? (
          <div>
            <button onClick={toggleMenu} className="focus:outline-none">
              <GiHamburgerMenu
                className={`h-6 w-6  ${
                  darkTheme ? "text-white" : "text-black"
                }`}
              />
            </button>
            {isMenuOpen && (
              <ul
                className={`absolute right-0 mt-2 w-32 p-2  ${
                  darkTheme ? "bg-gray-700 text-white" : "bg-white text-black"
                } border  flex flex-col items-center gap-2 shadow-lg`}
              >
                <li
                  className={`text-md font-semibold p-1 ${
                    pathname !== "/works" &&
                    pathname !== "/contact" &&
                    (darkTheme ? "text-gray-400" : "text-[#FF7C7C]")
                  } hover:text-black hover:border-[#FF7C7C]`}
                >
                  <Link href="/" className="active:text-[#FF7C7C]">
                    {" "}
                    Blog
                  </Link>
                </li>
                <li
                  className={`text-md font-semibold p-1 ${
                    pathname === "/works" &&
                    (darkTheme ? "text-gray-400" : "text-[#FF7C7C]")
                  } hover:text-black hover:border-[#FF7C7C]`}
                >
                  <Link href="/works">Works</Link>
                </li>
                <li
                  className={`text-md font-semibold p-1 ${
                    pathname === "/contact" &&
                    (darkTheme ? "text-gray-400" : "text-[#FF7C7C]")
                  } hover:text-black hover:border-[#FF7C7C] `}
                >
                  <Link href="/contact">Contact</Link>
                </li>
                <Switch checked={darkTheme} onChange={onThemeChange} className="" />
              </ul>
            )}
          </div>
        ) : (
          <ul className="flex gap-5 items-center">
            <li
              className={`text-md font-semibold border p-1 ${
                pathname === "/" &&
                (darkTheme ? "text-gray-400" : "text-[#FF7C7C]")
              } hover:text-black hover:border-[#FF7C7C] rounded-md`}
            >
              <Link href="/" className="active:text-[#FF7C7C]">
                {" "}
                Blog
              </Link>
            </li>
            <li
              className={`text-md font-semibold border p-1 rounded-md ${
                pathname === "/works" &&
                (darkTheme ? "text-gray-400" : "text-[#FF7C7C]")
              } hover:text-black hover:border-[#FF7C7C]`}
            >
              <Link href="/works">Works</Link>
            </li>
            <li
              className={`text-md font-semibold border p-1 rounded-md ${
                pathname === "/contact" &&
                (darkTheme ? "text-gray-400" : "text-[#FF7C7C]")
              } hover:text-black hover:border-[#FF7C7C]`}
            >
              <Link href="/contact">Contact</Link>
            </li>
            <Switch checked={darkTheme} onChange={onThemeChange} className="" />
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
