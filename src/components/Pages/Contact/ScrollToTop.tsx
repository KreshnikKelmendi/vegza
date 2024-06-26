import React, { useState, useEffect } from 'react';

const ScrollToTopArrow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed rotate-90 lg:rotate-0 bottom-4 right-4 px-2 py-1 text-base bg-gray-100 hover:bg-black hover:text-white text-black shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <p className='font-bold'>←</p>
    </button>
  );
};

export default ScrollToTopArrow;
