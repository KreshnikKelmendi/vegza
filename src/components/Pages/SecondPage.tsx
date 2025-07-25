import React, { useEffect, useRef } from 'react'
// import vegza1 from "../assets/homeBanner.png"
import SplitType from 'split-type'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

export const SecondPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const splitRef = useRef<SplitType | null>(null)

  useEffect(() => {
    const el = document.getElementById('my-text')
    if (inView && el) {
      splitRef.current = new SplitType(el, { types: 'words' })
      gsap.set('.word', { scale: 0.5, opacity: 0 })
      gsap.to('.word', {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        delay: 0.2,
        duration: 0.7,
        ease: 'back.out(1.7)'
      })
    }
    return () => {
      if (splitRef.current) {
        splitRef.current.revert()
        splitRef.current = null
      }
    }
  }, [inView])

  return (
    <div className='w-full flex flex-col lg:flex-row mt-[-110px] lg:mt-0'>
      <div className='bg-white py-10 lg:h-screen w-full relative'>
        <p
          ref={ref}
          id="my-text"
          className='text-black hidden lg:block font-light font-custom text-2xl lg:text-[98px] 2xl:text-[108px] text-left absolute lg:top-40 2xl:top-96 lg:left-16 2xl:left-44 lg:w-[1056px] lg:h-[594px] lg:leading-[95px] 2xl:leading-[110px]'
        >
          "Every space has a story, we help you to tell it"
        </p>
        <p className='text-black lg:hidden px-7 mx-auto font-custom text-3xl lg:text-[108px] lg:w-[1056px] lg:h-[594px] lg:leading-[110px]'>
          Every space has a story,  we help you to tell it.
        </p>
      </div>
    </div>
  )
}
