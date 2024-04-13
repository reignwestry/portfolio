import ProjectType from "./../assets/imgs/project-type-icons/website.png";

import ReactIcon from './../assets/imgs/icons-language/reactjs.png';
import ExpressIcon from './../assets/imgs/icons-language/expressjs.png';
import ViteIcon from './../assets/imgs/icons-language/vite.png';
import SassIcon from './../assets/imgs/icons-language/sass.png';
import BtnGithub from './../assets/imgs/icons-language/github.png';

function ProjectDetails() {
  return (
    <div className="projectDetails">
      <div className="iconBox">
        <img src={ProjectType} alt />
      </div>
      <div className="projectInfoBox">
        <h3>Project Name</h3>
        <div className="projectDesc">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;This is a desc.This is a desc. This is a
            desc. This is a desc. this is a desc. This is a desc.This is a desc.
            This is a desc. This is a desc. this is a desc. This is a desc.This
            is a desc.
          </p>
          <div className="language-type">
            <img src={ViteIcon} alt />
            <img src={ReactIcon} alt />
            <img src={ExpressIcon} alt />
            <img src={SassIcon} alt />
          </div>
          <div className="btn-box">
            <button className="BTN-project-seeMore">See More</button>
            <a>
              <img src={BtnGithub} alt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
