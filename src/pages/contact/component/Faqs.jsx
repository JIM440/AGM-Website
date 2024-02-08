import { useState } from 'react';


const Faqs = ({data}) => {
  const [selected, setSelected] = useState(null);

  const toggleDisplay = (i) => {
    setSelected(i === selected ? null : i)
  };

  return (
    <section id="faqs-section">
      <div className="container container-faqs-section">
        <h2 className="header">Frequently Asked Questions</h2>
        <div className="faqs-container">
          {data.map((item, i) => (
            <div
              className="faqs"
              key={i}
              onClick={() => {
                toggleDisplay(i);
              }}
            >
              <div className={`question ${i == selected ? ' active' : ''}`}>
                <h3>{item.question}</h3>
                <i className="bi bi-chevron-down"></i>
              </div>
              <p className={`answer ${i == selected ? ' active' : ''}`}>
                {item.answer}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
