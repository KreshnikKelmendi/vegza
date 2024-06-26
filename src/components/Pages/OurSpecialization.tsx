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
    title: 'INTERIOR',
    description: 'Inter’s singular aim is to design the best buildings, places and spaces in the world. Inter’s singular aim is to design the best buildings, places and spaces in the world. A central part of this is providing the complete design of buildings across a range of sectors.',
    image: service2, 
  },
  {
    id: 2,
    title: 'ARCHITECTURE',
    description: 'Description for Specialty 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: service1, 
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

  const specialtiesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        specialtiesRef.current.filter(el => el !== null), // Filter out null elements
        { autoAlpha: 0, y: 100 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          stagger: 0.3, // Adjust the stagger delay as per your preference
          ease: 'power3.out',
          onComplete: () => {
            // Optional: Add any additional onComplete logic if needed
          }
        }
      );
    }
  }, [inView]);

  return (
    <div className='w-full flex flex-col lg:flex-row lg:items-center bg-layer lg:h-screen bg-white relative pb-5 lg:pb-0'>
      <p className='vertical-text text-4xl py-10 font-light lg:py-0 px-4 lg:px-0 lg:text-[78px] font-custom text-black lg:leading-[73.45px] lg:absolute lg:left-[-60px]'>
        Our <br /> Specialization
      </p>
      <div ref={ref} className='grid lg:grid-cols-3 gap-10 lg:gap-24 lg:ml-32 lg:px-24'>
        {specialties.map((specialty, index) => (
          <div
            key={specialty.id}
            ref={(el) => specialtiesRef.current[index] = el}
            className='text-black font-custom'
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
              <p className='2xl:mt-12 mt-4 text-sm 2xl:text-base text-justify lg:text-base font-custom leading-[21.33px] font-light'>
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
