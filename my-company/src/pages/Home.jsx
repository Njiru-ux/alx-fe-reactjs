function Home() {
  return (
    <div style={{
      padding: '40px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      margin: '20px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '20px',
        borderBottom: '3px solid #3498db',
        paddingBottom: '10px',
        display: 'inline-block'
      }}>
        Welcome to Our Company
      </h1>
      <p style={{
        fontSize: '1.2rem',
        color: '#34495e',
        lineHeight: '1.8',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        We are dedicated to delivering excellence in all our services.
        Your success is our priority.
      </p>
    </div>
  );
}

export default Home;
