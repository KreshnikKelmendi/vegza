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
    role: 'Interior Designer',
    imageUrl: member1
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Urban Planner',
    imageUrl: member1
  },
  {
    id: 4,
    name: 'Alice Johnson',
    role: 'Urban Planner',
    imageUrl: member1
  },
]

const SecondTeam = () => {
  return (
    <div className='h-screen bg-white'>
      <div className='flex items-center h-screen font-custom'>
        <div className='flex py-10'>
          {teamMembers.map(member => (
            <div key={member.id} className='ml-3 2xl:ml-2'>
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className='w-full h-screen object-cover mx-auto relative'
              />
              <div className='absolute bottom-0 bg-[#0E0E0E] text-white p-4'>
              <h3 className='2xl:text-[40px] font-custom font-[250]'>{member.name}</h3>
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
