"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lightbox from "@/components/Lightbox";
import Shimmer2 from "@/components/Shimmer2";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = ({ params }) => {
  const [storedBlog, setStoredBlog] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const blogs = useSelector((state) => state.Blogs.blogs);
  const reduxBlog = blogs.find((val, i) => {
    console.log(`bloging pgae ${i} : ${params.blog}`);
    if (i === parseInt(params.blog)) {
      return val;
    }
  });
  useEffect(() => {
    if (reduxBlog) {
      localStorage.setItem("blog", JSON.stringify(reduxBlog));
      setLoading(false);
    }
    //   else {
    //     localStorage.removeItem("blog");
    //   }

    const lsBlogData = localStorage.getItem("blog");
    if (lsBlogData) {
      const parseBlogData = JSON.parse(lsBlogData);
      setStoredBlog(parseBlogData);
      setLoading(false);
    }
  }, [reduxBlog]);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkTheme]);
  // const pathname = usePathname()
  // useEffect(()=>{

  //     console.log('pathname',pathname)

  // },[pathname])
  const blog = reduxBlog ? reduxBlog : storedBlog;
  console.log("blog value ", blog);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };
  const handleThemeChange = (checked) => {
    setDarkTheme(checked);
  };
  return (
    <>
      <Header onThemeChange={handleThemeChange} darkTheme={darkTheme} />
      {loading ? (
        <Shimmer2 />
      ) : (
        <div className="max-w-4xl mx-auto py-12   mb-16">
          <div
            className={`${
              darkTheme ? "bg-gray-700" : "bg-white"
            } shadow-md rounded-lg p-8`}
          >
            <h1
              className={`${
                darkTheme ? "text-white" : "text-black"
              } text-3xl font-bold mb-4`}
            >
              {blog?.title}
            </h1>
            <div className={`${darkTheme ? "text-white" : 'text-black'} mb-4`}>
              <span
                className={`${
                  darkTheme ? "text-white" : "text-black"
                } font-semibold`}
              >
                Author:
              </span>{" "}
              {blog?.author}
            </div>

            <div className={`${darkTheme ? "text-white" : 'text-black'} mb-4`}>
              <span
                className={`${
                  darkTheme ? "text-white" : "text-black"
                } font-semibold`}
              >
                Published At:
              </span>
              {blog?.date ? blog?.date : ""}
            </div>
            <div
              className="mb-8 relative cursor-pointer hover:opacity-75"
              onClick={() => openLightbox(blog.thumbnail)}
            >
              <Image
                src={blog?.thumbnail}
                alt={blog?.title}
                width={100}
                height={100}
                unoptimized
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className={`${darkTheme ? "text-white" : "text-gray-700"}`}>
                {blog?.description}
              </p>
            </div>

            {/* <a
              href={blog?.}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More
            </a> */}
          </div>
        </div>
      )}
      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={closeLightbox} />
      )}
      {/* <footer class="w-full h-fit p-2 bg-red-100 my-2 mb-0 flex flex-col justify-center items-center gap-3"> */}
      <Footer darkTheme={darkTheme} />
      {/* </footer> */}
    </>
  );
};

export default Page;
