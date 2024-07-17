import React from 'react'
import member4 from "../../assets/rfederer.jpg"
import member5 from "../../assets/rafa.jpg"

const teamMembers = [
  {
    id: 1,
    name: 'Roger Federer',
    role: 'Architect',
    imageUrl: member4
  },
  {
    id: 2,
    name: 'Rafael Nadal',
    role: 'Interior Designer',
    imageUrl: member5
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Urban Planner',
    imageUrl: member4
  },
  {
    id: 4,
    name: 'Alice Johnson',
    role: 'Urban Planner',
    imageUrl: member4
  },
]

const SecondTeam = () => {
  return (
    <div className='h-screen bg-white'>
      <div className='flex items-center h-screen font-custom'>
      <div className='grid grid-cols-2 lg:grid-cols-4 py-10 px-5 lg:px-0 gap-2 lg:gap-0'>
          {teamMembers.map(member => (
            <div key={member.id} className='lg:ml-3 2xl:ml-2 relative'>
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className='h-[35ch] w-full lg:h-screen object-cover'
              />
              <div className='lg:absolute lg:bottom-0 left-0 right-0 bg-[#0E0E0E] text-white p-4'>
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

export default SecondTeam
