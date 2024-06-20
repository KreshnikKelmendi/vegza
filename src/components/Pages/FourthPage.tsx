import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import vegza1 from "../assets/vegza-3.png";
import vegza2 from "../assets/vegza-4.png";
import vegza3 from "../assets/vegza-5.png";

export const FourthPage = () => {
  const cardsData = [
    {
      imageSrc: vegza1,
      title: 'Vegza Design 1',
      description: 'The distinctive, personal & cultivated, coalesce in a Vegza designed space',
    },
    {
      imageSrc: vegza2,
      title: 'Vegza Design 2',
      description: 'The distinctive, personal & cultivated, coalesce in a Vegza designed space',
    },
    {
      imageSrc: vegza3,
      title: 'Vegza Design 3',
      description: 'The distinctive, personal & cultivated, coalesce in a Vegza designed space',
    },
  ];

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
      tl.fromTo(headingRef.current, {
        opacity: 0,
        x: 100,
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
      })
      .fromTo(paragraphRef.current, {
        opacity: 0,
        x: 100,
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
      }, "-=0.5") // Start 0.5 seconds before the previous animation ends
      .fromTo(buttonRef.current, {
        opacity: 0,
        x: 100,
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
      }, "-=0.5"); // Start 0.5 seconds before the previous animation ends
    }
  }, [textInView]);

  const setRefs = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  return (
    <div className='w-full flex flex-col lg:flex-row'>
      <div className='bg-white lg:h-screen w-full lg:w-3/4 relative'>
        <div ref={cardsRef} className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4'>
          {cardsData.map((card, index) => (
            <div
              key={index}
              ref={(el) => setRefs(el, index)}
              className="card"
              style={{ opacity: 0, transform: 'translateY(500px)' }}
            >
              <div className="bg-white overflow-hidden">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-80 lg:h-screen object-cover hover:scale-125 hover:duration-1000"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={textRef}
        className='lg:w-1/2 bg-white lg:h-screen px-4 lg:px-0 lg:pl-16 flex flex-col items-start justify-center'
      >
        <div ref={textContainerRef} className='py-5 lg:py-0'>
          <p ref={headingRef} className='text-[40px] font-light'>Projects</p>
          <p ref={paragraphRef} className='text-[#050505] mt-6 font-custom text-[18px] lg:w-[88%] 2xl:w-[649px] lg:h-fit text-justify tracking-tighter leading-[23.99px]'>
            Praktika të ndryshme të arkitekturës. E themeluar nga Robert Downey Jr në 2004, ne jemi një firmë në pronësi të punonjësve që ndjekim një proces dizajni 
            demokratik që vlerëson kontributin e të gjithëve. Sot ne kemi më shumë se 150 njerëz në Londër, Hong Kong dhe Sidnei që ofrojnë shërbime arkitekture, 
            dizajni të brendshëm dhe urban nga koncepti deri në përfundim.
          </p>
          <button ref={buttonRef} className='w-[204px] h-[42px] text-black border font-custom border-black hover:bg-black hover:text-white hover:duration-300 mt-6 text-base font-semibold'>
            See More Projects
          </button>
        </div>
      </div>
    </div>
  );
};
