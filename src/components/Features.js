import React from 'react';

const Features = () => {
  const leftFeatures = [
    {
      title: "Fast Processing",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore",
      icon: "fa-bolt",
      delay: "0.2s"
    },
    {
      title: "Low Power Consuming",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore",
      icon: "fa-battery-full",
      delay: "0.4s"
    },
    {
      title: "Wifi Compatibility",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore",
      icon: "fa-wifi",
      delay: "0.6s"
    }
  ];

  const rightFeatures = [
    {
      title: "Regular Updates",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore",
      icon: "fa-check-double",
      delay: "0.2s"
    },
    {
      title: "Save Money",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore",
      icon: "fa-dollar-sign",
      delay: "0.4s"
    },
    {
      title: "Unlimited Storage",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore",
      icon: "fa-hdd",
      delay: "0.6s"
    }
  ];

  return (
    <section className="section feature section-padding" data-scroll-index="2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sectioner-header text-center">
              <h3>Features</h3>
              <span className="line"></span>
              <p>
                Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra.
                Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.
              </p>
            </div>
            
            <div className="section-content text-center">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  {leftFeatures.map((feature, index) => (
                    <div 
                      className="media single-feature wow fadeInUp" 
                      data-wow-delay={feature.delay}
                      key={index}
                    >
                      <div className="media-body text-right media-right-margin">
                        <h5>{feature.title}</h5>
                        <p>{feature.description}</p>
                      </div>
                      <div className="media-right icon-border">
                        <span><i className={`fa ${feature.icon}`} aria-hidden="true"></i></span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="col-md-4 d-none d-md-block d-lg-block">
                  <div className="feature-mobile">
                    <img 
                      src="images/iphone-screen-with-shadow.png" 
                      className="img-fluid wow fadeInUp"
                      alt="iPhone"
                    />
                  </div>
                </div>
                
                <div className="col-md-4 col-sm-12">
                  {rightFeatures.map((feature, index) => (
                    <div 
                      className="media single-feature wow fadeInUp" 
                      data-wow-delay={feature.delay}
                      key={index}
                    >
                      <div className="media-left icon-border media-right-margin">
                        <span><i className={`fa ${feature.icon}`} aria-hidden="true"></i></span>
                      </div>
                      <div className="media-body text-left">
                        <h5>{feature.title}</h5>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;