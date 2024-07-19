import React from 'react'
import image13 from "../../assets/vegza-16.png";
import image14 from "../../assets/vegza-17.png";

const VegzaVizProject = () => {
  return (

        <div className='bg-white lg:h-screen pb-12 lg:pb-0 mt-10 lg:mt-0'>
      <div className='lg:h-[50vh]  flex flex-col lg:flex-row-reverse mx-auto text-left'>
        <div className='px-7 lg:px-0 my-10 lg:my-0 flex flex-col 2xl:mx-48 lg:mx-16 text-left justify-center'>
          <p className='text-[30px] lg:text-[40px] font-custom'>Render 3d (Client)</p>
          <p className='w-full mt-6 text-justify font-custom text-[16px]'>
            Inter’s singular aim is to design the best buildings, places and spaces in the world. A central part of this is providing the complete design of buildings across a range of sectors.
          </p>
          <button className='w-full lg:w-[204px] h-[42px] text-black border border-black hover:bg-black hover:text-white hover:duration-300 lg:mt-10 mt-8'>
            View Projects
          </button>
        </div>
        <img className='lg:w-full h-96 lg:h-full object-cover px-7 lg:px-0' alt='' src={image13} />
      </div>

      <div className='lg:h-[50vh]  flex flex-col lg:flex-row text-left '>
        <div className='flex px-7 lg:px-0 my-10 lg:my-0 flex-col 2xl:mx-48 lg:mx-16 text-left justify-center'>
          <p className='text-[30px] lg:text-[40px] font-custom'>Render 3d (Client)</p>
          <p className='w-full mt-6 text-justify font-custom text-[16px]'>
            Inter’s singular aim is to design the best buildings, places and spaces in the world. A central part of this is providing the complete design of buildings across a range of sectors.
          </p>
          <button className='w-full lg:w-[204px] h-[42px] text-black border border-black hover:bg-black hover:text-white hover:duration-300 lg:mt-10 mt-8'>
            View Projects
          </button>
        </div>
        <img className='lg:w-full h-96 lg:h-fit object-cover 2xl:mt-[-50px] px-4 lg:px-0' alt='' src={image14} />
      </div>
    </div>

  )
}
export default VegzaVizProject