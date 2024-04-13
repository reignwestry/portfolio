import ShowcaseBackgroundImg from "./../../assets/imgs/backgrounds/showcaseBackgroundImg.png";

import ShowcaseProject from "./../ShowcaseProject";


//todo finish mobile responsive
//todo convert projectRow to a map function
function ShowcaseSection() {
  return (
    <div
      className="showcaseSection"
      style={{
        backgroundImage: `url(${ShowcaseBackgroundImg})`,
      }}
    >
      <div className="sectionHeader">
        <h1>Showcase</h1>
      </div>
      <span>Here is a showcase of my best and latest projects</span>
      <div className="showcaseGallery">

          <ShowcaseProject />
          <ShowcaseProject />
          <ShowcaseProject />
          <ShowcaseProject />
          <ShowcaseProject />
          <ShowcaseProject />
          <ShowcaseProject />
          <ShowcaseProject />

      </div>
    </div>
  );
}

export default ShowcaseSection;