import React from 'react';

const Contact = () => {
  return (
    <section className="contact section-padding" data-scroll-index="6">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sectioner-header text-center">
              <h3>Contact us</h3>
              <span className="line"></span>
              <p>
                Have a question or comment. Fill in the form below and we will get back to you.
              </p>
            </div>
            <div className="section-content">
              <div className="row">
                {/* Form Section */}
                <div className="col-sm-12 col-md-12 col-lg-8">
                  <form id="contact_form" action="">
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          id="your_name"
                          className="form-input w-100"
                          name="full-name"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="email"
                          id="email"
                          className="form-input w-100"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      id="subject"
                      className="form-input w-100"
                      name="subject"
                      placeholder="Subject"
                    />
                    <textarea
                      className="form-input w-100"
                      id="message"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                    <button className="btn-grad w-100 text-uppercase" type="submit" name="button">
                      Submit
                    </button>
                  </form>
                </div>
                {/* Contact Info Section */}
                
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="contact-info white">
                    <div className="contact-item media">
                      <i className="fa fa-map-marker-alt media-left media-right-margin"></i>
                      <div className="media-body">
                        <p className="text-uppercase">Address</p>
                        <p className="text-uppercase">New Delhi, India</p>
                      </div>
                    </div>
                    <div className="contact-item media">
                      <i className="fa fa-mobile media-left media-right-margin"></i>
                      <div className="media-body">
                        <p className="text-uppercase">Phone</p>
                        <p className="text-uppercase">
                          <a className="text-white" href="tel:+15173977100">
                            009900990099
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="contact-item media">
                      <i className="fa fa-envelope media-left media-right-margin"></i>
                      <div className="media-body">
                        <p className="text-uppercase">E-mail</p>
                        <p className="text-uppercase">
                          <a className="text-white" href="mailto:yogeshsingh.now@gmail.com">
                            yogeshsingh.now@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="contact-item media">
                      <i className="fa fa-clock media-left media-right-margin"></i>
                      <div className="media-body">
                        <p className="text-uppercase">Working Hours</p>
                        <p className="text-uppercase">Mon-Fri 9.00 AM to 5.00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of Contact Info */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;