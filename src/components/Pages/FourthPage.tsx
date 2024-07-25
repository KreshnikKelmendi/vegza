import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ProjectData, projects } from './Project/projectData';

export const FourthPage = () => {
  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLParagraphElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (cardsInView) {
      gsap.to(cardRefs.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power4.out',
      });
    }
  }, [cardsInView]);

  useEffect(() => {
    if (textInView) {
      const tl = gsap.timeline();
      tl.fromTo(
        headingRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power4.out',
        }
      )
        .fromTo(
          paragraphRef.current,
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.5'
        )
        .fromTo(
          buttonRef.current,
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.5'
        );
    }
  }, [textInView]);

  const setRefs = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  // Filter projects to include only IDs 1, 2, and 3
  const filteredProjects = projects.filter((project) => [1, 2, 3].includes(project.id));

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="bg-white w-full lg:w-3/4 relative 2xl:ml-[-550px]">
        <div ref={cardsRef} className="main_box grid gap-x-1 lg:grid-cols-3  lg:py-0 gap-y-14 lg:gap-y-0 lg:gap-4 bg-white px-0 lg:px-0">
          {filteredProjects.map((project: ProjectData, index: number) => (
            <Link key={project.id} className={`img img${project.id}`} to={`/projects/${project.id}`}>
              <div ref={(el) => setRefs(el, index)} className="bg-white px-0 lg:px-0 relative group">
                <img
                  src={project.cover}
                  alt={project.name}
                  className="w-full h-80 lg:h-screen object-cover hover:scale-x-125 hover:duration-1000"
                />
                <div className='absolute inset-0 flex flex-col justify-end px-5 lg:px-16 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pb-4 lg:pb-8'>
                  <p className='text-white text-2xl lg:text-[40px] font-custom font-semibold'>{project.name}</p>
                  <p className='text-white text-base lg:text-[20px] mt-2'>{project.description}</p>
                  <button className='w-[136px] h-[42px] font-light text-center items-center flex justify-center text-base font-custom text-white border border-white hover:bg-white hover:text-black hover:duration-300 lg:mt-6 mt-6'>
                    See More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div
        ref={textRef}
        className="lg:w-1/2 bg-white lg:h-screen px-7 py-7 lg:px-0 lg:pl-16 flex flex-col items-start justify-center"
      >
        <div ref={textContainerRef} className="py-10 lg:py-0">
          <p ref={headingRef} className="text-3xl font-custom lg:text-[40px] font-light">
            Latest Projects
          </p>
          <p
            ref={paragraphRef}
            className="text-[#050505] mt-6 lg:mt-8 font-custom text-sm 2xl:pr-44 lg:tracking-normal lg:text-[18px] lg:w-[88%] 2xl:w-[749px] lg:h-fit text-justify leading-[23.99px]"
          >
            Here, we showcase a curated selection of our most innovative and impactful work. 
            Each project highlights our commitment to blending creativity with functionality, 
            resulting in spaces that inspire and captivate. 
          </p>
          <Link to="/projects" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <button
              ref={buttonRef}
              className="w-full lg:w-[204px] h-[42px] text-black border font-custom border-black hover:bg-black hover:text-white hover:duration-300 mt-6 text-sm lg:text-base font-semibold"
            >
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
