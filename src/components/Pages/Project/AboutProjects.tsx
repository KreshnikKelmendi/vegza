import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import image18 from "../../assets/vegza-18.png"; // Example import for image

const AboutProjects = () => {
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
    <div className='flex'>
    <div className='text-white flex flex-col justify-center px-7 lg:h-screen lg:px-[144px]'>
      <p
        id='my-text'
        ref={textRef}
        className='text-[30px] pt-6 lg:pt-0 lg:text-[70px] 2xl:text-[128px] font-custom lg:mt-[-120px]'
      >
        Projects
      </p>
      <div className='flex flex-col lg:flex-row mt-4 lg:mt-10 text-sm lg:text-[16px] font-custom font-light leading-[21.33px]'>
        <p
          className='lg:w-[476px] text-justify'
          ref={(el) => (paragraphRefs.current[0] = el)}
        >
          Here, we showcase a curated selection of our most innovative and impactful work. 
          Each project highlights our commitment to blending creativity with functionality, 
          resulting in spaces that inspire and captivate. <br /> <br />
          From residential masterpieces to dynamic commercial spaces, our portfolio reflects 
          a diverse range of styles and solutions tailored to meet the unique needs of our 
          clients.
        </p>
        <p
          className='hidden lg:block lg:w-[476px] lg:mx-16 text-justify mt-6 lg:mt-0'
          ref={(el) => (paragraphRefs.current[1] = el)}
        >
          Explore our completed projects to see how we turn visionary concepts into 
          tangible realities, and how our designs elevate everyday experiences. <br /> <br />
          We believe that every project is unique and deserves a tailored approach. We listen carefully, ensuring that we fully grasp the vision and goals before we begin the design process.
          At Vegza, every project tells a story of collaboration, creativity, and excellence.
        </p>
      </div>
    </div>
    {/* <div className='h-screen'>
      <img className='h-screen object-cover firstServiceImage' src={image18} alt='' />
    </div> */}
    </div>
  );
};

export default AboutProjects;
