import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from '../../Header/Header';
import { VizProjectData, vizProjects } from './VegzaVizProjects';

const SingleViz: React.FC = () => {
  const { projectId } = useParams<{ projectId?: string }>();
  const parsedProjectId = projectId ? parseInt(projectId) : undefined;
  const singleProject: VizProjectData | undefined = parsedProjectId !== undefined ? vizProjects.find(project => project.id === parsedProjectId) : undefined;

  if (!singleProject) {
    return <div>Project not found</div>;
  }

  // Responsive settings for the Carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Custom left arrow component
  const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
    <button onClick={onClick} className="custom-left-arrow">
      
    </button>
  );

  // Custom right arrow component
  const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
    <button onClick={onClick} className="custom-right-arrow hover:text-white hover::bg-black">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  return (
    <>
      <div className=''>
        <Header />
      </div>
      <div className="flex flex-col lg:flex-row w-full px-7 lg:px-0 py-4 lg:py-0 bg-[#A8FF00]">
     
        <div className="flex flex-col lg:h-[100vh] w-full ">
        <video
            src={singleProject.video}
            autoPlay
            loop
            muted
            playsInline
            className=' w-full h-96 lg:h-screen object-cover block'
        />
        </div>
      </div>
    </>
  );
};

export default SingleViz;
