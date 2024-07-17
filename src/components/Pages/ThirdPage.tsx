import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../assets/vegza-2.png';
import image2 from '../assets/vegza-3.png';
import image3 from '../assets/vegza-4.png';

// Array of imported images
const images = [image1, image2, image3];

export const ThirdPage = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  // Intersection Observer hooks
  const [textRefInView, textInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [buttonRefInView, buttonInView] = useInView({ triggerOnce: true, threshold: 0.2 });

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

  // Carousel settings
  const carouselResponsiveConfig = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  return (
    <div className='w-full flex flex-col lg:flex-row font-custom'>
      <div className='lg:w-1/2'>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=''
          containerClass='carousel-container'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          responsive={carouselResponsiveConfig}
          showDots={false}
          sliderClass=''
          slidesToSlide={1}
          swipeable
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} className='w-full h-80 lg:w-[3000px] lg:h-screen object-cover' />
          ))}
        </Carousel>
      </div>    
      <div className='lg:w-1/2 px-7 py-7 lg:px-0 w-fit bg-white lg:h-screen lg:pl-16 flex flex-col lg:items-start lg:justify-center' ref={textRefInView}>
        <p className='text-[30px] lg:text-[40px]'>About Us</p>
        <p className='text-[#050505] mt-6 lg:mt-8 font-custom text-sm 2xl:pr-16 lg:tracking-normal lg:text-[18px] lg:w-[88%] 2xl:w-[749px] lg:h-fit text-justify leading-[23.99px]'>
          Praktika të ndryshme të arkitekturës. E themeluar nga Robert Downey Jr në 2004, ne jemi një firmë në pronësi të punonjësve që ndjekim një proces dizajni demokratik që vlerëson kontributin e të gjithëve. Sot ne kemi më shumë se 150 njerëz në Londër, Hong Kong dhe Sidnei që ofrojnë shërbime arkitekture, dizajni të brendshëm dhe urban nga koncepti deri në përfundim.
        </p>
        <Link to="/about-us" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
          <button className='w-[204px] h-[42px] text-black border font-custom border-black hover:bg-black hover:text-white hover:duration-300 mt-6 lg:mt-6 2xl:mt-10 text-sm lg:text-base font-semibold' ref={buttonRefInView}>
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};
