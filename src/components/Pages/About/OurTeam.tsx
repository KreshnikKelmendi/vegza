import React from 'react'
import member1 from "../../assets/member1.png"

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Architect',
    imageUrl: member1
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Designer',
    imageUrl: member1
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Urban Planner',
    imageUrl: member1
  },
 
]

const OurTeam = () => {
  return (
    <div className='lg:h-screen bg-white'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:h-screen font-custom'>
        <p
          id='my-text'
          className='vertical-text text-2xl px-5 lg:px-10 2xl:px-24 py-10 font-light lg:py-0 lg:text-[78px] 2xl:text-[128px] font-custom text-black lg:leading-[73.45px]'
        >
          Our Team
        </p>
        <p className='lg:w-[530px] text-justify tracking-tighter px-5 lg:px-10 2xl:pr-24 text-[#050505] text-base leading-[21.33px] font-[250]'>
          Praktika të ndryshme të arkitekturës. E themeluar nga Robert Downey Jr në 2004, 
          ne jemi një firmë në pronësi të punonjësve që ndjekim një proces dizajni demokratik 
          që vlerëson kontributin e të gjithëve. Sot ne kemi më shumë se 150 njerëz në Londër, 
          Hong Kong dhe Sidnei që ofrojnë shërbime arkitekture, dizajni të brendshëm dhe urban nga 
          koncepti deri në përfundim.
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-3 py-10 px-5 lg:px-0 gap-2 lg:gap-0'>
          {teamMembers.map(member => (
            <div key={member.id} className='lg:ml-3 2xl:ml-2'>
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className='h-[35ch] w-full lg:h-screen object-cover relative'
              />
              <div className='lg:absolute lg:bottom-0 bg-[#0E0E0E] text-white p-4'>
              <h3 className='text-2xl 2xl:text-[40px] font-custom font-[250]'>{member.name}</h3>
                <p className='text-[20px] font-light text-[#D9D9D9]'>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam
