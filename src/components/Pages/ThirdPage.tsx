import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import vegza2 from "../assets/vegza-2.png";

export const ThirdPage = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  // Intersection Observer hooks
  const [imageRefInView, imageInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [textRefInView, textInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [buttonRefInView, buttonInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (imageInView) {
      gsap.fromTo(imageRef.current, 
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }
  }, [imageInView]);

  useEffect(() => {
    if (textInView) {
      gsap.fromTo(textRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, [textInView]);

  useEffect(() => {
    if (buttonInView) {
      gsap.fromTo(buttonRef.current, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 }
      );
    }
  }, [buttonInView]);

  return (
    <div className='w-full flex flex-col lg:flex-row font-custom'>
      <div className='lg:w-1/2' ref={imageRefInView}>
        <img src={vegza2} alt='' className='w-full h-80 lg:w-[3000px] lg:h-screen object-cover' ref={imageRef} />
      </div>    
      <div className='lg:w-1/2 px-5 py-5 lg:px-0 w-fit bg-white lg:h-screen lg:pl-16 flex flex-col lg:items-start lg:justify-center' ref={textRefInView}>
        <p className='text-3xl lg:text-[40px]' ref={textRef}>About Us</p>
        <p className='text-[#050505] mt-6 lg:mt-8 font-custom text-sm lg:tracking-normal lg:text-[18px] lg:w-[88%] 2xl:w-[749px] lg:h-fit text-justify leading-[23.99px]'>
          Praktika të ndryshme të arkitekturës. E themeluar nga Robert Downey Jr në 2004, ne jemi një firmë në pronësi të punonjësve që ndjekim një proces dizajni demokratik që vlerëson kontributin e të gjithëve. Sot ne kemi më shumë se 150 njerëz në Londër, Hong Kong dhe Sidnei që ofrojnë shërbime arkitekture, dizajni të brendshëm dhe urban nga koncepti deri në përfundim.
        </p>
        <button className='w-[204px] h-[42px] text-black border font-custom border-black hover:bg-black hover:text-white hover:duration-300 mt-6 lg:mt-4 text-sm lg:text-base font-semibold' ref={buttonRefInView}>
          See More
        </button>
      </div>
    </div>
  );
};
