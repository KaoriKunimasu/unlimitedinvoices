import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      img: '/images/user1.jpg',
      name: 'John Michal',
      role: 'Digital Designer',
      text: 'Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat.',
    },
    {
      img: '/images/user3.jpg',
      name: 'Steve Smith',
      role: 'App User',
      text: 'Euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat. Ut wisi enim ad minim veniam, quis nostrud.',
    },
    {
      img: '/images/user3.jpg',
      name: 'Gordon Shaw',
      role: 'Blogger',
      text: 'Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat. Ut wisi enim ad minim veniam, quis nostrud.',
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
                Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus,
                vestibulum ante in, pharetra ante.
              </p>
            </div>
            <div className="section-content">
              <div className="row">
                <div className="offset-md-2 col-md-8 col-sm-12">
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
