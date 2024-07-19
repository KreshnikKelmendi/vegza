import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { services } from './Services/serviceData';
import { Link } from 'react-router-dom';



const OurSpecialization: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const specialtiesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        specialtiesRef.current.filter(el => el !== null), 
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
      <p className='vertical-text text-4xl py-10 font-light lg:py-0 px-7 lg:px-0 lg:text-[78px] font-custom text-black lg:leading-[73.45px] lg:absolute lg:left-[-60px]'>
        Our <br /> Specialization
      </p>
      <div ref={ref} className='grid lg:grid-cols-3 gap-10 lg:gap-24 lg:ml-32 lg:px-24'>
        {services.map((specialty, index) => (
          <div
            key={specialty.id}
            ref={(el) => specialtiesRef.current[index] = el}
            className='text-black font-custom relative'
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className='relative'>
              <img
                src={specialty.image}
                alt={`Img for ${specialty.title}`}
                className='w-full h-64 2xl:h-[628px] object-cover'
                style={{ position: 'relative' }} 
              />
               <Link to={`/services/${specialty.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
              {hoverIndex === index && (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 10,
                  }}
                >
                  <button
                    className="text-white text-base font-bold font-custom  py-2 rounded-md transition-colors"
                    onClick={() => {
                      // Handle click action here
                    }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 20,
                    }}
                  >
                    See more
                  </button>
                </div>
              )}
              </Link>
            </div>
            <div className='px-7 py-7 lg:py-0 lg:px-0'>
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
