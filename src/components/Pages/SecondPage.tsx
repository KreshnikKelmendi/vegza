import React, { useEffect } from 'react'
import vegza1 from "../assets/vegza-1.png"
import SplitType from 'split-type'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

export const SecondPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1 
  })

  useEffect(() => {
    if (inView) {
      const myText = new SplitType('#my-text')

      gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
      })
    }
  }, [inView])

  return (
    <div className='w-full flex flex-col lg:flex-row'>
      <div className=''>
        <img src={vegza1} alt='' className='firstServiceImage w-full lg:w-[3000px] h-80 lg:h-screen object-cover' />
      </div>    
      <div className='bg-white py-10 lg:h-screen w-full relative'>
        <p ref={ref} className='text-black hidden font-medium lg:block text-left font-custom text-2xl lg:text-[108px] absolute lg:right-0 lg:w-[1056px] lg:h-[594px] lg:leading-[110px]' id='my-text'>
          The distinctive,<br />personal <br />&cultivated,<br />coalesce in a Vegza designed space
        </p>
        <p className='text-black lg:hidden text-center font-custom text-2xl lg:text-[108px] lg:w-[1056px] lg:h-[594px] lg:leading-[110px]'>
          Lorem ipsum dolor sit amet consectour, adis apistamet
        </p>
      </div>
    </div>
  )
}
