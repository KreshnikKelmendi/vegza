import { Link } from "react-router-dom";
import vegza2 from "../assets/Asset 11.png";
import vegza1 from "../assets/Asset 15.png";
import vegza3 from "../assets/Asset 17.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import vegza4 from "../assets/asset1.png"
import vegza5 from "../assets/asset2.png"
import vegza6 from "../assets/asset3.png"
import video3 from "../assets/videoSlider.mp4"

const images = [vegza1, vegza2, vegza3];

const images1 = [vegza4, vegza5, vegza6];

export const Services = () => {

  const carouselResponsiveConfig = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  
  return (
    <div className='w-full lg:h-screen flex flex-col lg:flex-row font-custom'>
      <div className='lg:w-1/2 hidden lg:block border border-[#E6E7E8] bg-[#E6E7E8] 2xl:ml-[-190px]' >
      <video
        src={video3}
        autoPlay
        loop
        muted
        playsInline
        className='w-full hidden lg:h-screen lg:block'
      />
      </div> 
      <div className='px-7 lg:px-0 py-16 lg:py-0 w-full lg:w-1/2 bg-white lg:h-screen lg:pl-16 flex flex-col items-start justify-center'>
        <p className='text-3xl lg:text-[40px] font-light'>Services</p>
        <p className='text-[#050505] mt-6 font-custom text-sm lg:text-[18px] lg:w-[88%] 2xl:w-[609px] lg:h-fit text-justify leading-[23.99px] 2xl:pr-16 tracking-tight'>
        We offer a comprehensive range of services to meet every design and architectural 
        need. Each service is crafted to bring quality and innovation into every space, 
        creating solutions that are both beautiful and functional. Explore our services and 
        discover how we can contribute to realizing your vision.
        </p>
        <Link className="w-full" to="/services" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
          <button className="w-full lg:w-[204px] h-[42px] text-black border font-custom border-black hover:bg-black hover:text-white hover:duration-300 mt-6 text-sm lg:text-base font-semibold"
          >
            <p>See More</p>
          </button>
        </Link>
      </div>
    </div>
  );
};
