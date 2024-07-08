import React from 'react';
import { ProjectData, projects } from './projectData';
import { Link } from 'react-router-dom';

const FifthProjects = () => {
  // Filter projects with IDs 2, 3, and 4
  const filteredProjects = projects.filter(project => [11, 12, 13].includes(project.id));

  return (
    <div className="grid lg:grid-cols-3 py-14 lg:py-0 gap-y-14 lg:gap-y-0 lg:gap-4 bg-black lg:bg-white lg:px-4">
      {filteredProjects.map((project: ProjectData) => (
        <div key={project.id} className=" bg-black lg:bg-white lg:py-0 px-4 lg:px-0">
          <div className="w-full h-full lg:bg-white relative">
            <img src={project.cover} alt={project.name} className="w-full h-80 lg:h-screen object-cover" />
            <div className='absolute lg:h-[229px] 2xl:h-[319px] flex flex-col justify-center px-5 lg:px-16 bottom-0 w-full bg-gradient-to-t from-[#0a0a0a] to-[#1011110e]'>
              <p className='text-white text-3xl lg:text-[40px] font-custom font-semibold'>{project.name}</p>
              <p className='text-white text-[20px]'>{project.description}</p>
              <Link to={`/projects/${project.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                <button className='w-[136px] h-[42px] font-light text-base font-custom text-white border border-white hover:bg-white hover:text-black hover:duration-300 lg:mt-6 mt-6'>
                    <p>See More</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FifthProjects;
