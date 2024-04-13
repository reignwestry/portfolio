import pImg from "./../assets/imgs/Project-Thumbs/pexels-ovan-57690.jpg";
// import ProjectDetails from "../ProjectDetails";
// import pIconType from "";
import ViteIcon from "./../assets/imgs/icons-language/vite.png";
import ReactIcon from "./../assets/imgs/icons-language/reactjs.png";
import ExpressIcon from "./../assets/imgs/icons-language/reactjs.png";
import SassIcon from "./../assets/imgs/icons-language/sass.png";
import BtnGithub from "./../assets/imgs/icons-language/github-mark/github-mark.svg";


//INBOUND(PASSED) PROPS FROM ARRAY
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


function projectTypeCheck(type) {
  //checks if project is a website or app and then sends the correct path
  if (type == "website") {
    //if website use the website icon path
    project.typeIcon = `./../assets/imgs/project-type-icons/android.png`;
  } else {
    //if app use the app icon path
    project.typeIcon = `./../assets/imgs/project-type-icons/website.png`;
  }
}


projectTypeCheck(project.Type);

function GalleryProjectBox(project) {
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     pImg: projectImg,
  //     pType: ProjectType,
  //     pTitle: pTitle,
  //     pDes: pDes,
  //     PLtypeOne: PLtypeOne,
  //     PLtypeTwo: PLtypeTwo,
  //     PLtypeThree: PLtypeThree,
  //     PLtypeFourth: PLtypeFourth,
  //     PLtypeFifth: PLtypeFifth,
  //     githubLink: githubLink


  //   };
      
  // }

  return (
    <div
      className="projectBox"
      style={{ backgroundImage: `url(${project.bgImg})` }} >   
      <div className="projectDetails">
        <div className="iconBox">
          <img src={project.typeIcon} className="projectTypeIcon" alt="true" />
        </div>
        <div className="projectInfoBox">
          <h3>{project.title}</h3>
          <div className="projectDesc">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{project.Desc}</p>
            <div className="language-type">
              <img src={project.PLtypeOne} alt="true" />
              <img src={project.PLtypeTwo} alt="true" />
              <img src={project.PLtypeThree} alt="true" />
              <img src={project.PLtypeFourth} alt="true" />
              <img src={project.PLtypeFifth} alt="true" />
            </div>
            <div className="btn-box">
              <button className="BTN-project-seeMore">See More</button>
              <a src={project.gHLink}>
                <img src={BtnGithub} alt="true"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryProjectBox;
