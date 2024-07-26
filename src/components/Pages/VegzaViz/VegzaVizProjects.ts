import project1 from "../../assets/vegza-16.png"
import au1 from "../../assets/vegza-17.png"
import mondo1 from "../../assets/vegza-16.png"
import video1 from "../../assets/video/visualization1.mp4"

export interface VizProjectData {
    id: number;
    name: string;
    description: string;
    cover: string;
    video: any
  }


export const vizProjects: VizProjectData[] = [
    {
      id: 1,
      name: "The Village Cafe",
      description: "Ferizaj/Kosovo",
      cover: project1,
      video: video1,
    },

    {
      id: 2,
      name: "AU' Apartment",
      description: "Prizren/Kosovo",
      cover: au1,
      video: video1
    },

    {
      id: 3,
      name: "Mondo Caffe",
      description: "Peja/Kosovo",
      cover: mondo1,
      video: video1
    },

  ];
  