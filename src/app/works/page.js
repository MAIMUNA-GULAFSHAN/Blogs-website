import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import React from 'react'

const Works = () => {
  return (
    <div className='flex flex-col items-center gap-5 '>
      <Header/>
     <Projects/>
      <Footer/>
    </div>
  )
}

export default Works