import React from 'react';

const Features = () => {
  const leftFeatures = [
    {
      title: "Custom Payment Terms",
      description: "Define payment terms, due dates, and early payment discounts specific to each client or invoice.",
      icon: "fa-file-invoice-dollar",
      delay: "0.2s"
    },
    {
      title: "Invoice History & Archiving",
      description: "Keep a complete history of invoices with easy access to past records for auditing and reporting",
      icon: "fas fa-archive",
      delay: "0.4s"
    },
    {
      title: "Mobile Invoicing",
      description: "Access invoicing features on the go with mobile apps, allowing salespeople to create, send, and manage invoices anytime, anywhere.",
      icon: "fa-mobile-alt",
      delay: "0.6s"
    }
  ];

  const rightFeatures = [
    {
      title: "Payment Gateways Integration",
      description: "Seamless integration with popular payment gateways (PayPal, Stripe, etc.) allows clients to pay directly from the invoice.",
      icon: "fa-credit-card",
      delay: "0.2s"
    },
    {
      title: "Tax Calculation & Compliance",
      description: "Automatically calculate taxes based on client location, ensuring compliance with local tax regulations (e.g., VAT, GST).",
      icon: "fas fa-calculator",
      delay: "0.4s"
    },
    {
      title: "Automated Invoicing",
      description: "Set up recurring invoices for subscription-based services or repeat clients, reducing manual effort.",
      icon: "fa-sync-alt",
      delay: "0.6s"
    }
  ];

  return (
    <section className="section feature section-padding" data-scroll-index="2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sectioner-header text-center">
              <h3>Why Choose Unlimited Invoices?</h3>
              <span className="line"></span>
              <p>
                Our online invoicing software is designed with simplicity and functionality in mind,
                 offering a user-friendly interface that makes invoicing a breeze. 
                 Whether you're a freelancer, a small business owner, or a mid-size company, 
                 our software is perfect for streamlining your invoicing process and saving you 
                 valuable time.
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