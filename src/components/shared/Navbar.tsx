"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-[#121212] p-4 w-screen fixed top-0 z-50'>
      <div className='w-full flex justify-between items-center px-4'>
        <p className='text-white font-bold text-xl'>
          {" "}
          herzlia.<span className='text-indigo-500'>jane()</span>
        </p>
        {/* Desktop Links */}
        <div className='hidden md:flex space-x-4'>
          <a href='/' className='text-indigo-400 font-bold hover:text-white'>
            Home
          </a>
          <a href='#projects' className='text-indigo-400 font-bold hover:text-white'>
            Projects
          </a>
          <a href='/contact' className='text-indigo-400 font-bold hover:text-white'>
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className='md:hidden'>
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className='h-6 w-6 stroke-white' />
            ) : (
              <Bars4Icon className='h-6 w-6 stroke-white' />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden w-full bg-[#121212]'>
          <a
            href='/'
            className='block px-4 py-2 text-gray-300 hover:text-white'
          >
            Home
          </a>
          <a
            href='/about'
            className='block px-4 py-2 text-gray-300 hover:text-white'
          >
            About
          </a>
          <a
            href='/services'
            className='block px-4 py-2 text-gray-300 hover:text-white'
          >
            Services
          </a>
          <a
            href='/contact'
            className='block px-4 py-2 text-gray-300 hover:text-white'
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
