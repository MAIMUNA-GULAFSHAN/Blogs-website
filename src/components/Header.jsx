'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log('pathname', pathname);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='w-full bg-red-100 h-fit flex justify-between px-8 items-center py-3'>
      <h1 className={`font-extrabold text-[#FF7C7C] ${isMobile ? 'text-md':'text-2xl' }`}>Everyday Blogs</h1>
      <div className='relative'>
        {isMobile ? (
          <div>
            <button onClick={toggleMenu} className='focus:outline-none'>
              <GiHamburgerMenu />
            </button>
            {isMenuOpen && (
              <ul className='absolute right-0 mt-2 w-32 bg-white border  flex flex-col items-center  shadow-lg'>
                <li className={`text-md font-semibold p-1 ${pathname === '/' && 'text-[#FF7C7C]'} hover:text-black hover:border-[#FF7C7C] `}><Link href='/' className='active:text-[#FF7C7C]'> Blog</Link></li>
                <li className={`text-md font-semibold  p-1  ${pathname === '/works' && 'text-[#FF7C7C]'} hover:text-black hover:border-[#FF7C7C] `}><Link href='/works'>Works</Link></li>
                <li className={`text-md font-semibold  p-1  ${pathname === '/contact' && 'text-[#FF7C7C]'} hover:text-black hover:border-[#FF7C7C] `}><Link href='/contact'>Contact</Link></li>
              </ul>
            )}
          </div>
        ) : (
          <ul className='flex gap-5'>
            <li className={`text-md font-semibold border p-1 ${pathname === '/' && 'text-[#FF7C7C]'} hover:text-black hover:border-[#FF7C7C] rounded-md`}><Link href='/' className='active:text-[#FF7C7C]'> Blog</Link></li>
            <li className={`text-md font-semibold border p-1 rounded-md ${pathname === '/works' && 'text-[#FF7C7C]'} hover:text-black hover:border-[#FF7C7C] rounded-md`}><Link href='/works'>Works</Link></li>
            <li className={`text-md font-semibold border p-1 rounded-md ${pathname === '/contact' && 'text-[#FF7C7C]'} hover:text-black hover:border-[#FF7C7C] rounded-md`}><Link href='/contact'>Contact</Link></li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Header