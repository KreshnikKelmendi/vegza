import React from 'react'
import vegza1 from "../assets/vegza-1.png"

export const SecondPage = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row'>
        <div className=''>
            <img src={vegza1} alt='' className='firstServiceImage w-full lg:w-[3000px] h-80 lg:h-screen object-cover ' />
        </div>    
        <div className=' bg-white py-10 lg:h-screen w-full relative'>
            <p className='text-black hidden lg:block text-left font-custom text-2xl lg:text-[108px] absolute lg:right-0 lg:w-[1056px] lg:h-[594px] lg:leading-[110px]'>
              The distinctive,<br />personal <br />&cultivated, <br />coalescein a Vegza designed space
            </p>
            <p className='text-black lg:hidden text-center font-custom text-2xl lg:text-[108px]  lg:w-[1056px] lg:h-[594px] lg:leading-[110px]'>
              Lorem ipsum dolor sit amet consectour, adis apistamet
            </p>
        </div>
    </div>
  )
}
