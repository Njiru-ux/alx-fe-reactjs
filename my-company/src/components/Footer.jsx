function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '30px 20px',
      marginTop: '40px',
      borderTop: '3px solid #3498db'
    }}>
      <p style={{
        margin: '0 0 10px 0',
        fontSize: '1rem',
        letterSpacing: '1px'
      }}>
        &copy; {new Date().getFullYear()} Our Company. All rights reserved.
      </p>
      <p style={{
        margin: 0,
        fontSize: '0.9rem',
        color: '#bdc3c7'
      }}>
        Built with React | Excellence in every service
      </p>
    </footer>
  );
}

export default Footer;
