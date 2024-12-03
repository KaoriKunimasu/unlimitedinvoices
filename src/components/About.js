import React from 'react';

const About = () => {
  const features = [
    {
      title: "Support",
      description: "Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.",
      delay: "0.2s",
      featureIcon: "fa fa-life-ring"
    },
    {
      title: "Cross Platform",
      description: "Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.",
      delay: "0.4s",
      featureIcon: "fa fa-mobile"
    },
    {
      title: "Fast",
      description: "Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.",
      delay: "0.6s",
      featureIcon: "fa fa-bolt"
    }
  ];

  return (
    <section className="section about section-padding prelative" data-scroll-index="1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sectioner-header text-center">
              <h3>About</h3>
              <span className="line"></span>
              <p>
                Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra.
                Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.
              </p>
            </div>
            <div className="section-content text-center">
              <div className="row">
                {features.map((feature, index) => (
                  <div className="col-md-4" key={index}>
                    <div 
                      className="icon-box wow fadeInUp" 
                      data-wow-delay={feature.delay}
                    >
                      <i className={feature.featureIcon} aria-hidden="true"></i>
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="about-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
