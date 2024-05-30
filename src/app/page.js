"use client";
import Header from "@/components/Header";
import { addBlogs } from "@/redux/slices/BlogsReducer";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Shimmer1 from "@/components/Shimmer1";
import Lightbox from "@/components/Lightbox";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const mediaquery = useMediaQuery({ maxWidth: 767 });
  const [isMobile, setIsMobile] = useState(false);
  // const reduxBlogs = useSelector((state) => state.Blogs.blogs);
  const [blogs,setBlogs] = useState([])
  const apiKey = "694c5d19d6b2445dbd12fd7995f26b99";
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {

    fetchData();
    const mediaQuery2 = mediaquery
    setIsMobile(mediaQuery2);

  }, []);

  const fetchData = async () => {
    try {
      // const response = await fetch(
      //   `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`
      // );
      const response = await fetch('./blogs.json')
      const data = await response.json();
      console.log('response fo blogs',data)
      // const filteredData = await data?.articles.filter((val)=>{
      //   if(val.urlToImage){
      //     return val;
      //   }
      // })
      dispatch(addBlogs(data));
      setBlogs(data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
console.log('blogs',blogs)

useEffect(() => {
  if (searchQuery) {
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(filtered);
  } else {
    setFilteredBlogs(blogs);
  }
}, [searchQuery, blogs]);
  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleThemeChange = (checked) => {
    setDarkTheme(checked);
  };
  return (
    <motion.main className={ `h-full w-full m-0 flex flex-col items-center gap-4 relative ${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}  initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <header className="fixed top-0 left-0 w-full bg-white z-10 shadow-md  mx-0">
        <Header onSearch={handleSearch} onThemeChange={handleThemeChange} darkTheme={darkTheme} />
      </header>
      <div className="w-[80%] h-fit p-1 mt-14 mb-24 ">
        <div className="w-full h-fit flex flex-col gap-4 ">
          {loading ? (Array.from({ length: 5 }).map((_, index) => <Shimmer1 key={index} />)) : (filteredBlogs && (
            filteredBlogs.map((blog,i) => (
              <motion.div
                key={blog.url}
                className={`w-full p-1 flex shadow-md justify-evenly gap-4 ${
                  isMobile ? "flex-col" : "flex-row"
                } ${darkTheme ? 'bg-gray-700' : 'bg-white'}`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-64 h-64 p-1 relative cursor-pointer hover:opacity-75"
                  onClick={() => openLightbox(blog.urlToImage)}
                  
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={blog.urlToImage}
                    alt={blog.title}
                    width={480}
                    height={480}
                    className="m-0 h-full w-full object-cover"
                    unoptimized
                  />
                </motion.div>
                  <div className="mx-1 p-1 w-full flex flex-col gap-4 justify-around">
                <Link href={`/${i}`}  className="flex flex-col w-full">
                    <motion.h3
                      className={`${
                        isMobile ? "font-bold text-sm" : "font-bold text-xl"
                      }`}
                      whileHover={{ color: darkTheme ? "#FFD700" : "#0000FF" }}
                    >
                      {blog.title}
                    </motion.h3>
                </Link>
                    <div className="flex gap-14">
                      <motion.p
                        className={`font-semibold ${
                          isMobile ? "text-xs" : "text-md"
                        }`}
                        whileHover={{ color: darkTheme ? "#FFD700" : "#0000FF" }}
                      >
                        {blog.publishedAt.split("T")[0]}
                      </motion.p>
                      <motion.p
                        className={`font-bold ${
                          isMobile ? "text-sm" : "text-lg"
                        }`}
                        whileHover={{ color: darkTheme ? "#FFD700" : "#0000FF" }}
                      >
                        {blog.source.name}
                      </motion.p>
                    </div>
                    <motion.p className={`${isMobile ? "text-sm" : "text-xl"}`}
                    whileHover={{ color: darkTheme ? "#FFD700" : "#0000FF" }}>
                      {blog.description}
                    </motion.p>
                  </div>
              </motion.div>
            ))
          ) )}
        </div>
      </div>
      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={closeLightbox} />
      )}
    <Footer darkTheme={darkTheme}/>
  
    </motion.main>
  );
}
