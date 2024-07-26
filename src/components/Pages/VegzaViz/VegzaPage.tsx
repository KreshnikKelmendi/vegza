import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutVegzaViz from "./AboutVegzaViz";
// import SecondDescriptionOfVegzaViz from "./SecondDescriptionOfVegza";
import Contact from "../Contact";
import Header from "../../Header/Header";
// import VegzaVizProject from "./VegzaVizProject";
import ProjectsVegzaViz from "./ProjectsVegzaViz";
import MobileVegzaVizProjects from "./MobileVegzaVizProjects";



gsap.registerPlugin(ScrollTrigger);

const AboutUsPage: React.FC = () => {
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
        <div className="description panel bg-[#A8FF00]">
          <Header />
          {/* <div className="description panel bg-black"> */}
            <div>
              <AboutVegzaViz />
              <div className="scroll-down">
                <div className="arrow"></div>
              </div>
            </div>
        </div>

        {/* <div className="panel bg-[#0E0E0E]"><SecondDescriptionOfVegzaViz /></div> */}
        <div className="panel bg-[#A8FF00]"><ProjectsVegzaViz /></div>
        <div className="panel bg-[#0E0E0E]"><Contact /></div>
      </div>
    </div>

    <div className="lg:hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="bg-[#A8FF00]">
        <Header />
          {/* <div className="description panel bg-black"> */}
            <div>
              <AboutVegzaViz />
            </div>
        </div>

        {/* <div className=""><SecondDescriptionOfVegzaViz /></div>
        <div className=""><VegzaVizProject /></div> */}
        <div className=""><MobileVegzaVizProjects /></div>
        <div className=""><Contact /></div>
        <div className="bg-white"></div>
        <div className="bg-[#0E0E0E]"></div>
        <div className="bg-[#0E0E0E]"></div>
        <div className="bg-[#0E0E0E]"></div>
        <div className="bg-[#0E0E0E]"></div>
      </div>
    </div>

    </>
  );
}

export default AboutUsPage;