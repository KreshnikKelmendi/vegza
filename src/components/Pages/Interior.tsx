import React from 'react'
import image10 from "../assets/vegza-10.png"

const Interior = () => {
  return (
    <div className='bg-white h-screen'>
      <div className='h-[50vh] w-full flex flex-col lg:flex-row justify-center '>
        <div className='lg:w-1/2 mx-auto flex flex-col justify-center'>
          <p className='text-[40px] font-custom uppercase'>Architecture</p>
          <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem debitis, accusantium architecto animi distinctio, corporis suscipit explicabo incidunt earum omnis odit? Vitae id ipsa ratione eos itaque in eveniet aperiam!</p>
        </div>
        <img className='lg:w-1/2' alt='' src={image10} />
      </div>
    </div>
  )
}

export default Interior
