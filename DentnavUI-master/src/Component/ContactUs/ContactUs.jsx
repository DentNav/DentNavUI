import React, { Component } from 'react';
import '../ContactUs/ContactUs.css'
import Map from '../map/Map';
import Axios from 'axios';

class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mailYourName: '',
      mailCc: '',
      mailSubject: '',
      mailContent: '',
      errors: {}
    }
  }

  onInputChange(event, inputType) {
    let value = event.target.value;
    this.setState({
      [inputType]: value
    })
    // console.log("state in mail", this.state);
  }

  onValidation() {
    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    if (!fields["mailCc"]) {
      formIsValid = false;
      errors["mailCc"] = "*Please enter your email-ID in gmail domain.";
    }

    if (!fields["mailYourName"]) {
      formIsValid = false;
      errors["mailYourName"] = "*Please enter your Name.";
    }

    if (!fields["mailSubject"]) {
      formIsValid = false;
      errors["mailSubject"] = "*Please enter your Query Subject.";
    }

    if (!fields["mailContent"]) {
      formIsValid = false;
      errors["mailContent"] = "*Please enter your Query Description in detail.";
    }

    console.log("inside the validation", errors);

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  onSendMail(event) {
    this.setState({
      errors: {}
    })
    event.preventDefault();
    let validation = this.onValidation();
    if (validation) {
      Axios.post("http://www.dentnav-guidingplatform-services.com:8088/dentnav/sendmail",
        {
          mailYourName: this.state.mailYourName,
          mailCc: this.state.mailCc,
          mailSubject: this.state.mailSubject,
          mailContent: this.state.mailContent
        }).then((res) => {
          console.log("res in mail", res);
        })
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">

            <div className=" section-title">
              {/* <h2>Contact</h2> */}
              <p>Contact Us</p>
            </div>
            <div className="mw-100">
              {/* <Map/> */}
            </div>

            <div className="row" style={{ marginTop: "10px" }}>

              <div className="col-lg-6">

                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box">
                      <i className="fa fa-map-marker"></i>
                      <h3>Our Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <i className="fa fa-envelope"></i>
                      <h3>Email Us</h3>
                      <p>info@example.com<br />contact@example.com</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <i className="fa fa-phone"></i>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <form role="form" className="php-email-form">
                  <div className="form-row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" value={this.state.mailYourName} onChange={(event) => { this.onInputChange(event, 'mailYourName') }} className="form-control" id="name" placeholder="Your Name" />

                      <p style={{ color: 'red' }}>{this.state.errors?.mailYourName ? this.state.errors.mailYourName : ''}</p>

                    </div>
                    <div className="col-md-6 form-group">
                      <input type="email" className="form-control" value={this.state.mailCc} onChange={(event) => { this.onInputChange(event, 'mailCc') }} name="email" id="email" placeholder="Your Email" />

                      <p style={{ color: 'red' }}>{this.state.errors?.mailCc ? this.state.errors.mailCc : ''}</p>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" value={this.state.mailSubject} onChange={(event) => { this.onInputChange(event, 'mailSubject') }} name="subject" id="subject" placeholder="Subject" />

                    <p style={{ color: 'red' }}>{this.state.errors?.mailSubject ? this.state.errors.mailSubject : ''}</p>

                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" value={this.state.mailContent} onChange={(event) => { this.onInputChange(event, 'mailContent') }} rows="5" data-rule="required" placeholder="Message"></textarea>

                    <p style={{ color: 'red' }}>{this.state.errors?.mailContent ? this.state.errors.mailContent : ''}</p>

                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center">
                    <button type="submit" onClick={(event) => { this.onSendMail(event) }}>Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>
      </div>
    )
  }
}

export default ContactUs;