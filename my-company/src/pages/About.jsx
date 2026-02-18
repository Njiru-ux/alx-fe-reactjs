function About() {
  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#fff5e6',
      borderRadius: '10px',
      margin: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '20px',
        borderBottom: '3px solid #e67e22',
        paddingBottom: '10px'
      }}>
        About Us
      </h1>
      <p style={{ 
        fontSize: '1.2rem',
        color: '#34495e',
        lineHeight: '1.8'
      }}>
        Our company has been providing top-notch services since 1990. 
        We specialize in various fields including technology, marketing, and consultancy.
      </p>
    </div>
  );
}

export default About;