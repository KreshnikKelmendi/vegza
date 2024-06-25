import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import SplitType from 'split-type';
import gsap from 'gsap';
import image18 from "../../assets/vegza-18.png";
import image19 from "../../assets/vegza-19.png";
import image14 from "../../assets/vegza-14.png";

const SecondDescriptionOfProjects = () => {
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
    <div className='flex h-screen justify-center items-center'>
      <div className='lg:w-1/2 ml-[-250px]'>
        <img src={image18} alt='' className='firstServiceImage h-screen' />
      </div>
      <div className="lg:w-1/2 bg-white px-3">
        <div className="w-full h-full bg-white relative">
          <img src={image19} alt="Image 1" className="w-full h-screen object-cover" />
          <div className='absolute lg:h-[229px] 2xl:h-[319px] flex flex-col justify-center px-16 bottom-0 w-full bg-gradient-to-t from-[#0a0a0a] to-[#1011110e]'>
            <p className='text-white text-[40px] font-custom font-semibold'>Dark Store</p>
            <p className='text-white text-[20px]'>Interior</p>
            <p className='border border-white'>See More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondDescriptionOfProjects;
