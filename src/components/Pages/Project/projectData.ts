import project1 from "../../assets/village-1.jpg"
import image1 from "../../assets/village-2.jpg"
import image2 from "../../assets/village-3.jpg"
import image3 from "../../assets/village-4.jpg"

import au1 from "../../assets/au-1.jpg"
import au2 from "../../assets/au-2.jpg"
import au3 from "../../assets/au3.jpg"
import au4 from "../../assets/au-4.jpg"

import mondo1 from "../../assets/mondo-1.jpg"
import mondo2 from "../../assets/mondo-2.jpg"
import mondo3 from "../../assets/mondo-3.jpg"
import mondo4 from "../../assets/mondo-5.jpg"

import shouse1 from "../../assets/shouse-1.jpg"
import shouse2 from "../../assets/shouse-2.jpg"
import shouse3 from "../../assets/shouse3.jpg"
import shouse4 from "../../assets/shouse-4.jpg"

import flur1 from "../../assets/flur1.jpg"
import flur2 from "../../assets/flur-2.jpg"
import flur3 from "../../assets/flur-5.jpg"
import flur4 from "../../assets/flur-6.jpg"

import salkin1 from "../../assets/salkin-1.jpg"
import salkin2 from "../../assets/salkin-2.jpg"
import salkin3 from "../../assets/salkin-3.jpg"
import salkin4 from "../../assets/salkin-4.jpg"

import humolli1 from "../../assets/humolli-1.jpg"
import humolli2 from "../../assets/humolli-2.jpg"
import humolli3 from "../../assets/humolli-3.jpg"
import humolli4 from "../../assets/humolli-4.jpg"

import gb1 from "../../assets/gb-1.jpg"
import gb2 from "../../assets/gb-2.jpg"
import gb3 from "../../assets/gb-3.jpg"
import gb4 from "../../assets/gb-4.jpg"

import goTravel1 from "../../assets/gotravel-1.jpg"
import goTravel2 from "../../assets/gotravel-2.jpg"
import goTravel3 from "../../assets/gotravel-3.jpg"
import goTravel4 from "../../assets/gotravel-4.jpg"

import walone1 from "../../assets/walone-1.jpg"
import walone2 from "../../assets/walone-2.jpg"
import walone3 from "../../assets/walone-3.jpg"
import walone4 from "../../assets/walone-4.jpg"

import ghouse1 from "../../assets/ghouse-1.jpg"
import ghouse2 from "../../assets/ghouse-2.jpg"
import ghouse3 from "../../assets/ghouse-3.jpg"
import ghouse4 from "../../assets/ghouse-4.jpg"

import burger1 from "../../assets/burger-1.jpg"
import burger2 from "../../assets/burger-2.jpg"
import burger3 from "../../assets/burger-3.jpg"
import burger4 from "../../assets/burger-4.jpg"

import gf1 from "../../assets/gf-1.jpg"
import gf2 from "../../assets/gf-2.jpg"
import gf3 from "../../assets/gf-3.jpg"
import gf4 from "../../assets/gf-5.jpg"

import as1 from "../../assets/as-1.jpg"
import as2 from "../../assets/as-2.jpg"
import as3 from "../../assets/as-3.jpg"
import as4 from "../../assets/as-4.jpg"

import ss1 from "../../assets/ss-1.jpg"
import ss2 from "../../assets/ss-2.jpg"
import ss3 from "../../assets/ss-3.jpg"
import ss4 from "../../assets/ss-4.jpg"

import fi1 from "../../assets/fi-1.jpg"
import fi2 from "../../assets/fi-2.jpg"
import fi3 from "../../assets/fi-3.jpg"
import fi4 from "../../assets/fi-4.jpg"

import mondoferizaj1 from "../../assets/mondoferizaj-1.jpg"
import mondoferizaj2 from "../../assets/mondoferizaj-2.jpg"
import mondoferizaj3 from "../../assets/mondoferizaj-3.jpg"
import mondoferizaj4 from "../../assets/mondoferizaj-4.jpg"

