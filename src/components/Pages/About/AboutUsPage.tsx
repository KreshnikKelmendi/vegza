import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutDescription from "./AboutDescription";
import SecondDescriptionOfAbout from "./SecondDescriptionOfAbout";
import OurTeam from "./OurTeam";
import SecondTeam from "./SecondTeam";
import Contact from "../Contact";
import Header from "../../Header/Header";


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
        <div className="description panel bg-[#0E0E0E]">
          {/* <div className="description panel bg-black"> */}
          <Header />
            <div>
              <AboutDescription />
              <div className="scroll-down">
                <div className="arrow"></div>
              </div>
            </div>
        </div>

        <div className="panel bg-[#0E0E0E]"><SecondDescriptionOfAbout /></div>
        <div className="panel bg-[#0E0E0E]"><OurTeam /></div>
        <div className="panel bg-[#0E0E0E]"><SecondTeam /></div>
        <div className="panel bg-[#0E0E0E]"><Contact /></div>
      </div>
    </div>

    <div className="lg:hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="">
          <Header />
          {/* <div className="description panel bg-black"> */}
            <div>
              <AboutDescription />
            </div>
        </div>

        <div className=""><SecondDescriptionOfAbout /></div>
        <div className=""><OurTeam /></div>
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