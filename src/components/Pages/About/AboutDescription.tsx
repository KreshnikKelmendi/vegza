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
    <div className='text-white flex flex-col justify-center px-5 lg:h-screen lg:px-[144px]'>
      <p
        id='my-text'
        ref={textRef}
        className='text-[24px] lg:text-[70px] 2xl:text-[128px] font-custom lg:mt-[-120px]'
      >
        About Us
      </p>
      <div className='flex flex-col lg:flex-row mt-10 text-sm lg:text-[16px] font-custom font-light leading-[21.33px]'>
        <p
          className='lg:w-[476px] text-justify'
          ref={(el) => (paragraphRefs.current[0] = el)}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. <br /> <br />Lorem ipsum dolor sit amet, 
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
          erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis 
          nisl ut aliquip ex ea commodo consequat.
        </p>
        <p
          className='lg:w-[476px] lg:mx-16 text-justify mt-6 lg:mt-0'
          ref={(el) => (paragraphRefs.current[1] = el)}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. <br /> <br /> Lorem ipsum dolor sit amet, 
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
          erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis 
          nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default AboutDescription;
