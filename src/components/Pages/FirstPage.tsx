import React from 'react';
import Header from '../Header/Header';

export const FirstPage = () => {
  return (
    <div className='relative'>
      <video
        src={require('../assets/video1.mp4')}
        autoPlay
        loop
        playsInline
        
        className='w-3/4'
      />

      <div className='absolute top-0'>
       
        <div className='flex flex-col lg:flex-row lg:px-[144px] lg:justify-between 2xl:items-center h-screen'>
          <p className='text-white lg:mt-24 2xl:mt-0 text-left lg:text-[70px] 2xl:text-[100px] lg:leading-[70px] 2xl:leading-[125.3px] font-bold 2xl:w-[1065px] font-custom'>
            VEGZA IS A DIFFERENT KIND OF ARCHITECTURE PRACTICE
          </p>
          <div className='flex flex-col lg:justify-center 2xl:justify-start 2xl:mt-0 ml-16'>
            <button className='text-white text-4xl 2xl:text-5xl lg:pl-[300px] 2xl:pl-[350px]'>{'>'}</button>
            <p className='text-white text-base mt-6 lg:leading-[19.36px] w-[431px] 2xl:mt-44 text-justify tracking-tighter'>
              Praktika të ndryshme të arkitekturës. E themeluar nga Robert Downey Jr në 2004, 
              ne jemi një firmë në pronësi të punonjësve që ndjekim një proces dizajni demokratik 
              që vlerëson kontributin e të gjithëve. Sot ne kemi më shumë se 150 njerëz në Londër, 
              Hong Kong dhe Sidnei që ofrojnë shërbime arkitekture, dizajni të brendshëm dhe urban nga 
              koncepti deri në përfundim.
            </p>
            <button className='w-[204px] h-[42px] text-white border border-white hover:bg-white hover:text-black hover:duration-300 mt-10'>
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
