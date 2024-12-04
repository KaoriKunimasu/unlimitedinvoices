import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      img: '/images/user1.jpg',
      name: 'Narendra Bhana',
      role: 'AN Business Consultants Ltd',
      text: "I've been using this invoicing software for over a year, and it has transformed the way I manage my business finances. It's incredibly user-friendly, and the automation features save me hours every week. My clients appreciate the professional-looking invoices, and the reminders ensure I get paid on time.",
    },
    {
      img: '/images/user3.jpg',
      name: 'Gerry Tsao',
      role: 'Top Finance Ltd',
      text: 'The invoicing software has streamlined our billing process tremendously. We can now send out invoices in bulk, and the automatic follow-up feature ensures we never miss a payment. The mobile app is also a huge plus, allowing me to manage invoices on the go.',
    },

  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonial section-padding" data-scroll-index="4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sectioner-header text-center white">
              <h3>Testimonials</h3>
              <span className="line"></span>
              <p className="white">
                
              </p>
            </div>
            <div className="section-content">
              <div className="row justify-content-center">
                <div className="col-md-8 col-sm-12">
                  <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                      <div className="slider-item" key={index}>   
                        <div className="test-img">
                          <img src={testimonial.img} alt={testimonial.name} width="157" height="157" />
                        </div>
                        <div className="test-text">
                          <span className="title">
                            <span>{testimonial.name}</span> {testimonial.role}
                          </span>
                          {testimonial.text}
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;