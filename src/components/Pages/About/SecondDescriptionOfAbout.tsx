import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SplitType from 'split-type';
import gsap from 'gsap';
import image12 from "../../assets/DSC04585-2.jpg";
import image13 from "../../assets/DSC04653.jpg";
import image14 from "../../assets/DSC04717.jpg";
import image15 from "../../assets/DSC04656.jpg";
import image16 from "../../assets/DSC04606-2.jpg";
import image17 from "../../assets/DSC04583.jpg";


const leftImages = [image12, image13, image14];
const rightTopImages = [image13, image15, image16];
const rightBottomImages = [image17, image12, image13];

const TRANSITION_DURATION = 600; // ms

const SecondDescriptionOfAbout = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold as needed
  });

  // State for left and right sliders
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Auto-slide effect with blur/fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setLeftIndex((prev) => (prev + 1) % leftImages.length);
        setRightIndex((prev) => (prev + 1) % rightTopImages.length);
        setTransitioning(false);
      }, TRANSITION_DURATION);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

  // CSS classes for transition
  const transitionClass = transitioning
    ? 'transition-all duration-700 ease-in-out opacity-40 blur-sm'
    : 'transition-all duration-700 ease-in-out opacity-100 blur-0';

  return (
    <div className='flex flex-col lg:flex-row px-7 lg:px-0 lg:h-screen justify-center items-center py-10 '>
      {/* Left: One large image, auto-sliding */}
      <div className='lg:w-1/2 lg:h-screen w-full'>
        <img
          src={leftImages[leftIndex]}
          alt={`Office view ${leftIndex + 1}`}
          className={`h-full w-full object-cover ${transitionClass}`}
          style={{ transitionProperty: 'opacity, filter, transform' }}
        />
      </div>
      <p
        id='my-text'
        ref={ref}
        className='vertical-text text-4xl py-10 font-light lg:py-0 px-4 lg:px-0 2xl:text-[128px] font-custom text-white lg:leading-[73.45px] lg:text-[78px] lg:absolute lg:left-[-120px]'
      >
        Our Offices
      </p>
      {/* Right: Two stacked images, auto-sliding as a pair */}
      <div className="lg:bg-white lg:w-1/2 lg:h-screen">
        <div className="w-full h-full flex flex-col justify-between">
          <img
            src={rightTopImages[rightIndex]}
            alt={`Office detail top ${rightIndex + 1}`}
            className={`w-full h-1/2 object-cover lg:pl-3 pb-2 ${transitionClass}`}
            style={{ transitionProperty: 'opacity, filter, transform' }}
          />
          <img
            src={rightBottomImages[rightIndex]}
            alt={`Office detail bottom ${rightIndex + 1}`}
            className={`w-full h-1/2 object-cover lg:pl-3 pt-2 ${transitionClass}`}
            style={{ transitionProperty: 'opacity, filter, transform' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondDescriptionOfAbout;