import bphome1 from "../../assets/bphome-1.jpg"
import bphome2 from "../../assets/bphome-2.jpg"
import bphome3 from "../../assets/bphome-3.jpg"
import bphome4 from "../../assets/bphome-4.jpg"

import gjirafa1 from "../../assets/gjirafa-1.jpg"
import gjirafa2 from "../../assets/gjirafa-2.jpg"
import gjirafa3 from "../../assets/gjirafa-3.jpg"
import gjirafa4 from "../../assets/gjirafa-4.jpg"


export interface ProjectData {
    id: number;
    name: string;
    description: string;
    cover: string;
    firstImage: string;
    secondImage: string;
    thirdImage: string;
    jobDescription: string;
  }


export const projects: ProjectData[] = [
    {
      id: 1,
      name: "The Village Cafe",
      description: "Ferizaj/Kosovo",
      cover: project1,
      firstImage: image1,
      secondImage: image2,
      thirdImage: image3,
      jobDescription: "The Village Coffee is a coffee shop where modern elegance meets inviting warmth in every corner. Beige tones dominate, offering a calming atmosphere, while Lavazza's vibrant blue colors and the texts on the floor add contrast, blending seamlessly with fluid forms in the space. Microcement accents enhance the contemporary vibe, exemplifying our commitment to innovative design, where every detail is meticulously curated to create a memorable space.",
    },

    {
      id: 2,
      name: "AU' Apartment",
      description: "Prizren/Kosovo",
      cover: au1,
      firstImage: au2,
      secondImage: au3,
      thirdImage: au4,
      jobDescription: "We have worked on bringing Zen concept into our design. Zen is a japanese style of design. It focuses on creating an environment of peace and relaxation, by turning the home into an inner sanctuary. We have achived this by using calming nuances and clean forms. Using natural stone brings a strong accent to the whole space and in a sense it brings nature inside. The classic kitchen is a contrast that makes the whole space all the more unique.",
    },

    {
      id: 3,
      name: "Mondo Caffe",
      description: "Peja/Kosovo",
      cover: mondo1,
      firstImage: mondo2,
      secondImage: mondo3,
      thirdImage: mondo4,
      jobDescription: "Mondo's interior is characterised by it's classic design and vintage aesthetics giving accent to the taste of coffee and cakes. The strong nuance of navy blue interferences on the whole classic interior giving the whole space a bold accent. The Dome in the middle with the bar underneath  takes the focus of the whole space, the function of the café is based around it, while also being an eyecatching design. Finally, the handmade paintings on the dome are that final personal touch like a cherry on top."
    },

    {
      id: 4,
      name: "S'House",
      description: "Pristina/Kosovo",
      cover: shouse1,
      firstImage: shouse2,
      secondImage: shouse3,
      thirdImage: shouse4,
      jobDescription: "A neutral modern ambiance, with fluid contemporary details. S' House is a very balanced space in sense of design, it gives you a feeling of calmness and equality, and definitely, not the basic home. The boucle furniture give the whole space a sense of warmth but, without changing the neutrality of colors which is experienced in the whole house."
    },
    {
        id: 5,
        name: "Flur im Showroom",
        description: "Pristina/Kosovo",
        cover: flur1,
        firstImage: flur2,
        secondImage: flur3,
        thirdImage: flur4,
        jobDescription: "A combination of elegance with industrial design. Flur Im interior is a unique design where everything fits together to the smallest detail. Characterised by full arches where each of their radius is connected linearly. The green color of nature combined with white natural stone creates a calming balance in the whole space. The two main focus points are the arched white zones surrounded with curtains where the uniform cieling and in the columns light gives the whole space elegance and makes it all the more unique. Every detail is meant to rest in its own place, everything linked together to create one big unified ambience."
      },
      {
        id: 6,
        name: "Orhan Salkin Hair Salon",
        description: "Pristina/Kosovo",
        cover: salkin1,
        firstImage: salkin2,
        secondImage: salkin3,
        thirdImage: salkin4,
        jobDescription: "A combination of elegance and industrial design. Two opposites that fit perfectly in our design. A uniform space which emits emotions of balance and equality, where warm colors blend perfectly with strong and cold materials."
      },

      {
        id: 7,
        name: "Humolli Apartment",
        description: "Pristina/Kosovo",
        cover: humolli1,
        firstImage: humolli2,
        secondImage: humolli3,
        thirdImage: humolli4,
        jobDescription: "A modern and clean space, with neutral materials only boosted by details of wood. The natural lighting on the ceiling brings the nature inside, while the wall details of round corners make the space more fluid."
      },

      {
        id: 8,
        name: "GB Showroom",
        description: "Suhareke/Kosovo",
        cover: gb1,
        firstImage: gb2,
        secondImage: gb3,
        thirdImage: gb4,
        jobDescription: "GB interior is a simple modern yet luxury design. The whole space is defined by a fluidity of elements and forms, in both the walking line and exhibition spaces. It is characterized by a neutral color dominating the interior. All spaces are separated by curtains of the same neutral beige color, which also function as a background for the exposed dresses, this way not competing with the products, but making them come in first plan. Furthermore, strong details of natural stone make the interior more livid and extraordinary."
      },

      {
        id: 9,
        name: "Go Travel",
        description: "Pristina/Kosovo",
        cover: goTravel1,
        firstImage: goTravel2,
        secondImage: goTravel3,
        thirdImage: goTravel4,
        jobDescription: "The concept of “Go Travel” is based on the four seasons. Spring, Summer, Autumn and, Winter are all shown in different parts of the design and when everything comes together it creates a warm and welcoming space. Spring is expressed by details of wood and ceramic, while Summer is all around the floor where there is beach sand covered by glass. There are details of dry trees for Autumn and, the imitation of snow on the walls to symbolize Winter. Considering the nature of the company, a travel company, the idea was to bring a little bit of every “holiday” in one place in order to inspire the travelers to choose their next destination."
      },

      {
        id: 10,
        name: "Walone Fashion Group",
        description: "Prizren/Kosovo",
        cover: walone1,
        firstImage: walone2,
        secondImage: walone3,
        thirdImage: walone4,
        jobDescription: "The showroom of Walone Fashion is a modern design that screams of luxury. A simple design, with clean lines where the main color is white yet every detail is eye-catching. The white mosaic tiles and the glass blocks in the facade give the building a classy and proud look. Simplicity, when used right, speaks of timelessness and luxury and that is exactly what this design is."
      },

      {
        id: 11,
        name: "G House",
        description: "Pristina/Kosovo",
        cover: ghouse1,
        firstImage: ghouse2,
        secondImage: ghouse3,
        thirdImage: ghouse4,
        jobDescription: "G House is a modern contemporary space. The whole design is simple yet it speaks of luxury. In every corner there is an eye catching detail which makes the space all the more unique. The whole space is from shades of grey but what catches the eye is the violet color in the details. The materials used are marble and white wood while the furniture make the whole space more approachable with a velvety touch."
      },

      {
        id: 12,
        name: "The Burger Shop",
        description: "Pristina/Kosovo",
        cover: burger1,
        firstImage: burger2,
        secondImage: burger3,
        thirdImage: burger4,
        jobDescription: "Eye catching since the first moment you see the place. The Burger Shop is a modern design, where the color red gives a strong accent in the design while the black and white tiles tone it down. In bases, it as a fast food place but we made it look much fancier and unforgettable."
      },

      {
        id: 13,
        name: "GF Apartment",
        description: "Pristina/Kosovo",
        cover: gf1,
        firstImage: gf2,
        secondImage: gf3,
        thirdImage: gf4,
        jobDescription: "GF Apartment is a modern design with clean lines and forms but the colors and materials are what make it special. The use of concrete makes the space neutral while the wood gives it warmth and life. The use of colors in certain details makes them pop while making the whole design come together and look eye catching."
      },

      {
        id: 14,
        name: "A.S. Apartment",
        description: "Tirana/Albania",
        cover: as1,
        firstImage: as2,
        secondImage: as3,
        thirdImage: as4,
        jobDescription: "When designing a home Interior design is not just about creating aesthetic is much more about comfort and calmness. The A.S. apartment is an artistic space. In general, relaxing and minimalist by the use of calm materials and colors. However, we have added a pop of strong colors that create a lively atmosphere. The perfect balanced design for a homey interior."
      },

      {
        id: 15,
        name: "Senses Restaurant",
        description: "Pristina/Kosovo",
        cover: ss1,
        firstImage: ss2,
        secondImage: ss3,
        thirdImage: ss4,
        jobDescription: `The interior of "Senses Restaurant" was designed to the smallest detail. The classic design merges harmoniously with modernism. The ceiling is designed with classical details but in a dark color, which blends perfectly with the concrete walls and the mosaic tile flooring. The whole space is mostly with the shades of grey to white. However the handmade paintings in the walls give an artistic touch and the details of the frames are eye catching and unique. While the warm colors of the lightning makes the whole space more comfortable while keeping the luxury look of the Restaurant.`
      },

      {
        id: 16,
        name: "Fimar International",
        description: "Ulcinj/Montenegro",
        cover: fi1,
        firstImage: fi2,
        secondImage: fi3,
        thirdImage: fi4,
        jobDescription: `The hotel room of porto Milena is designed in modern contemporary style. It is dynamic and warm at first sight, which is created by combining different materials such as concrete, black and white tiles and wood. The brown leather bed is an eye catcher and contributes to the dynamism of materials. When looked in general, besides being modern and dynamic, above all the interior has a calming effect, a power to make every client feel special and to enjoy their stay in the hotel.`
      },

      {
        id: 17,
        name: "Mondo Caffe",
        description: "Ferizaj/Kosovo",
        cover: mondoferizaj1,
        firstImage: mondoferizaj2,
        secondImage: mondoferizaj3,
        thirdImage: mondoferizaj4,
        jobDescription: `As Juan Montoya said:”A room should never allow the eye to settle in one place, it should smile at you and create fantasy!” and that is how the interior of “Mondo” makes you feel at comfort and yet never rest your eyes in one place. Designed to grab your attention with each detail and yet have you feel rested while enjoying its view. In essence the design started with only two base colors: dark blue and light pink, which creates a balance for the eye; afterwards there were added the details that make the space look luxury but also very modern and contemporary. We wanted to create a space that would bring all generations together and we believe mondo has that kind of vibe now. It can make everyone find its comfortable corner and enjoy the place without feeling like an outsider.`
      },

      {
        id: 18,
        name: "BP Home",
        description: "Pristina/Kosovo",
        cover: bphome1,
        firstImage: bphome2,
        secondImage: bphome3,
        thirdImage: bphome4,
        jobDescription: `“The colors and the design of a home should be a reflection of the people who live inside” BP Home is a contemporary and modern interior design. Designed as a family house, it is homy, cozy, and colorful. The pastel colors give life to the simple design, while the natural light ads to the comfort. The whole design is meant to bring peace and confort, while at the same time be full of life and exciting. A combination that is the definition of a balanced and happy home.`
      },

      {
        id: 19,
        name: "Gjirafa",
        description: "Pristina/Kosovo",
        cover: gjirafa1,
        firstImage: gjirafa2,
        secondImage: gjirafa3,
        thirdImage: gjirafa4,
        jobDescription: `The interior for Gjirafa was analyzed carefully and treated in a way that it would represent the company since first glance. The interior is modern, contemporary with a taste of industrialism and the main materials that we used are metal and concrete. The colors and style of interior is inspired by the brand of the company. While the idea to use darker colors was so the main attention would be on the products.  The whole space is functional and easy to be accessed, without leaving behind the approachable and attractive design that will be one with the company’s brand.`
      },
  ];
  