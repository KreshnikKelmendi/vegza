import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import vegza2 from "../assets/vegza-6.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(imageRef.current, 
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true
        }
      }
    );

    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true
        }
      }
    );

    gsap.fromTo(buttonRef.current, 
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true
        }
      }
    );
  }, []);

  return (
    <div className='w-full flex flex-col lg:flex-row font-custom'>
      <div className='w-1/2' ref={imageRef}>
        <img src={vegza2} alt='' className='w-full lg:w-[3000px] h-screen object-cover' />
      </div>    
      <div className='w-1/2 bg-white h-screen pl-16 flex flex-col items-start justify-center' ref={textRef}>
        <p className='text-[40px]'>Services</p>
        <p className='text-[#050505] mt-6 font-custom text-[18px] w-[88%] 2xl:w-[649px] h-[144px] text-justify tracking-tighter leading-[23.99px]'>
          Praktika të ndryshme të arkitekturës. E themeluar nga Robert Downey Jr në 2004, ne jemi një firmë në pronësi të punonjësve që ndjekim një proces dizajni demokratik që vlerëson kontributin e të gjithëve. Sot ne kemi më shumë se 150 njerëz në Londër, Hong Kong dhe Sidnei që ofrojnë shërbime arkitekture, dizajni të brendshëm dhe urban nga koncepti deri në përfundim.
        </p>
        <button className='w-[204px] h-[42px] text-black border font-custom border-black hover:bg-white hover:text-black hover:duration-300 mt-6 text-base font-semibold' ref={buttonRef}>
          See More
        </button>
      </div>
    </div>
  );
};
