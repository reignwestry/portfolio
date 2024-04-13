
import HeroBackground from "./../../assets/imgs/backgrounds/aboutSection.png";

//todo import FontAwesome from './FontAwesomeLibrary';

export default function About() {
  return (
    <section
      className="aboutSection"
      style={{
        backgroundImage: `url(${HeroBackground})`,
      }}
    >
      <h1 className="sectionHeader">About</h1>

      <div className="aboutMessage">
        <div className="aboutFirstMessage">
          <p>
            Hi, I am a Atlanta based{" "}
            <span className="keywordOne"> full-stack</span> developer
            that loves to solve problems with creative ideas.
          </p>
          <p>
            If you need something designed and developed please don't hesitate
            to contact me.
          </p>
          <p>I would love to work with you.</p>
          <p> My full-stack technology knowledge consists of:</p>
        </div>
        {/* <FontAwesome /> */}
        <div className="knowledgePathBox">
          <div className="knowledgePathColumn">
            <ul>
              <li className="listTitle">
                <h4>Web Development</h4>
              </li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>CSS Flexbox</li>
              <li>SCSS</li>
              <li>JavaScript</li>
              <li>MySQL & PHP</li>
              <li>MERN Stack</li>
              <li>Reactjs</li>
            </ul>
          </div>
          <div className="knowledgePathColumn">
            <ul>
              <li className="listTitle">
                <h4>Design</h4>
              </li>
              <li>Mobile First</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          {/* //todo Develop 10 apps first */}
          {/* <div className={styles.knowledgePathColumn}>
                        <ul>
                            <li className={styles.listTitle}>
                                <h4>Android Development</h4>
                            </li>
                            <li>Java</li>
                            <li>Flutter</li>
                            <li>Kotlin</li>
                        </ul>
                    </div> */}
          <div className="knowledgePathColumn">
            <ul className="toolsList">
              <li className="listTitle">
                <h4>Tools</h4>
              </li>
              <li>VSCode</li>
              <li>Adobe PhotoShop</li>
              <li>Adobe Illustrator</li>
              <li>Jetbrains Intellij</li>
              <li>Chrome</li>
              <li>Firefox</li>
              <li>Nodejs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
