import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import { VizProjectData, vizProjects } from './VegzaVizProjects';

const MobileVegzaVizProjects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(6); // State to track visible projects
  const [isLoading, setLoading] = useState(false); // State to track loading state

  // Scroll restoration logic
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem('scrollPosition', JSON.stringify(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedScrollPosition = JSON.parse(sessionStorage.getItem('scrollPosition') || '0');
    window.scrollTo(0, savedScrollPosition);
  }, []);

  const handleClick = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleSeeMore = () => {
    setLoading(true); 

    setTimeout(() => {
      setVisibleProjects(prev => prev + 3); 
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-y-14 lg:gap-y-0 lg:gap-4 bg-[#A8FF00] pt-8">
      {vizProjects.slice(0, visibleProjects).map((project: VizProjectData) => (
        <Link key={project.id} to={`/vegza-viz/${project.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
          <div className="bg-[#A8FF00] lg:py-0 px-7 lg:px-0 relative group">
            <img src={project.cover} alt={project.name} className="w-full h-[65vh] lg:h-screen object-cover group-hover:opacity-60 transition-opacity duration-300" />
            <div className='absolute lg:h-[229px] 2xl:h-[319px] w-full py-2 flex flex-col justify-center px-5 lg:px-16 bottom-0 bg-gradient-to-t from-[#aaff009a] to-[#aaff0062]'>
              <p className='text-black text-3xl lg:text-[40px] font-custom font-semibold'>{project.name}</p>
              <p className='text-black text-[20px]'>{project.description}</p>
              <button className='w-[136px] h-[42px] font-light text-center items-center flex justify-center text-base font-custom text-black border border-black hover:bg-white hover:text-black hover:duration-300 lg:mt-6 mt-6'>
                See More
              </button>
            </div>
          </div>
        </Link>
      ))}
      {visibleProjects < vizProjects.length && (
        <button
          className="w-full py-3 bg-gradient-to-b from-[#0a0a0a] to-[#1011110e] text-white text-center font-bold hover:bg-gray-800"
          onClick={handleSeeMore}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}

export default MobileVegzaVizProjects;
