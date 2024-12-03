import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Nam tellus felis, dignissim quis dui?',
      answer:
        'Suspendisse fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo.',
      delay: '0.2s',
    },
    {
      question: 'Mauris scelerisque, dui non faucibus vulputate?',
      answer:
        'Sed tempus in neque ac rhoncus. Phasellus vehicula, erat tempor malesuada egestas, mauris tellus malesuada erat, at vestibulum nulla ex et lectus. Nullam elit est, ultricies et tellus ac, euismod placerat orci.',
      delay: '0.2s',
    },
    {
      question: 'Nullam elit est, ultricies et tellus ac?',
      answer:
        'Ut vestibulum euismod aliquet. Quisque nec malesuada nibh. Vivamus euismod nunc eu leo faucibus, vel elementum justo posuere. In sed varius nisi. Curabitur id porta ipsum, et vestibulum dui.',
      delay: '0.4s',
    },
    {
      question: 'Suspendisse fermentum placerat enim, at pellentesque augue elit est?',
      answer: 'Vivamus euismod nunc eu leo faucibus, vel elementum justo posuere. In sed varius nisi.',
      delay: '0.4s',
    },
    {
      question: 'Ut vestibulum euismod aliquet. Quisque nec malesuada nibh?',
      answer:
        'Suspendisse fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo dapibus congue.',
      delay: '0.6s',
    },
    {
      question: 'Donec commodo dapibus congue?',
      answer:
        'Nullam elit est, ultricies et tellus ac, euismod placerat orci fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo dapibus congue.',
      delay: '0.6s',
    },
  ];

  return (
    <section className="faq section-padding prelative" data-scroll-index="5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sectioner-header text-center">
              <h3>Frequently Asked Questions</h3>
              <span className="line"></span>
              <p>
                Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus,
                vestibulum ante in, pharetra ante.
              </p>
            </div>
            <div className="section-content">
              <div className="row">
                {faqs.map((faq, index) => (
                  <div
                    className="col-md-6 faq-content wow fadeInUp"
                    data-wow-delay={faq.delay}
                    key={index}
                  >
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
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

export default FAQ;
