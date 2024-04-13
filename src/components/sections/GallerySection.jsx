import ShowcaseBackgroundImg from "./../../assets/imgs/backgrounds/showcaseBackgroundImg.png";
import GalleryProject from "./../../components/GalleryProject";
//note Gallery PROJECTS DATA ARRAY
// import Projects from './../../data/projectDataArray';
import ShowcaseProject from "./../../data/showcaseArray";


//todo SETUP PROJECT LINKS AND THUMBS


//todo finish mobile responsive
//todo convert projectRow to a map function
function GallerySection() {


  return (
    <div
      className="gallerySection"
      style={{
        backgroundImage: `url(${ShowcaseBackgroundImg})`,
      }}
    >
      {/* <div className="sectionHeader"></div> */}
      {/* <span>Here is a showcase of my best and latest projects</span> */}
      <div className="galleryBlock">
        
        const projects = {ShowcaseProject.map((Project) => {
          console.log(Project.image);
          return (<GalleryProject key={Project.id} pImage={Project.image} pLink={Project.link} pName={Project.name} pType={Project.type} pTech={Project.tech} github={Project.github} />);
        })}
        <ShowcaseArray />
      </div>
    </div>
  );
}

function ShowcaseArray() {
  const showcaseArray = this.props.showcaseArray.map((Project) => (
    <GalleryProject 
      key={Project.id}
      pImage={Project.image}
      pLink={Project.link}
      pName={Project.name}
      pType={Project.type}
      pTech={Project.tech}
      github={Project.github}
      />
    ));
  return (
    <>
      {showcaseArray}
    </>
  );
} 

export default GallerySection;