// 'use client'
import React from "react";

const Projects = () => {
  const projectsData = [
    {
      title: "CloudNote",
      description:
        "CloudNote is a secure and convenient online note-taking application that allows you to create, organize, and access your notes from anywhere, anytime. It offers features like rich text editing for formatting notes, cloud storage for accessibility across devices. Empower your productivity and streamline your note-taking with CloudNote!",
        technologies:['React ',' React-Router ' ,' Node ',' Express ','Mongodb'],
      githubUrl: "https://github.com/Md-Abdullah1/CloudNote",
    },
    {
      title: "NIDS using ML and DL with MERN Stack",
      description:
        "This innovative Network Intrusion Detection System (NIDS) leverages the power of Machine Learning (ML) and Deep Learning (DL) for advanced threat detection. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides real-time threat analysis by continuously monitoring network traffic for suspicious activity. NIDS utilizes trained ML and DL models to identify patterns and anomalies indicative of attacks. Additionally, it allows for customizable alerts to receive real-time notifications of potential threats and offers optional scalability to handle large volumes of network traffic. Enhance network security and proactively mitigate attacks with this robust NIDS solution.",
        technologies:['Machine Learning ', ' Deep learning ', ' Mongodb ', ' Node ' , ' Express ' , ' Ejs ',' Flask '],
      githubUrl: "https://github.com/Md-Abdullah1/Network-Intrusion-Detection-System",
    },
    {
      title: "HRMS: Employee Management System",
      description:
        "This comprehensive HR Management System (HRMS) streamlines employee management processes. It facilitates efficient new employee recruitment and onboarding, stores and manages employee information (contact details, payroll, performance reviews),  integrates with time clocks or attendance management systems (optional), and streamlines payroll calculations and generates reports (optional). Optimize your HR processes, improve employee experience, and gain valuable insights with this user-friendly HRMS.",
        technologies:[' Nextjs ',' Redux Toolkit', ' axios ', ' TTailwind '],
      githubUrl: "https://github.com/Md-Abdullah1/appkube-hrms-ui",
    },
    {
      title: "POS: Point-of-Sale System for Tablets",
      description:
        "This mobile POS (Point-of-Sale) system designed for tablets is ideal for managing sales in restaurants, cafes, and retail stores. It offers user-friendly features like adding, editing, and managing product inventory with ease, efficient and accurate sales processing through barcode scanning, support for various payment methods (cash, credit cards, mobile wallets), detailed sales data and customer purchase reports, and optional offline mode to maintain functionality even without an internet connection. Boost your sales efficiency and enhance customer experience with this versatile POS system.It is Under Development and is developed using React-Native",
        technologies:[ ' React-Native ',' Redux toolkit ', ' axios ', ' javascript '],
      githubUrl: "https://github.com/Md-Abdullah1/promodeagro-pos-app",
    },
    {
        "title": "Todo List ",
        "description": "A simple and user-friendly todo list application built with React and Tailwind CSS. Features include adding, editing, and deleting tasks. Local storage ensures tasks persist even after browser refresh. The responsive design adapts seamlessly across various screen sizes.",
        "githubUrl": "https://github.com/Md-Abdullah1/Todo-List",
        "technologies": [" React ", " Tailwind CSS ", " Local Storage"]
      }
  ];
  return (
    <div className="w-[80%]  h-fit p-2 mb-24 flex flex-col gap-5">
      <h2 className="text-xl text-[#FF7C7C] font-bold "> Works and Projects </h2>
      <div className="flex flex-col gap-5 items-center">
      {projectsData &&
        projectsData.map((val) => {
          return (
            <div key={val.githubUrl} className="flex flex-col gap-3 justify-start shadow-md p-2">
              <h2 className="text-lg text-[#FF7C7C] font-semibold">{val.title}</h2>
              <p>{val.description}</p>
               <p className="text-base text-[#FF7C7C] ">{val.technologies}</p>
              <a
                href={val.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {" "}
                View on Github
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
