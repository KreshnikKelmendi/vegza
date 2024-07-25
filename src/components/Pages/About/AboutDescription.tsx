import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';

const AboutDescription = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
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

    // Animate paragraphs into view
    gsap.set(paragraphRefs.current, { y: 100, opacity: 0 });
    gsap.to(paragraphRefs.current, {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      delay: 0.5,
      duration: 1,
    });
  }, []);

  return (
    <div className='text-white flex flex-col justify-center px-7 pt-6 lg:pt-0 lg:h-screen lg:px-[144px]'>
      <p
        id='my-text'
        ref={textRef}
        className='text-[30px] lg:text-[70px] 2xl:text-[128px] font-custom lg:mt-[-120px]'
      >
        About Us
      </p>
      <div className='flex flex-col lg:flex-row mt-4 lg:mt-10 text-sm lg:text-[16px] font-custom font-light leading-[21.33px]'>
        <p
          className='lg:w-[476px] text-justify tracking-tighter'
          ref={(el) => (paragraphRefs.current[0] = el)}
        >
          At Vegza, we are dedicated to delivering designs that go beyond mere functionality – we create 
          spaces that resonate with the vision and needs of our clients. Each project we undertake is a 
          reflection of our commitment to quality, creativity, and innovation. We approach every challenge 
          with a fresh perspective and a deep sense of aesthetics and efficiency.    
          We prioritize sustainability and environmental responsibility in all our projects, ensuring that our designs contribute positively to the communities they serve.      
        </p>
        <p
          className='lg:w-[476px] hidden lg:block lg:mx-16 text-justify mt-6 lg:mt-0'
          ref={(el) => (paragraphRefs.current[1] = el)}
        >
          Our design process is characterized by meticulous attention to detail and a commitment to quality.

          We use the latest technology and innovative techniques to bring our designs to life, ensuring precision and excellence in every aspect of our work.
          At Vegza, we envision a future where every space we create enhances lives, setting new standards in the architectural industry.

        </p>
      </div>
    </div>
  );
};

export default AboutDescription;
