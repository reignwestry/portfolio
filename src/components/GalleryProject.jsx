
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

//todo HOVER COVER
//todo convert all project data to project.json and pass as a prop


//todo Link error is here --->
function GalleryProject(props) {
  

console.log(props.pImage)
// todo Replace dumbyImg with project thumb
  return (
    <div
      className="galleryProject"
      style={{ backgroundImage: `url(${this.props.pImage})` }}
    >
      <Link to={this.props.pLink}>
        <div className="galleryProjectBox">
          <div className="projectOverlay">
            <div className="projectData">
              <div className="projectBasicData">
                <h2>{this.props.pName}</h2>
                <h3>{this.props.pType}</h3>
              </div>
              <div className="projectTechData">
                <h4>Technologies</h4>
                <p className="projectTechData">{props.pTech}</p>
                <span className="gLink">
                  <Link href={this.props.github}>Github</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}


GalleryProject.propTypes = {
  pName: PropTypes.string,
  pImage: PropTypes.object,
  pType: PropTypes.string,
  pTech: PropTypes.string,
  pLink: PropTypes.string,
  github: PropTypes.string,
}

export default GalleryProject;