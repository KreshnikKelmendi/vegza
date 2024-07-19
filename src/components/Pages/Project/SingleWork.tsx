import React from 'react';
import { useParams } from 'react-router-dom';
import { projects, ProjectData } from './projectData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from '../../Header/Header';

const SingleWork: React.FC = () => {
  const { projectId } = useParams<{ projectId?: string }>();
  const parsedProjectId = projectId ? parseInt(projectId) : undefined;
  const singleProject: ProjectData | undefined = parsedProjectId !== undefined ? projects.find(project => project.id === parsedProjectId) : undefined;

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
      <div className='lg:hidden'>
        <Header />
      </div>
      <div className="flex flex-col lg:flex-row w-full px-7 lg:px-0 py-4 lg:py-0">
        <div className="flex flex-col lg:h-[100vh] lg:w-1/2">
          <img src={singleProject.cover} alt={singleProject.name} className="h-[66vh] lg:h-1/2 object-cover" />
          <div className="lg:h-[50vh] text-black flex flex-col justify-center py-6 lg:py-0 lg:px-16">
            <p className='text-2xl lg:text-[40px] font-custom 2xl:px-6'>{singleProject.name}</p>
            <p className='lg:w-[549px] mt-4 lg:mt-0 lg:py-6 text-base font-custom text-justify tracking-tight 2xl:px-6 2xl:mt-6'>{singleProject.jobDescription}</p>
          </div>
        </div>
        <div className='lg:h-screen lg:w-1/2 lg:px-4 pb-4 lg:pb-0'>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            showDots={false}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            removeArrowOnDeviceType={['tablet']}
          >
            <img src={singleProject.thirdImage} alt={singleProject.name} className="h-[66vh] pt-4 lg:pt-0 lg:h-screen w-full object-cover" />
            <img src={singleProject.secondImage} alt={singleProject.name} className="h-[66vh] pt-4 lg:pt-0 lg:h-screen w-full object-cover" />
          </Carousel>
        </div>
        <div className='lg:pr-4 flex flex-col lg:h-screen'>
          <img src={singleProject.firstImage} alt={singleProject.name} className="h-[66vh] lg:h-[667px] lg:w-[800px] object-cover" />
          <img src={singleProject.secondImage} alt={singleProject.name} className="h-[66vh] lg:h-[361px] pt-4 w-full object-cover" />
        </div>
        
      </div>
    </>
  );
};

export default SingleWork;
