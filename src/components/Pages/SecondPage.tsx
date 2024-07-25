import React, { useEffect } from 'react'
// import vegza1 from "../assets/homeBanner.png"
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
    <div className='w-full flex flex-col lg:flex-row mt-[-110px] lg:mt-0 ' >
     
      {/* <div className='2xl:ml-[-160px] lg:ml-[-60px]'>
        <img src={vegza1} alt='' className='firstServiceImage 2xl:w-[320vh] h-80 lg:h-screen object-cover' />
      </div>     */}
      <div className='bg-white py-10 lg:h-screen w-full relative'>
        <p ref={ref} className='text-black hidden font-light lg:block  font-custom text-2xl lg:text-[98px] 2xl:text-[108px] text-left absolute lg:top-40 2xl:top-96 lg:left-16 2xl:left-44 lg:w-[1056px] lg:h-[594px] lg:leading-[95px] 2xl:leading-[110px]'>
          "Every space has a story, we help you to tell it"
        </p>
        <p className='text-black lg:hidden px-7 mx-auto font-custom text-3xl lg:text-[108px] lg:w-[1056px] lg:h-[594px] lg:leading-[110px]'>
          Every space has a story,  we help you to tell it.
        </p>
      </div>
    </div>
    </>
  )
}
