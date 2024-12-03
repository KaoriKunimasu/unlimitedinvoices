import React from 'react';

const Download = () => {
  const downloadLinks = [
    {
      href: '#',
      imgSrc: 'images/appstore.png',
      alt: 'App Store',
      delay: '0.4s',
    },
    {
      href: '#',
      imgSrc: 'images/playstore.png',
      alt: 'Play Store',
      delay: '0.7s',
    },
  ];

  return (
    <section className="download section-padding">
      <div className="container">
        <div className="row">
          {/* Section Header */}
          <div className="col-md-12">
            <div className="sectioner-header text-center white">
              <h3>Download Our App</h3>
              <span className="line"></span>
              <p className="white">
                Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus,
                vestibulum ante in, pharetra ante.
              </p>
            </div>
          </div>
          {/* Section Content */}
          <div className="col-md-12">
            <div className="section-content text-center">
              <ul>
                {downloadLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>
                      <img
                        src={link.imgSrc}
                        className="wow fadeInUp"
                        data-wow-delay={link.delay}
                        alt={link.alt}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
