import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { services } from './Services/serviceData';
import { Link, useLocation } from 'react-router-dom';

// Utility function to truncate text to a specified word limit
const truncateText = (text: string, wordLimit: number): string => {
  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
};

const OurSpecialization: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const specialtiesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        specialtiesRef.current.filter(el => el !== null), 
        { autoAlpha: 0, y: 100 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          stagger: 0.3,
          ease: 'power3.out',
          onComplete: () => {
            // Optional: Add any additional onComplete logic if needed
          }
        }
      );
    }
  }, [inView]);

  return (
    <div
    className={`${location.pathname === '/services' ? 'w-full flex flex-col lg:flex-row lg:items-center bg-layer lg:h-screen bg-white relative pb-5 lg:pb-0': 'w-full flex flex-col lg:flex-row lg:items-center bg-layer lg:h-screen bg-white relative pb-5 lg:pb-0 2xl:ml-[-310px]'}`}
>
      <p className={`${location.pathname === '/services' ? 'vertical-text text-4xl py-10 font-light lg:py-0 px-7 lg:px-0 lg:text-[78px] 2xl:text-[78px] font-custom text-black lg:leading-[73.45px]': 'vertical-text text-4xl py-10 font-light lg:py-0 px-7 lg:px-0 lg:text-[78px] font-custom text-black lg:leading-[73.45px] lg:absolute lg:left-[-60px]'}`}>
        Our Specialization
      </p>
      <div ref={ref} className='grid lg:grid-cols-3 gap-10 lg:gap-24 lg:ml-32 lg:px-4 2xl:px-24 2xl:mt-[-35px]'>
        {services.map((specialty, index) => (
          <div
            key={specialty.id}
            ref={(el) => specialtiesRef.current[index] = el}
            className='text-black font-custom relative'
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className='relative  hover:scale-110 hover:duration-700 ease-out'>
              <img
                src={specialty.image}
                alt={`Img for ${specialty.title}`}
                className='w-full h-64 2xl:h-[500px] object-cover serviceImages'
                style={{ position: 'relative' }} 
              />
            
            </div>
            <div className='px-7 py-7 lg:py-0 lg:px-0 text-black'>
              <p className='2xl:mt-12 mt-4 text-xl 2xl:text-[30px] uppercase font-light 2xl:leading-[37.66px] hover:mt-8 hover:duration-700 ease-out'>
                {specialty.title}
              </p>
              <p className='2xl:mt-9 mt-4 text-sm 2xl:text-base text-justify lg:text-base font-custom leading-[21.33px] font-light tracking-tighter'>
                {truncateText(specialty.description, 35)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurSpecialization;
