import service1 from '../../assets/vegza-7.png';
import service2 from "../../assets/vegza-8.png";
import service3 from "../../assets/vegza-9.png";

export interface ServiceData {
    id: number;
    title: string;
    description: string;
    image: any;
  }

  export const services: ServiceData[] = [
    
          {
            id: 1,
            title: 'INTERIOR',
            description: 'Inter’s singular aim is to design the best buildings, places and spaces in the world. Inter’s singular aim is to design the best buildings, places and spaces in the world. A central part of this is providing the complete design of buildings across a range of sectors.',
            image: service2, 
          },

          {
            id: 2,
            title: 'VISUALIZATIONS & ANIMATIONS',
            description: 'Description for Specialty 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: service1, 
          },

          {
            id: 3,
            title: 'ARCHITECTURE',
            description: 'Description for Specialty 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            image: service3,
          },
    
  ]