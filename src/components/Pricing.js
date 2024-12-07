import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Self Employed Plan",
      price: "$0",
      features: [
        "Create Unlimited Invoices/Quotes",
        "Add up to 5 Companies/Contacts",
        "Add up to 5 Product/Services",
        "Online Payment Options",
        "Personalized Templates",
        "User-Friendly Interface",
        "Time-Saving Automations",
      ],
      buttonText: "Subscribe Now",
      buttonLink: "https://unlimitedinvoices.com/register",
      animationDelay: "0.2s",
    },
    {
      title: "Business Plan",
      price: "$19.99 / month",
      features: [
        "Create Unlimited Invoices/Quotes",
        "Add Unlimited Companies/Contacts",
        "Add Unlimited Product/Services",
        "Online Payment Methods",
        "Personalized Templates",
        "User-Friendly Interface",
        "Time-Saving Automations",
        "Generate Monthly/Yearly Reports",
      ],
      buttonText: "Subscribe Now",
      buttonLink: "https://unlimitedinvoices.com/register",
      animationDelay: "0.4s",
    },
    {
      title: "Customize Solutions",
      price: "For 3rd Party",
      features: [
        "Connecting third-party apps with our Cloud-based software",
        "Requirement Gathering",
        "Access and Authentication",
        "Technical Specification",
        "Integration Development",
        "Testing Phase",
        "Deployment and Monitoring",
        "Documentation and Training",
        "Ongoing Support and Maintenance",
        "For More Info – Feel Free to discuss more.",
      ],
      buttonText: "Contact Sales",
      buttonLink: "mailto:info@unlimitedinvoices.com",
      animationDelay: "0.6s",
    },
  ];

  return (
    <section className="section pricing section-padding" data-scroll-index="3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="wow fadeInUp">Subscription Options</h3>
            <span className="line wow fadeInUp" data-wow-delay="0.2s"></span>
          </div>
        </div>
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              className="col-md-4 wow fadeInUp"
              data-wow-delay={plan.animationDelay}
              key={index}
            >
              <div className="pricing-card">
                <h4>{plan.title}</h4>
                <h5 className="price">{plan.price}</h5>
                <ul className="features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <a href={plan.buttonLink} className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }}>
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
