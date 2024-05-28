'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const pathname = usePathname()
   
    useEffect(()=>{
      
        console.log('pathname',pathname)
   
    },[pathname])
  return (
    <div className='w-full bg-red-100 h-fit flex justify-between px-8 items-center py-3'>
        <h1 className='text-2xl font-extrabold text-[#FF7C7C]'>Everyday Blogs</h1>
        <ul className='flex gap-5'>
            <li className={`text-md font-semibold border p-1  ${pathname === '/' && 'text-[#FF7C7C]'} hover:text-black hover:border-[#FF7C7C] rounded-md`}><Link href='/' className='active:text-[#FF7C7C]'> Blog</Link></li>
            <li className={`text-md font-semibold border p-1 rounded-md  ${pathname === '/works' && 'text-[#FF7C7C]'} hover:text-black hover:border-[#FF7C7C] rounded-md`}><Link href='/works'>Works</Link></li>
            <li className={`text-md font-semibold border p-1 rounded-md ${pathname === '/contact' && 'text-[#FF7C7C]'} hover:text-black hover:border-[#FF7C7C] rounded-md`}><Link href='/contact'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Header