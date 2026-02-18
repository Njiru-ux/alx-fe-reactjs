function Home() {
  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#f0f8ff',
      borderRadius: '10px',
      margin: '20px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '20px'
      }}>
        Welcome to Our Company
      </h1>
      <p style={{ 
        fontSize: '1.2rem',
        color: '#34495e',
        lineHeight: '1.6'
      }}>
        We are dedicated to delivering excellence in all our services.
      </p>
    </div>
  );
}

export default Home;