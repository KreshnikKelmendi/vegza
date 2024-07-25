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
        className='lg:w-3/4 w-[160vh] h-[40vh] lg:hidden '
      />
      <div className='absolute top-0 lg:top-8 2xl:top-0'>
        <div className='flex px-7 flex-col lg:flex-row lg:px-[144px] justify-center items-center lg:items-baseline lg:justify-between 2xl:items-center h-screen'>
          <p className='text-white mt-16 lg:mt-24 2xl:mt-0 text-left uppercase text-xl lg:text-[70px] 2xl:text-[100px] lg:leading-[70px] 2xl:leading-[125.3px] font-thin 2xl:w-[1065px] font-custom '>
          Transforming Visions into Architectural Masterpieces.
          </p>
          <div className='flex flex-col lg:justify-center 2xl:justify-start 2xl:mt-0 mt-6 lg:ml-16'>
            <button className='text-white hidden lg:block text-4xl 2xl:text-5xl lg:pl-[300px] 2xl:pl-[350px]'>{'>'}</button>
            <p className='text-white 2xl:ml-[25px] text-sm lg:text-base mt-6 lg:leading-[21.33px] lg:w-[431px] 2xl:mt-44 text-justify font-thin tracking-tighter lg:tracking-normal font-custom'>
              Welcome to Vegza – an architecture/design studio that transforms spaces into 
              extraordinary works of art. We believe that every project is an opportunity to create
              something unique and memorable. On our homepage, you’ll find a glimpse of what 
              we are and offer.
            </p>
            <Link to="/about-us" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
              <button className='w-full lg:w-[204px] h-[42px] 2xl:ml-[25px] font-light text-base font-custom text-white border border-white hover:bg-white hover:text-black hover:duration-300 lg:mt-10 mt-12'>
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
