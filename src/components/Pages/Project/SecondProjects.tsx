import React, { useEffect } from 'react';
import { ProjectData, projects } from './projectData';
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';

const SecondProjects: React.FC = () => {
  const filteredProjects: ProjectData[] = projects.filter(project => [3, 4, 5].includes(project.id));

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
    <div className="main_box grid lg:grid-cols-3 py-14 lg:py-0 gap-y-14 lg:gap-y-0 lg:gap-4 bg-black lg:bg-white lg:px-4 px-4">
      {filteredProjects.map(project => (
        <div key={project.id} className={`img img${project.id}`}>
          <Link key={project.id} to={`/projects/${project.id}`} onClick={handleClick}>
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

export default SecondProjects;
