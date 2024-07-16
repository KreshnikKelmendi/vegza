import React, { useState, useEffect } from 'react';
import { ProjectData, projects } from './projectData';
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';

const MobileProjects: React.FC = () => {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSeeMore = () => {
    setLoading(true); 

    setTimeout(() => {
      setVisibleProjects(prev => prev + 3); 
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-y-14 lg:gap-y-0 lg:gap-4 bg-black lg:bg-white">
      {projects.slice(0, visibleProjects).map((project: ProjectData) => (
        <Link key={project.id} to={`/projects/${project.id}`} onClick={handleClick}>
          <div className="bg-black lg:bg-white lg:py-0 px-5 lg:px-0 relative group">
            <img src={project.cover} alt={project.name} className="w-full h-80 lg:h-screen object-cover group-hover:opacity-60 transition-opacity duration-300" />
            <div className='absolute lg:h-[229px] 2xl:h-[319px] flex flex-col justify-center px-5 lg:px-16 bottom-0 w-full bg-gradient-to-t from-[#0a0a0a] to-[#1011110e]'>
              <p className='text-white text-3xl lg:text-[40px] font-custom font-semibold'>{project.name}</p>
              <p className='text-white text-[20px]'>{project.description}</p>
              <button className='w-[136px] h-[42px] font-light text-center items-center flex justify-center text-base font-custom text-white border border-white hover:bg-white hover:text-black hover:duration-300 lg:mt-6 mt-6'>
                See More
              </button>
            </div>
          </div>
        </Link>
      ))}
      {visibleProjects < projects.length && (
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

export default MobileProjects;
