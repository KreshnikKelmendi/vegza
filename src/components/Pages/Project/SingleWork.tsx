import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { projects, ProjectData } from './projectData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


gsap.registerPlugin(ScrollTrigger);

const SingleWork: React.FC = () => {
    const { projectId } = useParams<{ projectId?: string }>();
    const parsedProjectId = projectId ? parseInt(projectId) : undefined;
    const singleProject: ProjectData | undefined = parsedProjectId !== undefined ? projects.find(project => project.id === parsedProjectId) : undefined;
    
    // Refs for GSAP animations
    const img1Ref = useRef<HTMLImageElement>(null);
    const img2Ref = useRef<HTMLImageElement>(null);
    const img3Ref = useRef<HTMLImageElement>(null);
  
    // Intersection observer hook
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5 // Adjust as needed
    });
  
    useEffect(() => {
      if (inView) {
        // Animation timeline
        const tl = gsap.timeline();
  
        // Animate images with delays
        tl.fromTo(img1Ref.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 })
          .fromTo(img2Ref.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 })
          .fromTo(img3Ref.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 }, '-=0.8');
      }
    }, [inView]);
  
    if (!singleProject) {
      return <div>Project not found</div>;
    }
  
    return (
      <div ref={ref} className="flex flex-col lg:flex-row w-full px-4 lg:px-0 py-4 lg:py-0">
        <div className="flex flex-col lg:h-[100vh] lg:w-[712px] here">
          <img ref={img1Ref} src={singleProject.cover} alt={singleProject.name} className="lg:h-1/2 object-cover" />
          <div className="lg:h-[50vh] text-black flex flex-col justify-center py-6 lg:py-0 lg:px-16">
            <p className='text-2xl lg:text-[40px] font-custom'>{singleProject.name}</p>
            <p className='lg:w-[549px] mt-4 lg:mt-0 lg:py-6 text-base font-custom text-justify tracking-tight'>{singleProject.jobDescription}</p>
          </div>
        </div>
        <div className='lg:w-[444px] lg:px-4 flex flex-col lg:h-screen'>
          <img ref={img2Ref} src={singleProject.firstImage} alt={singleProject.name} className="h-80 lg:h-[667px] w-full object-cover" />
          <img ref={img3Ref} src={singleProject.secondImage} alt={singleProject.name} className="h-80 lg:h-1/2 pt-4 w-full object-cover" />
        </div>
        <div className='lg:h-screen'>
          <img src={singleProject.thirdImage} alt={singleProject.name} className="h-80 pt-4 lg:pt-0 lg:h-screen w-full object-cover" />
        </div>
      </div>
    );
  };
  
  export default SingleWork;
  