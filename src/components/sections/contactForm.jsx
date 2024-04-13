function contactForm() {
  return (
    <form className="contactForm">
      {/* <p>Contact Form</p> */}
      <div className="nameGroup">
        <fieldset>
          <label>First Name</label>
          <br />
          <input type="text" className="fName" id="fName" />
        </fieldset>
        <fieldset>
          <label>Last Name</label> <br />
          <input type="text" className="lName" id="lName" />
        </fieldset>
      </div>
      <div className="emailBox">
        <fieldset>
          <label>Email</label> <br />
          <input type="email" className="email" id="email" />
        </fieldset>
      </div>
      <div className="msgBox">
        <fieldset>
          <label>Message</label>
          <textarea></textarea>
        </fieldset>
      </div>
      <button>send</button>
    </form>
  );
}

export default contactForm;
