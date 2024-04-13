import GalleryProjectBox from "./../GalleryProjectBox";
// import AppProjectType from "./../../assets/imgs/project-type-icons/android.png";


import pImg from "./../assets/imgs/Project-Thumbs/pexels-ovan-57690.jpg";
// import ProjectDetails from "../ProjectDetails";
// import pIconType from "";
import ViteIcon from "./../assets/imgs/icons-language/vite.png";
import ReactIcon from "./../assets/imgs/icons-language/reactjs.png";
import ExpressIcon from "./../assets/imgs/icons-language/reactjs.png";
import SassIcon from "./../assets/imgs/icons-language/sass.png";

//todo CREATE a PROJECTS array to map each project to a GalleryProjectBox
//todo MAP PROJECTS ARRAY

let projects = [
  {},
  []
]

function GallerySection() {


    //? PROJECT COMPONENT PROPS


  //? INBOUND(PASSED) PROPS FROM ARRAY
  const project = [
    {
      gHLink: `http://github.com`,
      Desc: `This is a desc. This is a desc. This is a
              desc. This is a desc. this is a desc. This is a desc.This is a
              desc. This is a desc. This is a desc. this is a desc. This is a
              desc.This is a desc.`,
      bgImg: pImg,
      title: `Project Name`,
      type: `website`,
      typeIcon: projectTypeCheck(project.type),
      PLtypeOne: ViteIcon,
      PLtypeTwo: ReactIcon,
      PLtypeThree: ExpressIcon,
      PLtypeFourth: SassIcon,
      PLtypeFifth: ReactIcon,
    },
  ];

  return (
    <section className="gallerySection">
      <div className="row">
        <GalleryProjectBox project={project} />
        <GalleryProjectBox />
        <GalleryProjectBox />
        <GalleryProjectBox />
      </div>

      {/* //# MAP ARRAY */}

      <div className="row">
        <GalleryProjectBox />
        <GalleryProjectBox />
        <GalleryProjectBox />
        <GalleryProjectBox />
      </div>

      <div className="row">
        <GalleryProjectBox />
        <GalleryProjectBox />
        <GalleryProjectBox />
        <GalleryProjectBox />
      </div>
      <div className="row">
        <GalleryProjectBox />
        <GalleryProjectBox />
        <GalleryProjectBox />
        <GalleryProjectBox />
      </div>
    </section>
  );
}

export default GallerySection;
