import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import SplitType from 'split-type';
import gsap from 'gsap';
import image12 from "../../assets/vegza-15.png";
import image13 from "../../assets/vegza-16.png";
import image14 from "../../assets/vegza-17.png";
import Interior from '../Interior';

const SecondDescriptionOfVegzaViz = () => {
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

  return (
    <div className='flex flex-col lg:flex-row lg:h-screen justify-center items-center pt-10 lg:pt-0 lg:px-0 2xl:ml-[-180px]'>
      <div className='px-7 lg:px-0 lg:w-full'>
        <img src={image12} alt='' className='w-full lg:h-screen object-cover firstServiceImage' />
      </div>
    
     
      {/* <div className='bg-white lg:h-screen pb-12 lg:pb-0 mt-10 lg:mt-0'>
      <div className='lg:h-[50vh] w-full flex flex-col lg:flex-row-reverse mx-auto text-left'>
        <div className='px-7 lg:px-0 my-10 lg:my-0 flex flex-col 2xl:mx-16 lg:mx-16 text-left justify-center'>
          <p className='text-[30px] g:text-[40px] font-custom'>Render 3d (Client)</p>
          <p className='w-full mt-6 text-justify font-custom text-[16px]'>
            Inter’s singular aim is to design the best buildings, places and spaces in the world. A central part of this is providing the complete design of buildings across a range of sectors.
          </p>
          <button className='w-[204px] h-[42px] text-black border border-black hover:bg-black hover:text-white hover:duration-300 lg:mt-10 mt-8'>
            View Projects
          </button>
        </div>
        <img className='lg:w-1/2 object-cover px-7 lg:px-0' alt='' src={image13} />
      </div>

      <div className='lg:h-[50vh] w-full flex flex-col lg:flex-row text-left 2xl:mx-3'>
        <div className='flex px-7 lg:px-0 my-10 lg:my-0 flex-col 2xl:mx-16 lg:mx-16 text-left justify-center'>
          <p className='text-[30px] lg:text-[40px] font-custom'>Render 3d (Client)</p>
          <p className='w-full mt-6 text-justify font-custom text-[16px]'>
            Inter’s singular aim is to design the best buildings, places and spaces in the world. A central part of this is providing the complete design of buildings across a range of sectors.
          </p>
          <button className='w-[204px] h-[42px] text-black border border-black hover:bg-black hover:text-white hover:duration-300 lg:mt-10 mt-8'>
            View Projects
          </button>
        </div>
        <img className='lg:w-1/2 object-cover 2xl:mt-[-50px] px-4 lg:px-0' alt='' src={image14} />
      </div>
    </div> */}
    </div>
  );
};

export default SecondDescriptionOfVegzaViz;
