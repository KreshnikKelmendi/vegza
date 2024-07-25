import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Contact from "../Contact";
import AboutProjects from "./AboutProjects";
import SecondDescriptionOfProjects from "./SecondDescriptionOfProjects";
import SecondProjects from "./SecondProjects";
import ThirdProjects from "./ThirdProjects";
import FourthProjects from "./FourthProjects";
import FifthProjects from "./FifthProjects";
import SixthProjects from "./SixthProjects";
import SeventhProjects from "./SeventhProjects";
import Header from "../../Header/Header";
import MobileProjects from "./MobileProjects";



gsap.registerPlugin(ScrollTrigger);

const ProjectsPage: React.FC = () => {
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
        <div className="description panel bg-[#0E0E0E]">
          <Header />
          {/* <div className="description panel bg-black"> */}
            <div>
              <AboutProjects />
              <div className="scroll-down">
                <div className="arrow"></div>
              </div>
            </div>
        </div>

        <div className="panel bg-[#0E0E0E]"><SecondDescriptionOfProjects /></div>
        <div className="panel bg-[#0E0E0E]"><SecondProjects /></div>
        <div className="panel bg-[#0E0E0E]"><ThirdProjects /></div>
        {/* <div className="panel bg-[#0E0E0E]"><FourthProjects /></div> */}
        {/* <div className="panel bg-[#0E0E0E]"><FifthProjects /></div>
        <div className="panel bg-[#0E0E0E]"><SixthProjects /></div>
        <div className="panel bg-[#0E0E0E]"><SeventhProjects /></div> */}
        <div className="panel bg-[#0E0E0E]"><Contact /></div>
      </div>
    </div>

    <div className="lg:hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="">
          <Header />
          {/* <div className="description panel bg-black"> */}
            <div>
            <AboutProjects /> 
            </div>
        </div>

        <div className="bg-[#0E0E0E]"><SecondDescriptionOfProjects /></div>
        <div className=""><MobileProjects /></div>
        {/* <div className=" bg-[#0E0E0E]"><ThirdProjects /></div>
        <div className="bg-[#0E0E0E]"><FourthProjects /></div>
        <div className=" bg-[#0E0E0E]"><FifthProjects /></div>
        <div className=" bg-[#0E0E0E]"><SixthProjects /></div>
        <div className=" bg-[#0E0E0E]"><SeventhProjects /></div> */}
        <div className="bg-[#0E0E0E]"><Contact /></div>
      </div>
    </div>

    </>
  );
}

export default ProjectsPage;