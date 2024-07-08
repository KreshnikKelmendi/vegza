import { Link } from "react-router-dom";
import vegza2 from "../assets/vegza-6.png";

export const Services = () => {
  
  return (
    <div className='w-full lg:h-screen flex flex-col lg:flex-row font-custom'>
      <div className='lg:w-1/2' >
        <img src={vegza2} alt='' className='w-full lg:w-[3000px] h-80 lg:h-screen object-cover' />
      </div>    
      <div className='px-5 lg:px-0 py-5 lg:py-0 lg:w-1/2 bg-white lg:h-screen lg:pl-16 flex flex-col items-start justify-center'>
        <p className='text-3xl lg:text-[40px] font-light'>Services</p>
        <p className='text-[#050505] mt-6 font-custom text-sm lg:text-[18px] lg:w-[88%] 2xl:w-[649px] lg:h-fit text-justify leading-[23.99px]'>
          Praktika të ndryshme të arkitekturës. E themeluar nga Robert Downey Jr në 2004, ne jemi një firmë në pronësi të punonjësve që ndjekim një proces dizajni demokratik që vlerëson kontributin e të gjithëve. Sot ne kemi më shumë se 150 njerëz në Londër, Hong Kong dhe Sidnei që ofrojnë shërbime arkitekture, dizajni të brendshëm dhe urban nga koncepti deri në përfundim.
        </p>
        <Link to="/services">
          <button className='w-[204px] h-[42px] text-black border font-custom border-black hover:bg-black hover:text-white hover:duration-300 mt-6 text-sm lg:text-base font-semibold'>
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};
