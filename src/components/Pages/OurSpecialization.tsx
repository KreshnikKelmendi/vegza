import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import service1 from '../assets/vegza-7.png';
import service2 from "../assets/vegza-8.png";
import service3 from "../assets/vegza-9.png";

interface Specialty {
  id: number;
  title: string;
  description: string;
  image: any; 
}

const specialties: Specialty[] = [
  {
    id: 1,
    title: 'ARCHITECTURE',
    description: 'Inter’s singular aim is to design the best buildings, places and spaces in the world. A central part of this is providing the complete design of buildings across a range of sectors. Inter’s singular aim is to design the best buildings, places and spaces in the world. A central part of this is providing the complete design of buildings across a range of sectors.',
    image: service1, 
  },
  {
    id: 2,
    title: 'INTERIOR',
    description: 'Description for Specialty 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: service2, 
  },
  {
    id: 3,
    title: 'VISUALIZATIONS & ANIMATIONS',
    description: 'Description for Specialty 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: service3,
  },
];

const OurSpecialization: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const textRef = useRef<HTMLParagraphElement>(null);
  const specialtiesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        textRef.current,
        { x: -200, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'power3.out',
          onComplete: () => {
            gsap.to(textRef.current, {
              x: '+=10',
              duration: 0.1,
              yoyo: true,
              repeat: 5,
              ease: 'power1.inOut',
            });
          },
        }
      );

      gsap.fromTo(
        specialtiesRef.current,
        { autoAlpha: 0, y: 100 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          stagger: 0.8,
          ease: 'power3.out',
        }
      );
    }
  }, [inView]);

  return (
    <div className='w-full flex flex-col lg:flex-row lg:items-center bg-layer lg:h-screen bg-[#0E0E0E] relative'>
      <p
        ref={textRef}
        className='vertical-text text-4xl py-10 font-light lg:py-0 px-4 lg:px-0 lg:text-[78px] font-custom text-[#D9D9D9] lg:leading-[73.45px] lg:absolute lg:left-[-60px]'
      >
        Our <br /> Specialization
      </p>
      <div ref={ref} className='grid lg:grid-cols-3 gap-10 lg:gap-24 lg:ml-32'>
        {specialties.map((specialty, index) => (
          <div
            key={specialty.id}
            ref={(el) => specialtiesRef.current[index] = el as HTMLDivElement}
            className='text-white font-custom '
          >
            <img
              src={specialty.image}
              alt={`Img for ${specialty.title}`}
              className='w-full h-64 2xl:h-[528px] object-cover'
            />
            <div className='px-4 lg:px-0'>
              <p className='2xl:mt-12 mt-4 text-2xl 2xl:text-[40px] uppercase font-light leading-[37.66px]'>
                {specialty.title}
              </p>
              <p className='2xl:mt-12 mt-4 text-sm 2xl:text-base text-justify tracking-tighter leading-[21.33px] font-light'>
                {specialty.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurSpecialization;
