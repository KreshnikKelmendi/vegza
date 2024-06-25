import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import SplitType from 'split-type';
import gsap from 'gsap';
import image12 from "../../assets/vegza-12.png";
import image13 from "../../assets/vegza-13.png";
import image14 from "../../assets/vegza-14.png";

const SecondDescriptionOfAbout = () => {
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
      <div className='lg:w-1/2'>
        <img src={image12} alt='' className='firstServiceImage' />
      </div>
      <p
        id='my-text'
        ref={ref}
        className='vertical-text text-4xl py-10 font-light lg:py-0 px-4 lg:px-0 lg:text-[128px] font-custom text-[#D9D9D9] lg:leading-[73.45px] lg:absolute lg:left-[-20px]'
      >
        Our Offices
      </p>
      <div className="bg-white lg:w-1/2">
        <div className="w-full h-full">
          <img src={image13} alt="Image 1" className="w-full h-1/2 object-cover pl-3 pb-2" />
          <img src={image14} alt="Image 2" className="w-full h-1/2 object-cover pl-3 pt-2" />
        </div>
      </div>
    </div>
  );
};

export default SecondDescriptionOfAbout;
