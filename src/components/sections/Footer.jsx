import FooterBkg from './../../assets/videos/footer/pexels-taro-5625316 (1080p).mp4';
import ContactForm from './contactForm';

//FREELANCE LOGOS
import Fiverr from './../../assets/imgs/freelance-logos/FIVERR.png';
import Upwork from './../../assets/imgs/freelance-logos/UPWORK.png';
import Freelancer from './../../assets/imgs/freelance-logos/freelancer.png';

function Footer() {
    return (
      <footer>
        <video src={FooterBkg} autoPlay muted loop alt />
        <div className="overlay">
          <div className="contactFormBox">
            <ContactForm />
          </div>
          <div className="contactMsgBox">
            <div>
              <p>
                Looking for someone to get started, today?
                <br />
                Send me a message...
              </p>
            </div>
            <div>
              <p>
                If you have a freelane account on any of these sites. Secure
                your project today. Send me your project. I would love to work
                on it
              </p>
            </div>
            <ul>
              <li>
                <a>
                  <img className="fLogos" src={Fiverr} alt />
                  <span>Fiverr</span>
                </a>
              </li>
              <li>
                <a
                  href={
                    "https://www.upwork.com/freelancers/~01344eb4d8f351512a"
                  }
                >
                  <img className="fLogos" src={Upwork} alt />
                  <span>UpWork</span>
                  {/* //? UPWORK LINK: https://www.upwork.com/freelancers/~01344eb4d8f351512a */}
                </a>
              </li>
              <li>
                <a>
                  <img className="fLogos" src={Freelancer} alt />
                  <span>Freelancer</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
}

export default Footer;