import React from 'react'
import vegza1 from "../assets/vegza-1.png"

export const SecondPage = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row'>
        <div className=''>
            <img src={vegza1} alt='' className='firstServiceImage w-full lg:w-[3000px] h-screen object-cover' />
        </div>    
        <div className=' bg-white py-10 h-screen w-full relative'>
            <p className='text-black text-left font-custom lg:text-[108px] absolute right-0 lg:w-[1056px] lg:h-[594px] lg:leading-[110px]'>The distinctive,<br />personal <br />&cultivated, <br />coalescein a Vegza designed space</p>
        </div>
    </div>
  )
}
