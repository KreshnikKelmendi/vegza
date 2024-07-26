import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Contact from "../Contact";
import SingleViz from "./SingleViz";


gsap.registerPlugin(ScrollTrigger);

const SinglePageOfVizProjects: React.FC = () => {
  const component = useRef<HTMLDivElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray<HTMLDivElement>(".panelisima");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 0 / (panels.length - 1),
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
        <div className="panel bg-white">
          {/* <div className="description panel bg-black"> */}
            <div>
             <SingleViz />
              <div className="scroll-down">
                <div className="arrow"></div>
              </div>
            </div>
        </div>

      
        <div className="panel"><Contact /></div>
      </div>
    </div>

    <div className="lg:hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="">
          {/* <div className="description panel bg-black"> */}
            <div className="bg-white">
             <SingleViz />
            </div>
            <div className=" bg-[#0E0E0E]"><Contact /></div>
        </div>
      </div>
    </div>

    </>
  );
}

export default SinglePageOfVizProjects;
