import { Link } from "react-router-dom";

// import ShowcaseBackgroundImg from './../assets/imgs/backgrounds/showcaseBackgroundImg.png';
import dumbyImg from "./../assets/imgs/showcase/dumby-img.jpg";

//todo HOVER COVER
// import GoldFoil from './../assets/imgs/showcase/gold-foil.png';

//todo convert all project data to project.json and pass as a prop

//todo Link error is here --->
export default function ShowcaseProject() {
  const project = {
    name: "Project Name",
    image: dumbyImg,
    type: "website",
    tech: "HTML, CSS, JavaScript, etc",
    webAddress: "/projects/",
    github: "github link",
  };

  return (
    <div
      className="projectBoxShadow"
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <Link to={project.webAddress}>
        <div className="projectBox">
          <div className="projectData">
            <div className="projectBasicData">
              <h2>{project.name}</h2>
              <h3>{project.type}</h3>
            </div>
            <div className="projectTechData">
              <h4>Technologies</h4>
              <p className="techTypes">{project.tech}</p>
              <span className="gLink">
                <Link href={project.githubLink}>Github</Link>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
