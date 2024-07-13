import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const[isScrolled,setScrolled] = useState(false);


useEffect(()=>{
  const handleScroll =()=>{
   setScrolled(window.scrollY>0);
  }
  window.addEventListener('scroll',handleScroll);
  return()=>{
    window.removeEventListener('scroll',handleScroll);
  }

},[])


  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Menu' },
    { id: 3, text: 'About Us' },
  ];

  const handleClick = () => {
    setNavigation(!navigation);
  };

  return (
    <>

      <div className={`top-0 z-10 sticky backdrop-filter backdrop-blur-lg bg-opacity-30  
      w-full flex justify-between items-center h-[80px] px-4 bg-white mx-auto ${isScrolled ? 'text-white' : 'text-black'}`}>
        {/* Logo */}
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">zolato</h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="px-4 cursor-pointer hover:underline underline-offset-4 decoration-[#00df9a] decoration-2  
              m-2 hover:text-black hover:uppercase font-bold"
            >
              {item.text}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!navigation ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !navigation
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-blue-500 flex flex-col justify-center items-center'
          }
        >
          {navItems.map((item) => (
            <li key={item.id} className="px-4 cursor-pointer py-6 text-4xl">
              {item.text}
            </li>
          ))}
        </ul>
      </div>

    </>
  );
};

export default Navbar;
