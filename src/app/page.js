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


export default function Home() {
  const mediaquery = useMediaQuery({ maxWidth: 767 });
  const [isMobile, setIsMobile] = useState(false);
  const blogs = useSelector((state) => state.Blogs.blogs);
  const apiKey = "694c5d19d6b2445dbd12fd7995f26b99";
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {

    fetchData();
    const mediaQuery2 = mediaquery
    setIsMobile(mediaQuery2);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=Apple&from=2024-05-27&sortBy=popularity&apiKey=${apiKey}`
      );
      const data = await response.json();
      dispatch(addBlogs(data.articles));
      setLoading(false)
      console.log('response fo blogs',data.articles)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
console.log('blogs',blogs)
  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <main className={ `h-full w-full m-0 flex flex-col items-center gap-4 relative`}>
      <header className="fixed top-0 left-0 w-full bg-white z-10 shadow-md mb-5">
        <Header />
      </header>
      <div className="w-[80%] h-fit p-1 mt-14">
        <div className="w-full h-fit flex flex-col gap-4 ">
          {loading ? (Array.from({ length: 5 }).map((_, index) => <Shimmer1 key={index} />)) : (blogs ? (
            blogs.map((blog,i) => (
              <div
                key={blog.url}
                className={`w-full p-1 flex shadow-md justify-evenly gap-4 ${
                  isMobile ? "flex-col" : "flex-row"
                }`}
              >
                <div
                  className="w-64 h-64 p-1 relative cursor-pointer hover:opacity-75"
                  onClick={() => openLightbox(blog.urlToImage)}
                >
                  <Image
                    src={blog.urlToImage}
                    alt={blog.title}
                    width={480}
                    height={480}
                    className="m-0 h-full w-full object-cover"
                    unoptimized
                  />
                </div>
                  <div className="mx-1 p-1 w-full flex flex-col gap-4 justify-around">
                <Link href={`/${i}`}  className="flex flex-col w-full">
                    <h3
                      className={`${
                        isMobile ? "font-bold text-sm" : "font-bold text-xl"
                      }`}
                    >
                      {blog.title}
                    </h3>
                </Link>
                    <div className="flex gap-14">
                      <p
                        className={`font-semibold ${
                          isMobile ? "text-xs" : "text-md"
                        }`}
                      >
                        {blog.publishedAt.split("T")[0]}
                      </p>
                      <p
                        className={`font-bold ${
                          isMobile ? "text-sm" : "text-lg"
                        }`}
                      >
                        {blog.source.name}
                      </p>
                    </div>
                    <p className={`${isMobile ? "text-sm" : "text-xl"}`}>
                      {blog.description}
                    </p>
                  </div>
              </div>
            ))
          ) : (
            <h3>loading blogs</h3>
          ))}
        </div>
      </div>
      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={closeLightbox} />
      )}
    <Footer/>
  
    </main>
  );
}
