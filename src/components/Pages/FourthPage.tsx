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
        ) // Start 0.5 seconds before the previous animation ends
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
        ); // Start 0.5 seconds before the previous animation ends
    }
  }, [textInView]);

  const setRefs = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  // Filter projects to include only IDs 1, 2, and 3
  const filteredProjects = projects.filter((project) => [1, 2, 3].includes(project.id));

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="bg-white lg:h-screen w-full lg:w-3/4 relative">
        <div ref={cardsRef} className="main_box grid grid-cols-3 gap-x-1 lg:gap-x-4 gap-y-4">
          {filteredProjects.map((project: ProjectData, index: number) => (
            <div key={index} ref={(el) => setRefs(el, index)} className="card">
              <div className="bg-white overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.name}
                  className="w-full h-80 lg:h-screen object-cover hover:scale-x-125 hover:duration-1000"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={textRef}
        className="lg:w-1/2 bg-white lg:h-screen px-7 py-7 lg:px-0 lg:pl-16 flex flex-col items-start justify-center"
      >
        <div ref={textContainerRef} className="py-5 lg:py-0">
          <p ref={headingRef} className="text-3xl font-custom lg:text-[40px] font-light">
            Latest Projects
          </p>
          <p
            ref={paragraphRef}
            className="text-[#050505] mt-6 lg:mt-8 font-custom text-sm 2xl:pr-36 lg:tracking-normal lg:text-[18px] lg:w-[88%] 2xl:w-[749px] lg:h-fit text-justify leading-[23.99px]"
          >
            Praktika të ndryshme të arkitekturës. E themeluar nga Robert Downey Jr në 2004, ne
            jemi një firmë në pronësi të punonjësve që ndjekim një proces dizajni demokratik që
            vlerëson kontributin e të gjithëve. Sot ne kemi më shumë se 150 njerëz në Londër, Hong
            Kong dhe Sidnei që ofrojnë shërbime arkitekture, dizajni të brendshëm dhe urban nga
            koncepti deri në përfundim.
          </p>
          <Link to="/projects" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <button
              ref={buttonRef}
              className="w-[204px] h-[42px] text-black border font-custom border-black hover:bg-black hover:text-white hover:duration-300 mt-6 text-sm lg:text-base font-semibold"
            >
              See More Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
