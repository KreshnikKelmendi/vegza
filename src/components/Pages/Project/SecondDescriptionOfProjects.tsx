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
    <div className='flex flex-col lg:flex-row lg:h-screen justify-center items-center px-5 lg:px-0 py-10 lg:py-0'>
      <div className='lg:w-1/2 lg:ml-[-250px]'>
        <img src={image18} alt='' className='firstServiceImage lg:h-screen' />
      </div>
      <div className="lg:w-1/2 lg:bg-white lg:px-3 py-5 lg:py-0">
        <div className="w-full h-full lg:bg-white relative">
          <img src={image19} alt="Img 1" className="w-full lg:h-screen object-cover" />
          <div className='absolute lg:h-[229px] 2xl:h-[319px] flex flex-col justify-center px-5 lg:px-16 bottom-0 w-full bg-gradient-to-t from-[#0a0a0a] to-[#1011110e]'>
            <p className='text-white text-[40px] font-custom font-semibold'>Dark Store</p>
            <p className='text-white text-[20px]'>Interior</p>
            <button className='w-[136px] h-[42px] font-light text-base font-custom text-white border border-white hover:bg-white hover:text-black hover:duration-300 lg:mt-6 mt-6'>
                <p>See More</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondDescriptionOfProjects;
