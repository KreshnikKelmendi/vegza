import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ProjectData, projects } from './projectData'; // Import projects array and ProjectData interface
import { Link } from 'react-router-dom';

import image18 from "../../assets/vegza-18.png"; // Example import for image
import image19 from "../../assets/vegza-19.png"; // Example import for image

const SecondDescriptionOfProjects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      // Split the text into individual characters
      new SplitType('#my-text', { types: 'chars' });

      // Set the initial position of characters
      gsap.set('.char', { y: -100 });

      // Animate the characters into view
      gsap.to('.char', {
        y: 0,
        stagger: 0.06,
        delay: 0.3,
        duration: 0.1,
      });
    }
  }, [inView]);

  // Filtered projects based on specific IDs
  const filteredProjects: ProjectData[] = projects.filter(project => [1, 2].includes(project.id));

  return (
    <div className='flex flex-col lg:flex-row lg:h-screen justify-center items-center px-5 lg:px-0 py-10 lg:py-0'>
      <div className='lg:w-[200vh]'>
        <img src={image18} alt='' className='lg:h-screen' />
      </div>
      <div className="lg:flex hidden gap-x-4 lg:bg-white lg:px-3 py-1 lg:py-0">
        {filteredProjects.map(project => (
          <div key={project.id} className={`img img${project.id}`}>
            <Link to={`/projects/${project.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
              <div className='bg-black lg:bg-white lg:py-0 px-4 lg:px-0 relative group'>
                <img src={project.cover} alt={project.name} className='w-full h-80 lg:h-screen object-cover' />
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
    </div>
  );
};

export default SecondDescriptionOfProjects;