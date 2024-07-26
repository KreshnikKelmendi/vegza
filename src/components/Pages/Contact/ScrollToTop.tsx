import React, { useState, useEffect, useRef } from 'react';
import { gsap, Power3 } from 'gsap';
import { NavLink } from 'react-router-dom';

const ScrollToTopArrow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const showMenu = () => {
    if (menuRef.current) {
      gsap.to(menuRef.current, { opacity: 1, display: 'block', duration: 0.3 });

      // Animate each menu item with stagger
      gsap.fromTo(
        menuRef.current.querySelectorAll('li'),
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: Power3.easeOut,
          delay: 0.3,
        }
      );
    }
  };

  const hideMenu = () => {
    if (menuRef.current) {
      gsap.to(menuRef.current, { opacity: 0, display: 'none', duration: 0.3 });
    }
  };

  const closeMenuAndScrollToTop = () => {
    hideMenu();
    setIsHovered(false);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  useEffect(() => {
    if (isHovered) {
      showMenu();
    } else {
      hideMenu();
    }
  }, [isHovered]);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`rotate-0 lg:rotate-0 px-2 py-3 cursor-pointer text-base bg-[#D9D9D9] hover:bg-[#0E0E0E] hover:text-white text-black shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ border: 'none', background: '#D9D9D9' }}
      >
        <div className="hamburger-menu hover:scale-110 hover:duration-700 ease-linear">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div
        ref={menuRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-[70px] right-4 bg-white shadow-lg p-10 border border-gray-300 text-xl"
        style={{ opacity: 0, display: 'none' }}
      >
        <ul className='font-custom'>
          <li><NavLink to="/" onClick={closeMenuAndScrollToTop} className="block p-2 hover:scale-110 hover:font-extrabold hover:duration-500 ease">HOME</NavLink></li>
          <li><NavLink to="/about-us" onClick={closeMenuAndScrollToTop} className="block p-2 hover:scale-110 hover:font-extrabold hover:duration-500 ease">ABOUT US</NavLink></li>
          <li><NavLink to="/projects" onClick={closeMenuAndScrollToTop} className="block p-2 hover:scale-110 hover:font-extrabold hover:duration-500 ease">PROJECTS</NavLink></li>
          <li><NavLink to="/services" onClick={closeMenuAndScrollToTop} className="block p-2 hover:scale-110 hover:font-extrabold hover:duration-500 ease">SERVICES</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenuAndScrollToTop} className="block p-2 hover:scale-110 hover:font-extrabold hover:duration-500 ease">CONTACT</NavLink></li>
          <li><NavLink to="/vegza-viz" onClick={closeMenuAndScrollToTop} className="block p-2 hover:scale-110 hover:font-extrabold hover:duration-500 ease">VEGZA VIZ</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default ScrollToTopArrow;
