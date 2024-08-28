// 'use client'
import React from "react";
import { motion } from "framer-motion";
const Projects = ({darkTheme}) => {
  const projectsData = [
    {
      title: "ECOMMERCE APPLICATION ",
      description:
        "In the e-commerce project, I’ve excelled in API integration, My contributions include implementing ’Add to Cart’ and ’Save for Later’ and many features, enhancing user experience and boosting conversions. Additionally, I’ve refined the UI for intuitive navigation and played a key role in optimizing inventory insights into various technologies used and their advantages in development, enhancing my understanding of diverse tech stack",
      githubUrl: "https://admin.promodeagro.com/app/inventory",
    },
    {
      title: "WAREHOUSE MANAGEMENT (INVENTORY) APPLICATION",
      description:
        "This innovative Network Intrusion Detection System (NIDS) leverages the power of Machine Learning (ML) and Deep Learning (DL) for advanced threat detection. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides real-time threat analysis by continuously monitoring network traffic for suspicious activity. NIDS utilizes trained ML and DL models to identify patterns and anomalies indicative of attacks. Additionally, it allows for customizable alerts to receive real-time notifications of potential threats and offers optional scalability to handle large volumes of network traffic. Enhance network security and proactively mitigate attacks with this robust NIDS solution.",
      githubUrl: "https://inventory.promodeagro.com/app/inventory",
    },
    {
      title: "HRMS: Employee Management System",
      description:
        "This comprehensive HR Management System (HRMS) streamlines employee management processes. It facilitates efficient new employee recruitment and onboarding, stores and manages employee information (contact details, payroll, performance reviews),  integrates with time clocks or attendance management systems (optional), and streamlines payroll calculations and generates reports (optional). Optimize your HR processes, improve employee experience, and gain valuable insights with this user-friendly HRMS.",
      githubUrl: "https://hrms.synectiks.net/",
    },
  ];
  return (
    <motion.div className="w-[80%]  h-fit p-2 mb-24 flex flex-col gap-5">
      <h2 className="text-xl text-[#FF7C7C] font-bold "> Works and Projects </h2>
      <div className="flex flex-col gap-5 items-center">
      {projectsData &&
        projectsData.map((val) => {
          return (
            <motion.div key={val.githubUrl} className="flex flex-col gap-3 justify-start shadow-md p-2"
            whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}>
              <motion.h2 className="text-lg text-[#FF7C7C] font-semibold" whileHover={{ color: darkTheme ? "#FFD700" : "#0000FF" }}>{val.title}</motion.h2>
              <motion.p whileHover={{ color: darkTheme ? "#FFD700" : "#0000FF" }}>{val.description}</motion.p>
               <p className="text-base text-[#FF7C7C] ">{val.technologies}</p>
              <a
                href={val.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {" "}
                Deployed Link
              </a>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
