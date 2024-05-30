'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import React, { useEffect, useState } from 'react'

const Works = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
  
    if (darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkTheme]);

  const handleThemeChange = (checked) => {
    setDarkTheme(checked);
  };
  return (
    <div className={`flex flex-col items-center gap-5 ${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <Header onThemeChange={handleThemeChange} darkTheme={darkTheme}/>
     <Projects darkTheme={darkTheme}/>
      <Footer darkTheme={darkTheme}/>
    </div>
  )
}

export default Works