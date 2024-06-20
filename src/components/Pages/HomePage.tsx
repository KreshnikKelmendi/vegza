import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { SecondPage } from "./SecondPage";
import  FirstPage  from "./FirstPage";
import { ThirdPage } from "./ThirdPage";
import { FourthPage } from "./FourthPage";
import { Services } from "./Services";
import OurSpecialization from "./OurSpecialization";
import Interior from "./Interior";


gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  const component = useRef<HTMLDivElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray<HTMLDivElement>(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current!.offsetWidth,
          markers: false
        }
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <>
    <div className="hidden lg:block" ref={component}>
      <div ref={slider} className="w-fit flex flex-col lg:flex-row">
        <div className="description panel bg-[#0E0E0E]">
          {/* <div className="description panel bg-black"> */}
            <div>
              <FirstPage />
              <div className="scroll-down">
                <div className="arrow"></div>
              </div>
            </div>
        </div>

        <div className="panel bg-black"><SecondPage /></div>
        <div className="panel orange"><ThirdPage /></div>
        <div className="panel purple"><FourthPage /></div>
        <div className="panel purple"><Services /></div>
        <div className="panel bg-[#0E0E0E]"><OurSpecialization /></div>
        <div className="panel bg-[#0E0E0E]"><Interior /></div>
      </div>
    </div>

    <div className="lg:hidden">
      <div className="flex flex-col lg:flex-row">
        <div className=" bg-black">
          {/* <div className="description panel bg-black"> */}
            <div>
              <FirstPage />
             
            </div>
        </div>

        <div className="bg-black"><SecondPage /></div>
        <div className=" orange"><ThirdPage /></div>
        <div className="purple"><FourthPage /></div>
        <div className="bg-white"><Services /></div>
        <div className="bg-[#0E0E0E]"><OurSpecialization /></div>
      </div>
    </div>

    </>
  );
}

export default HomePage;
