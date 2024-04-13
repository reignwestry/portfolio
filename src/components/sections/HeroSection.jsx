import { useNavigate } from 'react-router-dom';

import Header from "../Header";
import BGvideo from "./../../assets/videos/Hero/pexels-pavel-danilyuk-5495781 (720p).mp4";

function HeroSection() {

  const navigate = useNavigate();

  const handleClickHireMe = () => {
    navigate('/newproject');
  }

  const handleClickSeeMore = () => {
    //navigate to gallery
    navigate('/gallery');
    
  }
  return (
    <section className="heroSection">
      <video src={BGvideo} autoPlay loop muted />
      <div className="heroContent">
        <Header title='RW' />
        <div className="heroTitle">
          <div className="titleBox">
            <h1>Reign Westry</h1>
            <span>Web Developer</span>
          </div>
          <div className="heroButtonBox">
            <button onClick={handleClickHireMe} className="BTN BTN-HireMe">
              Hire Me
            </button>
            <button onClick={handleClickSeeMore} className="BTN BTN-SeeMore">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
