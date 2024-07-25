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
            description: 'We create interior spaces that are more than just functional – we make them feel like a true reflection of your style and personality. Our interior design services include space planning, material selection, and customized finishes to craft environments that are warm, comfortable, and refined.',
            image: service2, 
          },

          {
            id: 2,
            title: 'VISUALIZATIONS & ANIMATIONS',
            description: 'To bring your ideas to life before construction begins, we provide advanced visualizations and animations. These powerful tools help us create detailed and vivid representations of projects, allowing clients to see and experience their concepts in a clear and tangible form.',
            image: service1, 
          },

          {
            id: 3,
            title: 'ARCHITECTURE',
            description: 'We approach architecture with a deep sense of aesthetics and functionality. From large-scale, sophisticated projects to smaller, personalized designs, we create plans that bring your vision to life and meet the needs and desires of our clients.',
            image: service3,
          },
    
  ]