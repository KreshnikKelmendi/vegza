import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';

import image10 from "../assets/vegza-10.png";
import image11 from "../assets/vegza-11.png";
import { useParams } from 'react-router-dom';
import { ServiceData, services } from './Services/serviceData';

const Interior = () => {
  const { serviceId } = useParams<{ serviceId?: string }>();
  const parsedProjectId = serviceId ? parseInt(serviceId) : undefined;
  const singleService: ServiceData | undefined = parsedProjectId !== undefined ? services.find(service => service.id === parsedProjectId) : undefined;

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust rootMargin as needed
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust rootMargin as needed
  });

  // Refs for GSAP animations
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    if (inView1) {
      gsap.fromTo(
        [textRef1.current, imageRef1.current],
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
      );
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      gsap.fromTo(
        [textRef2.current, imageRef2.current],
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
      );
    }
  }, [inView2]);

  return (
    <div className='bg-white lg:h-screen'>
      {singleService && (
        <>
      <div ref={ref1} className='lg:h-[50vh] w-full flex flex-col lg:flex-row mx-auto text-left'>
        <div className='lg:w-1/2 px-4 lg:px-16 my-10 lg:my-0 flex flex-col text-left justify-center' ref={textRef1}>
          <p className='text-[40px] font-custom uppercase'>Architecture</p>
          <p className='w-full mt-6 text-justify font-custom text-[16px] 2xl:w-3/4'>
            Inter’s singular aim is to design the best buildings, places and spaces in the world. A central part of this is providing the complete design of buildings across a range of sectors.
          </p>
          <button className='w-[204px] h-[42px] text-black border border-black hover:bg-black hover:text-white hover:duration-300 lg:mt-10 mt-8'>
            View Projects
          </button>
        </div>
        <div className='lg:w-1/2'>
        <img ref={imageRef1} className='w-full h-[50vh] object-cover' alt='' src={singleService.image} />
        </div>
      </div>

      <div ref={ref2} className='lg:h-[50vh] w-full flex flex-col lg:flex-row-reverse mx-auto text-left'>
        <div className='lg:w-1/2 flex px-4 lg:px-16 my-10 lg:my-0 flex-col text-left justify-center' ref={textRef2}>
          <p className='text-[40px] font-custom uppercase'>Interior</p>
          <p className='w-full mt-6 text-justify font-custom text-[16px] 2xl:w-3/4'>
            Inter’s singular aim is to design the best buildings, places and spaces in the world. A central part of this is providing the complete design of buildings across a range of sectors.
          </p>
          <button className='w-[204px] h-[42px] text-black border border-black hover:bg-black hover:text-white hover:duration-300 lg:mt-10 mt-8'>
            View Projects
          </button>
        </div>
        <div className='lg:w-1/2'>
        <img ref={imageRef2} className='w-full h-[50vh] object-cover' alt='' src={singleService.image} />
        </div>
      </div>
      </>
      )}
    </div>
  );
}

export default Interior;
