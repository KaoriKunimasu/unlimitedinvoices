import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Nitu Singh",
      role: "Marketing Specialist",
      image: "images/user1.jpg",
      delay: "0.2s"
    },
    {
      name: "Yogesh Singh",
      role: "CEO & Founder",
      image: "images/user2.jpg",
      delay: "0.4s"
    },
    {
      name: "Nisha Sharma",
      role: "Web Developer",
      image: "images/user3.jpg",
      delay: "0.6s"
    }
  ];

  return (
    <section className="section team section-padding" data-scroll-index="3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sectioner-header text-center">
              <h3>Our Team</h3>
              <span className="line"></span>
              <p>
                Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra.
                Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.
              </p>
            </div>
            
            <div className="section-content text-center">
              <div className="row">
                {teamMembers.map((member, index) => (
                  <div className="col-md-4" key={index}>
                    <div 
                      className="team-detail wow bounce" 
                      data-wow-delay={member.delay}
                    >
                      <img src={member.image} className="img-fluid" alt={member.name} />
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;