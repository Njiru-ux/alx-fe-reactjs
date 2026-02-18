function Services() {
  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#e8f5e8',
      borderRadius: '10px',
      margin: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
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
      <ul style={{ 
        listStyle: 'none',
        padding: 0
      }}>
        {['Technology Consulting', 'Market Analysis', 'Product Development'].map((service, index) => (
          <li key={index} style={{
            fontSize: '1.2rem',
            color: '#34495e',
            padding: '15px',
            margin: '10px 0',
            backgroundColor: 'white',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderLeft: '5px solid #27ae60'
          }}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;