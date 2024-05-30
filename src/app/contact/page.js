'use client'
import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
const Page = () => {
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
    <div className={` ${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'} flex flex-col h-full w-full justify-between`}>
      <Header onThemeChange={handleThemeChange} darkTheme={darkTheme}/>
      <Contact darkTheme={darkTheme}/>
      <Footer darkTheme={darkTheme}/>
    </div>
  )
}

export default Page