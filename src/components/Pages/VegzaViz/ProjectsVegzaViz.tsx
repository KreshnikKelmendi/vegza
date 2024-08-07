import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import { VizProjectData, vizProjects } from './VegzaVizProjects';

const ProjectsVegzaViz: React.FC = () => {
  const filteredProjects: VizProjectData[] = vizProjects.filter(project => [1, 2, 3].includes(project.id));
  const location = useLocation()

  // Scroll restoration logic
  useEffect(() => {
    // Save scroll position when component unmounts
    const handleScroll = () => {
      sessionStorage.setItem('scrollPosition', JSON.stringify(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Restore scroll position on component mount
    const savedScrollPosition = JSON.parse(sessionStorage.getItem('scrollPosition') || '0');
    window.scrollTo(0, savedScrollPosition);
  }, []);

  const handleClick = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="main_box grid lg:grid-cols-3 py-14 lg:py-0 gap-y-14 lg:gap-y-0 lg:gap-4 bg-black lg:bg-[#A8FF00] lg:px-0 px-4">
         <p id='my-text' className='vertical-text text-4xl py-10 font-light lg:py-0 px-4 lg:px-0 2xl:text-[128px] font-custom text-black lg:leading-[73.45px] lg:text-[78px] lg:absolute lg:bottom-44 lg:left-[-135px]'>
                Our Work
         </p>
      {filteredProjects.map(project => (
        <div key={project.id} className={`img img${project.id}`}>
          <Link key={project.id} to={`/vegza-viz/${project.id}`} onClick={handleClick}>
          <div className="bg-black lg:bg-white lg:py-0 px-4 lg:px-0 relative group">
            <img src={project.cover} alt={project.name} className="w-full h-80 lg:h-screen object-cover " />
            <div className='absolute lg:h-[229px] 2xl:h-[319px] flex flex-col justify-center px-5 lg:px-16 bottom-0 w-full bg-gradient-to-t from-[#0a0a0a] to-[#1011110e]'>
              <p className='text-white text-3xl lg:text-[40px] font-custom font-semibold'>{project.name}</p>
              <p className='text-white text-[20px]'>{project.description}</p>
              <button className='w-[136px] h-[42px] font-light text-center items-center flex justify-center text-base font-custom text-white border border-white hover:bg-white hover:text-black hover:duration-300 lg:mt-6 mt-6'>
                See More
              </button>
            </div>
          </div>
        </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectsVegzaViz;
