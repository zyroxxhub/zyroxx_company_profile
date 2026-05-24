import React from 'react';

export const Technologies: React.FC = () => {
  const techList = [
    { name: 'Flutter', color: '#02569B' },
    { name: 'Dart', color: '#00B4AB' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#FFFFFF' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Firebase', color: '#FFCA28' },
    { name: 'Django', color: '#092E20' },
    { name: 'Laravel', color: '#FF2D20' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'MySQL', color: '#4479A1' },
    { name: 'Figma', color: '#F24E1E' }
  ];

  // Duplicate the list to make the infinite scroll smooth
  const doubleList = [...techList, ...techList, ...techList];

  return (
    <section className="tech-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Stack</span>
          <h2 className="section-title gradient-text">Technologies We Trust</h2>
          <p className="section-description">
            We leverage industry-standard frameworks and cloud architectures to design
            safe, fast, and highly extensible platforms.
          </p>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-fade-left"></div>
          <div className="marquee-fade-right"></div>
          
          <div className="marquee-track">
            {doubleList.map((tech, idx) => (
              <div key={idx} className="marquee-item glass-panel">
                <span 
                  className="tech-dot" 
                  style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }}
                ></span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
