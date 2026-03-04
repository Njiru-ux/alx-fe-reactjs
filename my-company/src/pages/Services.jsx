import { useState } from 'react';

function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { name: 'Technology Consulting', description: 'Expert advice on tech strategy and implementation' },
    { name: 'Market Analysis', description: 'In-depth market research and competitive analysis' },
    { name: 'Product Development', description: 'End-to-end product design and development' }
  ];

  return (
    <div style={{
      padding: '40px',
      backgroundColor: '#e8f5e8',
      borderRadius: '10px',
      margin: '20px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '30px',
        borderBottom: '3px solid #27ae60',
        paddingBottom: '10px'
      }}>
        Our Services
      </h1>
      <div style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
      }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '8px',
              boxShadow: hoveredService === index 
                ? '0 10px 20px rgba(0,0,0,0.2)' 
                : '0 4px 6px rgba(0,0,0,0.1)',
              transform: hoveredService === index ? 'translateY(-5px)' : 'translateY(0)',
              transition: 'all 0.3s ease',
              borderLeft: '5px solid #27ae60'
            }}
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <h3 style={{
              color: '#27ae60',
              fontSize: '1.5rem',
              marginBottom: '10px'
            }}>
              {service.name}
            </h3>
            <p style={{
              color: '#34495e',
              lineHeight: '1.6',
              margin: 0
            }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
