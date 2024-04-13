import Header from './../Header';
import HeroBackground from "./../../assets/imgs/backgrounds/heroBackgroundImage.png";
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div
      className="heroSection"
      style={{
        backgroundImage: `url(${HeroBackground})`,
      }}
    >
      <Header />

      <div className="heroMessageBox">
        <p>
          Hi, I am <span className="keywordOne">Reign</span>,<br />
          <span className="keywordTwo">Full-Stack</span> Developer
        </p>

        <Link to="/contact" >
          <button className="contactBtn" type="button">

              Contact Me Now

          </button>
        </Link>
      </div>
    </div>
  );
}
