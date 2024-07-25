import gsap from 'gsap';
import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import vegzaProva from "../assets/vegzaProva.png"
import LogoHover from './LogoHover';

const hamburgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFFFFF"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFFFFF"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const LogoLink: React.FC<{ onHover: () => void; onLeave: () => void }> = ({ onHover, onLeave }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link className='flex justify-center items-center font-custom '
      to="/"
      onMouseEnter={() => {
        setIsHovering(true);
        onHover();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        onLeave();
      }}
      onClick={() => window.scrollTo({ top: 0, left: 0 })}
    >
      <svg
        className='w-[30px] h-[35px] lg:w-[57px] lg:h-[35px]'
        viewBox="0 0 58 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30.4249 51.0913C26.1737 51.0913 22.4597 48.1296 21.4007 43.889L19.8579 37.6909C19.0579 36.5337 18.0142 35.6197 15.1382 35.451C11.1041 35.4275 7.58811 32.6069 6.57865 28.5821L0.11044 2.72668C-0.0419322 2.12257 0.083775 1.48707 0.457087 0.988867C0.8304 0.490667 1.39799 0.2043 2.00748 0.2043H8.94423C8.97851 0.2043 9.01279 0.2043 9.04327 0.2043C12.026 0.2043 14.8029 2.43639 15.6372 5.54328L23.1987 36.1532C23.2634 36.2591 23.3282 36.3611 23.3891 36.4592C24.1243 37.6517 24.3186 37.8792 25.0271 37.9067C27.6441 37.8988 30.0935 36.6985 31.7467 34.6076C33.8152 31.991 35.3123 29.0215 36.2036 25.7773L41.8338 5.26084C42.2985 2.78945 44.5498 0.2043 47.883 0.2043H55.2845C55.8978 0.2043 56.4806 0.506358 56.8501 1.00848C57.2196 1.5106 57.3377 2.17356 57.1701 2.77768L49.361 30.7514C48.4468 34.0348 46.424 36.8867 43.6699 38.7893C42.4509 39.6327 41.4376 40.7076 40.6567 41.9904L38.6149 45.3562C37.2741 48.5454 34.5047 50.7187 31.3506 51.0443C31.0496 51.0756 30.7373 51.0913 30.4211 51.0913H30.4249ZM24.5472 41.5942L24.89 42.9632C25.5414 45.5641 27.8155 47.3803 30.4249 47.3803C30.6154 47.3803 30.8058 47.3725 30.9925 47.3529C32.8438 47.1607 34.5542 45.7641 35.3504 43.787L35.4875 43.5163L37.6055 40.0289C38.6568 38.299 40.0206 36.8475 41.6662 35.7099C43.7156 34.2938 45.2203 32.1715 45.9021 29.7315L53.1055 3.9153H47.8868C46.405 3.9153 45.5098 5.15492 45.3688 5.99441L45.3269 6.18663L39.6739 26.7854C38.6492 30.52 36.9236 33.9407 34.5466 36.9495C32.2001 39.9152 28.726 41.6177 25.0081 41.6177H24.9357C24.8024 41.6138 24.6767 41.602 24.551 41.5902L24.5472 41.5942ZM4.12926 3.9153L10.0718 27.6524C10.6737 30.0571 12.7802 31.74 15.1915 31.74H15.2905C16.5667 31.8145 17.6333 32.0185 18.5284 32.3127L12.1555 6.49653C11.7669 5.05685 10.3918 3.9153 9.01279 3.9153C8.99756 3.9153 8.98613 3.9153 8.97089 3.9153H4.12926Z" fill="white"/>
        <path
          d="M3.59977 1.79697V1.80482M30.4249 51.0913C26.1737 51.0913 22.4597 48.1296 21.4007 43.889L19.8579 37.6909C19.0579 36.5337 18.0142 35.6197 15.1382 35.451C11.1041 35.4275 7.58811 32.6069 6.57865 28.5821L0.11044 2.72668C-0.0419321 2.12257 0.083775 1.48707 0.457087 0.988867C0.8304 0.490667 1.39799 0.2043 2.00748 0.2043H8.94423C8.97851 0.2043 9.01279 0.2043 9.04327 0.2043C12.026 0.2043 14.8029 2.43639 15.6372 5.54328L23.1987 36.1532C23.2634 36.2591 23.3282 36.3611 23.3891 36.4592C24.1243 37.6517 24.3186 37.8792 25.0271 37.9067C27.6441 37.8988 30.0935 36.6985 31.7467 34.6076C33.8152 31.991 35.3123 29.0215 36.2036 25.7773L41.8338 5.26084C42.2985 2.78945 44.5498 0.2043 47.883 0.2043H55.2845C55.8978 0.2043 56.4806 0.506358 56.8501 1.00848C57.2196 1.5106 57.3377 2.17356 57.1701 2.77768L49.361 30.7514C48.4468 34.0348 46.424 36.8867 43.6699 38.7893C42.4509 39.6327 41.4376 40.7076 40.6567 41.9904L38.6149 45.3562C37.2741 48.5454 34.5047 50.7187 31.3506 51.0443C31.0496 51.0756 30.7373 51.0913 30.4211 51.0913H30.4249ZM24.5472 41.5942L24.89 42.9632C25.5414 45.5641 27.8155 47.3803 30.4249 47.3803C30.6154 47.3803 30.8058 47.3725 30.9925 47.3529C32.8438 47.1607 34.5542 45.7641 35.3504 43.787L35.4875 43.5163L37.6055 40.0289C38.6568 38.299 40.0206 36.8475 41.6662 35.7099C43.7156 34.2938 45.2203 32.1715 45.9021 29.7315L53.1055 3.9153H47.8868C46.405 3.9153 45.5098 5.15492 45.3688 5.99441L45.3269 6.18663L39.6739 26.7854C38.6492 30.52 36.9236 33.9407 34.5466 36.9495C32.2001 39.9152 28.726 41.6177 25.0081 41.6177H24.9357C24.8024 41.6138 24.6767 41.602 24.551 41.5902L24.5472 41.5942ZM4.12926 3.9153L10.0718 27.6524C10.6737 30.0571 12.7802 31.74 15.1915 31.74H15.2905C16.5667 31.8145 17.6333 32.0185 18.5284 32.3127L12.1555 6.49653C11.7669 5.05685 10.3918 3.9153 9.01279 3.9153C8.99756 3.9153 8.98613 3.9153 8.97089 3.9153H4.12926Z"
          stroke="white"
          strokeWidth="0.6"
        />
      </svg>
      {isHovering && (
        <div className="logo-tooltip absolute bottom-[-27px] lg:top-[2px] ml-[114px] lg:ml-[154px] font-custom">
          <LogoHover />
        </div>
      )}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        opacity: 1,
        height: '100vh',
        duration: 1.2,
        display: 'block',
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        height: 0,
        duration: 1,
        display: 'none',
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

     

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      gsap.to('.mobile-menu', { duration: 0.3, opacity: 1, height: 'auto', display: 'block' });
    } else {
      gsap.to('.mobile-menu', { duration: 0.3, opacity: 0, height: 0, display: 'none' });
    }
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
       className={`lg:w-[100%] 2xl:w-[97%] relative px-7 w-full lg:px-[60px] py-4 lg:py-6 flex text-[16px] font-custom z-50 ${
        location.pathname === '/vegza-viz' ? 'bg-transparent z-50' : 'bg-gradient-to-r from-[#0a0a0a34] to-[#1011110e]'
      }`}
      
        
      >
        <div className="text-white flex md:items-center flex-grow">
          <LogoLink
            onHover={() => {
              // Add your animation logic here (e.g., GSAP animation)
              gsap.to('.logo-tooltip', { opacity: 1, y: -10, duration: 0.3 });
            }}
            onLeave={() => {
              // Add your animation logic to hide the tooltip
              gsap.to('.logo-tooltip', { opacity: 0, y: 0, duration: 0.3 });
            }}
          />
        </div>

        <div className="flex lg:hidden justify-end">
          <button onClick={toggleMenu}>
            {isMenuOpen ? closeIcon : hamburgerIcon}
          </button>
        </div>

        <div
           ref={menuRef}
           className={`${location.pathname === '/vegza-viz' ? 'absolute h-screen top-full left-0 right-0 bg-[#A8FF00] z-50': 'absolute h-screen top-full left-0 right-0 bg-gradient-to-r from-[#0a0a0a] to-[#101111] z-50'}`}
           style={{
             opacity: 0,
             height: 0,
             display: 'none',
           }}
        >
          <nav className="flex flex-col justify-center items-center text-left h-screen uppercase">
            <NavLink
              to="/"
              onClick={closeMenu}
              className="text-white text-[32px] py-[18px] mt-[-105px]"
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              onClick={closeMenu}
              className="text-white text-[32px] py-[18px]"
            >
              About Us
            </NavLink>
            <NavLink
              to="/projects"
              onClick={closeMenu}
              className="text-white text-[32px] py-[18px]"
            >
              Projects
            </NavLink>
            <NavLink
              to="/services"
              onClick={closeMenu}
              className="text-white text-[32px] py-[18px]"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="text-white text-[32px] py-[18px]"
            >
              Contact
            </NavLink>
            <NavLink
              to="/vegza-viz"
              onClick={closeMenu}
              className="text-black font-bold w-fit px-8 bg-[#A8FF00] hover:text-black mt-[18px] py-[8px] text-[32px] z-50"
            >
              Vegza Viz
            </NavLink>
          </nav>
        </div>

        <div className="hidden lg:flex space-x-16 font-custom uppercase">
          <NavLink
            to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}
            className={`${location.pathname === '/vegza-viz' ? 'text-black text-[16px] font-bold flex items-center justify-center': 'text-white text-[16px] flex items-center justify-center'}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us" onClick={() => window.scrollTo({ top: 0, left: 0 })}
            className={`${location.pathname === '/vegza-viz' ? 'text-black text-[16px] font-bold flex items-center justify-center': 'text-white text-[16px] flex items-center justify-center'}`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/projects" onClick={() => window.scrollTo({ top: 0, left: 0 })}
            className={`${location.pathname === '/vegza-viz' ? 'text-black text-[16px] font-bold flex items-center justify-center': 'text-white text-[16px] flex items-center justify-center'}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/services" onClick={() => window.scrollTo({ top: 0, left: 0 })}
            className={`${location.pathname === '/vegza-viz' ? 'text-black text-[16px] font-bold flex items-center justify-center': 'text-white text-[16px] flex items-center justify-center'}`}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0 })}
            className={`${location.pathname === '/vegza-viz' ? 'text-black text-[16px] font-bold flex items-center justify-center': 'text-white text-[16px] flex items-center justify-center'}`}
          >
            Contact
          </NavLink>
          <NavLink
            to="/vegza-viz" onClick={() => window.scrollTo({ top: 0, left: 0 })}
            className={`${location.pathname === '/vegza-viz' ? 'text-black hidden bg-[#A8FF00] hover:text-black px-6 py-2 text-[16px] items-center justify-center': 'text-black font-bold bg-[#A8FF00] hover:text-black px-6 py-2 text-[16px] flex items-center justify-center'}`}

          >
            Vegza Viz
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;

