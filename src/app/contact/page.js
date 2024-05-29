import Header from '@/components/Header'
import React from 'react'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div className='flex flex-col h-full w-full justify-between'>
      <Header/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page