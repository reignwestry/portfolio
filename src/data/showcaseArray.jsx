import RECIPE_thumb from './../assets/imgs/project_thumbs/Sconce_thumb.png';
import ACME_thumb from './../assets/imgs/project_thumbs/ACME_thumbnail.png';
import Tip_Calc_thumb from './../assets/imgs/project_thumbs/Tip_Calc_thumbnail.png';
import AppTheme_thumb from './../assets/imgs/project_thumbs/AppTheme_thumb.png';
import Massage_Parlor_Thumb from './../assets/imgs/project_thumbs/MassageByTia_thumb.png';
import ONMIFOOD_thumb from './../assets/imgs/project_thumbs/OMNIFOOD_thumb.png';

const ShowcaseProjects = [
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
];

export default ShowcaseProjects;