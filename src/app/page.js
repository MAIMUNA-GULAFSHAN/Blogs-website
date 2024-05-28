"use client";
import Header from "@/components/Header";
import { addBlogs } from "@/redux/slices/BlogsReducer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { store } from "@/redux/store";
// import Image from "next/image";
// import { Provider } from "react-redux";

export default function Home() {
  const blogs = useSelector((state) => state.Blogs.blogs);
  const apiKey = "694c5d19d6b2445dbd12fd7995f26b99";
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=Apple&from=2024-05-27&sortBy=popularity&apiKey=${apiKey}`
      );
      console.log("response", response);
      const data = await response.json();
      console.log("data of response", data);
      // setArticles(data.articles)
      dispatch(addBlogs(data.articles));

      // setArticles(data.articles || []); // Handle empty response (optional)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("blogss", blogs);
  return (
    <main className="h-screen w-screen m-0 flex flex-col items-center gap-2 relative">
      <header className="fixed top-0 left-0 w-full bg-white z-10 shadow-md mb-5">

      <Header />
      </header>
      <div className={`w-[90%] h-fit p-1 mt-14`}>
        <div className="w-full  h-fit flex flex-col gap-4 ">
          {blogs ? (
            blogs.map((blog) => (
              <Link href={`/${blog.title}`}>
              <div
                key={blog.url}
                className="w-full p-1  h-fit  flex shadow-md"
              >
                <div className="w-64 h-64 p-1  relative">
                  <Image
                    src={blog.urlToImage}
                    alt={blog.title}
                    // Use fixed layout for consistent size
                    width={480} // Set width equal to container width
                    height={480} // Set height equal to container height
                    className="m-0 h-full w-full"
                    // unoptimized
                  />
                </div>

                <div className="mx-1 p-1  w-full flex flex-col justify-evenly ">
                  <h3 className="font-bold text-xl ">{blog.title}</h3>
                  <div className="flex gap-14">
                    <p className="text-md font-semibold">
                      {blog.publishedAt.split("T")[0]}
                    </p>
                    <p className="font-bold">{blog.source.name}</p>

                  </div>
                  <p>{blog.description}</p>
                </div>
              </div>
              </Link>
            ))
          ) : (
            <h3>loading blogs</h3>
          )}
        </div>
      </div>
    </main>
  );
}

// export default  ReduxHome = ()=>(
// <Provider store={store}>
//   <Home/>
// </Provider>)
