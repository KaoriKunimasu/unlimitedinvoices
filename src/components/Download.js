import React from 'react';

const Download = () => {
  const downloadLinks = [
    {
      href: 'https://apps.apple.com/nz/app/unlimited-invoices/id6482852538',
      imgSrc: 'images/appstore.png',
      alt: 'App Store',
      delay: '0.4s',
    },
    {
      href: 'https://play.google.com/store/apps/details?id=com.unlimitedinvoice.app&pcampaignid=web_share&pli=1',
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
              <h3>Download Your App</h3>
              <span className="line"></span>
              <p className="white">
                Download your app and start invoicing for free
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
