function About() {
  return (
    <div style={{
      padding: '40px',
      backgroundColor: '#fff5e6',
      borderRadius: '10px',
      margin: '20px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '30px',
        borderBottom: '3px solid #e67e22',
        paddingBottom: '10px'
      }}>
        About Us
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#34495e',
        lineHeight: '1.8',
        marginBottom: '20px'
      }}>
        Our company has been providing top-notch services since 1990. 
        We specialize in various fields including technology, marketing, and consultancy.
      </p>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3 style={{ color: '#e67e22', marginBottom: '15px' }}>Our Mission</h3>
        <p style={{ lineHeight: '1.6' }}>
          To deliver exceptional value to our clients through innovative solutions
          and unwavering commitment to quality.
        </p>
      </div>
    </div>
  );
}

export default About;
