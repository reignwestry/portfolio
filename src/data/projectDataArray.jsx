import ACME_thumb from  "/src/assets/imgs/project_thumbs/ACME_thumbnail.png";
import Tip_Calc_thumb from "/src/assets/imgs/project_thumbs/Tip_Calc_thumbnail.png";
import RECIPE_thumb from "/src/assets/imgs/project_thumbs/Sconce_thumb.png";
import AppTheme_thumb from "/src/assets/imgs/project_thumbs/AppTheme_thumb.png";
import Massage_Parlor_Thumb from "/src/assets/imgs/project_thumbs/MassageByTia_thumb.png";
import DayCare_thumb from "/src/assets/imgs/project_thumbs/DayCare_thumb.png";
import Fudi_thumb from "/src/assets/imgs/project_thumbs/Fudi_thumb.png";
import ONMIFOOD_thumb from "/src/assets/imgs/project_thumbs/OMNIFOOD_thumb.png";
import ShoutIt_thumb from "/src/assets/imgs/project_thumbs/shoutit_thumb.png";
import DiceGame_thumb from "/src/assets/imgs/project_thumbs/Dice_Game_thumb.png";
import Vineyard_thumb from "/src/assets/imgs/project_thumbs/Vineyard_thumb.png";
import Girl_Scouts_Form_thumb from "/src/assets/imgs/project_thumbs/Girl_Scouts_Form_thumb.png";
// import Quizzer_thumb from "/src/assets/imgs/project_thumbs/Quzzer_thumb";

//===============

//jsx array with key === (id)
const Projects = [
  {
    id: 1,
    name: "Scone Recipe",
    image: { RECIPE_thumb },
    type: "website",
    tech: "HTML, CSS, JavaScript, etc",
    link: "/projects/scones",
    github: "GITHUB link",
  },
  {
    id: 2,
    name: "ACME",
    image: { ACME_thumb },
    type: "Website",
    tech: "PHP, HTML5, CSS3",
    link: "/projects/acme",
    github: "https://github.com/reignwestry/mobile-first-acme-photography",
  },
  {
    id: 3,
    name: "Tip Calculator",
    image: { Tip_Calc_thumb },
    type: "Website",
    tech: "HTML, CSS, Js",
    link: "/projects/tipcalc",
    github: "https://github.com/reignwestry/JS-Tip-Calculator",
  },
  {
    id: 4,
    name: "AppTheme",
    image: { AppTheme_thumb },
    type: "Website",
    tech: "HTML, CSS, Js",
    link: "/projects/apptheme",
    github: "GITHUB link",
  },
  {
    id: 5,
    name: "Massage Parlor",
    image: { Massage_Parlor_Thumb },
    type: "react app",
    tech: "reactjs, jsx, scss, expressjs",
    link: "/projects/massageparlor",
    github: "GITHUB link",
  },
  {
    id: 6,
    name: "OMNIFOOD",
    image: { ONMIFOOD_thumb },
    type: "Website",
    tech: "HTML, CSS, Js",
    link: "/projects/omnifood",
    github: "GITHUB link",
  },
  {
    id: 7,
    name: "Day Care Center",
    image: { DayCare_thumb },
    type: "Website",
    tech: "HTML, CSS, PHP",
    link: "/projects/daycare",
    github: "GITHUB link",
  },
  {
    id: 8,
    name: "Fudi",
    image: { Fudi_thumb },
    type: "Website",
    tech: "HTML, CSS",
    link: "/projects/fudi",
    github: "GITHUB link",
  },
  // {
  //   id: 7,
  //   name: "QUIZZER",
  //   image: { Quizzer_thumb },
  //   type: "Website",
  //   tech: "HTML, CSS, PHP",
  //   link: "/projects/quizzer",
  //   github: "GITHUB link",
  // },
  {
    id: 8,
    name: "Vineyard Email",
    image: { Vineyard_thumb },
    type: "Email",
    tech: "HTML, CSS, PHP",
    link: "/projects/vineyardemail",
    github: "GITHUB link",
  },
  {
    id: 9,
    name: "Shout It",
    image: { ShoutIt_thumb },
    type: "Email",
    tech: "HTML, CSS, PHP",
    link: "/projects/shoutit",
    github: "GITHUB link",
  },
  {
    id: 10,
    name: "Dice Game",
    image: { DiceGame_thumb },
    type: "Email",
    tech: "HTML, CSS, PHP",
    link: "/projects/dicegame",
    github: "GITHUB link",
  },
  // { //todo CREATE THE PROJECT OR etc.
  //   id: 11,
  //   name: "Mad Hatter",
  //   image: "./../../projects/17-1MADHATTER-wordpress/thumbnail.png",
  //   type: "Website",
  //   tech: "HTML, CSS, PHP",
  //   link: "./../../projects/17-1MADHATTER-wordpress/index.php",
  //   github: "GITHUB link",
  // },
  {
    id: 12,
    name: "Girl Scouts Form",
    image: { Girl_Scouts_Form_thumb },
    type: "Website",
    tech: "HTML, CSS",
    link: "./../../projects/06-GirlScoutForm/index.html",
    github: "GITHUB link",
  },
  // {
  //   id: 13,
  //   name: "Vape Store",
  //   image: "no image",
  //   type: "react app",
  //   tech: "reactjs, jsx, scss, expressjs",
  //   link: "./../../projects/19-Expressjs-REMOTE-SERVER-TEMPLATE/index.js",
  //   github: "GITHUB link",
  // },
];


export default Projects;
