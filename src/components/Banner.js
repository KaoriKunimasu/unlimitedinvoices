import React from 'react';

const Banner = () => {
  return (
    <section className="section banner" data-scroll-index="0">
      <div className="banner-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="banner-text">
  <h2 className="white">Let's get your <br></br>Invoice Invoice Sorted...</h2>
  <p>
    At Unlimited Invoices, we specialize in providing top-notch online invoicing 
    software tailored to meet the needs of small and mid-size businesses, as well 
    as self-employed individuals. Our goal is to simplify the invoicing process for 
    those who may not be tech-savvy, making it easy and efficient to invoice clients 
    in a matter of seconds.
  </p>
  <a href="#contact" className="cta-btn">
    Sign Up for Free
  </a>

  <div className="store-buttons">
    <ul>
      <li>
        <a href="#" className="wow fadeInUp" data-wow-delay="0.4s">
          <img src="images/appstore.png" alt="App Store" />
        </a>
      </li>
      <li>
        <a href="#" className="wow fadeInUp" data-wow-delay="0.7s">
          <img src="images/playstore.png" alt="Play Store" />
        </a>
      </li>
    </ul>
  </div>
</div>
            </div>
            <div className="col-md-4 col-sm-12">
              <img 
                src="images/iphone-screen.png" 
                alt="iPhone" 
                className="img-fluid wow fadeInUp" 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="svg-wave">
        <img src="images/applight-wave.svg" className="svg-hero" alt="Wave" />
      </div>
    </section>
  );
};

export default Banner;
