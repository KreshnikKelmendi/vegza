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
    <>
    <div className='w-full flex flex-col lg:flex-row mt-[-110px] lg:mt-0 ' style={{ zIndex: 10 }} >
     
      <div className='2xl:ml-[-160px]'>
        <img src={vegza1} alt='' className='firstServiceImage 2xl:w-[320vh] h-80 lg:h-screen object-cover' />
      </div>    
      <div className='bg-white py-10 lg:h-screen w-full relative'>
        <p ref={ref} className='text-black hidden font-normal lg:block text-left font-custom text-2xl lg:text-[108px] absolute 2xl:top-36 lg:right-0 2xl:right-4 lg:w-[1056px] lg:h-[594px] lg:leading-[110px]' id='my-text'>
          The distinctive,<br />personal <br />&cultivated,<br />coalesce in a Vegza designed space
        </p>
        <p className='text-black px-4 lg:hidden text-center font-custom text-3xl lg:text-[108px] lg:w-[1056px] lg:h-[594px] lg:leading-[110px]'>
          The distinctive, personal & cultivated, coalesce in a Vegza designed space
        </p>
      </div>
    </div>
    </>
  )
}
