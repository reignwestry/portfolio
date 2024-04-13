
import HeroBackground from "./../../assets/imgs/backgrounds/contactBackground.png";

import ContactForm from "./../contactForm";

export default function contactSection() {
  return (
    <div
      className="contactSection"
      style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      <div className="titleBox">
        <h2 className="contactHeader">
          Contact Me
          <br />
          <hr />
        </h2>
      </div>

      <div className="contactInfoBox">
        <p>If you have any opportunities send me a message? </p>
        <div className="contactFormBox">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
