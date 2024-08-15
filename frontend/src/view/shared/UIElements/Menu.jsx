import React, { useState, useEffect, useRef } from 'react';
import { MenuTitles } from '../../../datas/MenuDatas';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [menuRef]);
  return (
    <div className="fixed bg-white md:px-6 z-[10] w-[100%]">
      <div className="flex justify-between items-center py-2 px-6 md:px-0">
        <div className=" font-extrabold md:text-xl text-lg leading-5 text-center">
          {/* <img src="logo.png" alt="Logo" className="h-8" /> */}
          CNPS
        </div>
        <div className="hidden md:flex items-center space-x-4">
        {
            MenuTitles.map((data, index)=>(
              <ScrollLink
              to={data.link}
              key={index}
              className='text-black hover:text-[#EEB708] text-base px-3'
              smooth={true}
              duration={500}
          >
              {data.header}
          </ScrollLink>

            ))
        }
        <Link to='/portal' className='border border-sky-300 py-1 px-4 rounded-full bg-sky-100'>Teacher's Portal</Link>

        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <div ref={menuRef} className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}>
        <div className="rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
        {
            MenuTitles.map((data, index)=>(
              <ScrollLink 
              to={data.link} 
              key={index} 
              className='block py-2 px-4 text-black hover:bg-gray-100'>
                  {data.header}
          </ScrollLink>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Menu