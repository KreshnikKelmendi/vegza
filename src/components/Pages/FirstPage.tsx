import React from 'react';
import video1 from '../assets/video1.mp4';
import video2 from "../assets/mobileVideo1.mp4"
import { Link } from 'react-router-dom';

const FirstPage: React.FC = () => {
  
  return (
    <div className='relative h-screen lg:h-fit lg:py-0 bg-[#0E0E0E] '>
      <video
        src={video1}
        autoPlay
        loop
        muted
        playsInline
        className='lg:w-3/4 w-full hidden lg:block'
      />
      <video
        src={video2}
        autoPlay
        loop
        muted
        playsInline
        className='lg:w-3/4 w-full h-[40vh] lg:hidden '
      />
      <div className='absolute top-0'>
        <div className='flex px-7 flex-col lg:flex-row lg:px-[144px] justify-center items-center lg:items-baseline lg:justify-between 2xl:items-center h-screen'>
          <p className='text-white mt-8 lg:mt-24 2xl:mt-0 text-left text-3xl lg:text-[70px] 2xl:text-[100px] lg:leading-[70px] 2xl:leading-[125.3px] font-thin 2xl:w-[1065px] font-custom '>
            VEGZA IS A DIFFERENT KIND OF ARCHITECTURE PRACTICE
          </p>
          <div className='flex flex-col lg:justify-center 2xl:justify-start 2xl:mt-0 mt-6 lg:ml-16'>
            <button className='text-white hidden lg:block text-4xl 2xl:text-5xl lg:pl-[300px] 2xl:pl-[350px]'>{'>'}</button>
            <p className='text-white text-sm lg:text-base mt-6 lg:leading-[21.33px] lg:w-[431px] 2xl:mt-44 text-justify font-thin tracking-tighter lg:tracking-normal font-custom'>
              Praktika të ndryshme të arkitekturës. E themeluar nga Robert Downey Jr në 2004, 
              ne jemi një firmë në pronësi të punonjësve që ndjekim një proces dizajni demokratik 
              që vlerëson kontributin e të gjithëve. Sot ne kemi më shumë se 150 njerëz në Londër, 
              Hong Kong dhe Sidnei që ofrojnë shërbime arkitekture, dizajni të brendshëm dhe urban nga 
              koncepti deri në përfundim.
            </p>
            <Link to="/about-us" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
              <button className='w-[204px] h-[42px] font-light text-base font-custom text-white border border-white hover:bg-white hover:text-black hover:duration-300 lg:mt-10 mt-12'>
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
