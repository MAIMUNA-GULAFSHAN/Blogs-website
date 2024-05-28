'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const pathname = usePathname()
    useEffect(()=>{
      
        console.log('pathname',pathname)
   
    },[pathname])
  return (
    <div>blog here</div>
  )
}

export default page