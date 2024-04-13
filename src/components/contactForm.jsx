import { Component } from "react";
// import { render } from "react-dom";

class contactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      serviceType: "",
      message: "",
    };

    //# static data
    // const MsgPlaceholder = `What would you like me to create and how soon do you need it done? What is the best way to contact you? `;

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputChange(e) {
    // this.setState({ value: e.target.value });
    // console.log(this.state.value)
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log(`${name}: ` + value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleSend;
    // this.handleChange(e);
    console.log(`form submitted`);
    this.handleSend();
  }

  handleSend() {
    let fname = this.state.fname;
    let lname = this.state.lname;
    let email = this.state.email;
    let serviceType = this.state.serviceType;
    let message = this.state.message;
    console.log(fname, lname, email, serviceType, message);
  }

  render() {
    return (
      <form className="contactForm" onSubmit={this.handleSubmit}>
        <div className="dataBox">
          <fieldset>
            <label htmlFor="fname">First Name</label>
            <br />
            <input
              type="text"
              id="fname"
              name="fname"
              value={this.state.value}
              onChange={this.inputChange}
              placeholder="Jane"
            ></input>
          </fieldset>

          <fieldset>
            <label htmlFor="lname">Last Name</label>
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              value={this.state.value}
              placeholder="Smoe"
              onChange={this.inputChange}
            ></input>
          </fieldset>
        </div>

        <div className="dataBox">
          <fieldset className="emailBox">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="12345@youremail.com"
              value={this.state.value}
              onChange={this.inputChange}
            ></input>
          </fieldset>
        </div>

        <div className="dataBox">
          <fieldset>
            <p>How can I help you?</p>
            <select
              id="serviceType"
              className="serviceType"
              value={this.state.value}
              onChange={this.inputChange}
            >
              <option className="optionsItem" defaultValue>
                Consultation
              </option>
              <option className="optionsItem">Website</option>
              <option className="optionsItem">App</option>
              <option className="optionsItem">Repair</option>
            </select>
          </fieldset>
        </div>

        <div className="msgBox">
          <textarea
            className="contactMsgBox"
            id="message"
            placeholder="MsgPlaceholder"
            value={this.state.value}
          ></textarea>
          <br />
        </div>

        <div className="btnContainer">
          <button className="formBtn">SEND</button>
        </div>
      </form>
    );
  }
}

export default contactForm;
