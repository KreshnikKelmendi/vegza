import React from 'react'
    import member1 from "../../assets/DSC04207.jpg"
    import member2 from "../../assets/DSC04831.jpg"
    import member4 from "../../assets/DSC04260.jpg"
import member5 from "../../assets/DSC04380.jpg"
import member6 from "../../assets/DSC04438.jpg"
import member7 from "../../assets/DSC04502.jpg"

const teamMembers = [   
  {
    id: 1,
    name: 'Milot Sulejmani',
    role: 'CEO & Founder',
    imageUrl: member1
  },
  {
    id: 2,
    name: 'Donat Kajtazi',
    role: 'Architect',
    imageUrl: member2
  },
  {
    id: 4,
    name: 'Alice Johnson',
    role: 'Urban Planner',
    imageUrl: member4
  },
  {
    id: 5,
    name: 'Alice Johnson',
    role: 'Urban Planner',
    imageUrl: member5
  },
  {
    id: 6,
    name: 'Alice Johnson',
    role: 'Urban Planner',
    imageUrl: member6
  },
  {
    id: 7,
    name: 'Alice Johnson',
    role: 'Urban Planner',
    imageUrl: member7
  },


 
 
]

const MobileTeam = () => {
  return (
    <div className='block lg:hidden lg:h-screen bg-white'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:h-screen font-custom'>
        <p
          id='my-text'
          className='vertical-text text-3xl px-7 lg:px-10 2xl:px-24 py-12 2xl:ml-16 font-light lg:py-0 lg:text-[78px] 2xl:text-[128px] font-custom text-black lg:leading-[73.45px]'
        >
          Our Team
        </p>
        <p className='lg:w-[630px] text-justify tracking-tighter px-7 lg:px-10 2xl:pr-20 text-[#050505] text-base leading-[21.33px] font-[250]'>
          Our team is composed of passionate professionals who bring a wealth of experience and a 
          diverse set of skills to every project. Each member of our team is dedicated to excellence. 
          We work collaboratively, combining our strengths to tackle complex challenges and deliver 
          innovative solutions. Our diverse backgrounds and perspectives fuel our creativity and drive 
          our commitment to pushing the boundaries of what is possible in architecture and design.
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-2 py-16 px-5 lg:px-0 gap-2 lg:gap-2'>
          {teamMembers?.map(member => (
            <div
              key={member.id}
              className="flex flex-col h-[28rem] bg-white lg:ml-3 2xl:ml-2 relative overflow-hidden border border-gray-200 rounded"
            >
              <div className="flex-1 w-full">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{ height: "100%" }}
                />
              </div>
              <div className="bg-[#0E0E0E] text-white p-4">
                <h3 className="text-xl lg:text-2xl 2xl:text-[40px] font-custom font-[250] lg:py-3">
                  {member.name}
                </h3>
                <p className="text-base mt-2 lg:text-[20px] font-light text-[#D9D9D9]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default MobileTeam
