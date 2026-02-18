function Footer() {
    return (
        <footer style={{
            backgroundColor: '#2c3e50',
            color: 'white',
            textAlign: 'center',
            padding: '15px',
            borderRadius: '8px',
            marginTop: '30px',
            borderTop: '4px solid #e74c3c',
            fontSize: '0.9rem'
        }}>
            <p style={{
                margin: '0',
                letterSpacing: '1px',
                fontFamily: 'Arial, sans-serif'
            }}>
                © 2023 City Lovers | All rights reserved
            </p>
            <p style={{
                margin: '5px 0 0',
                fontSize: '0.8rem',
                color: '#bdc3c7'
            }}>
                Made with React
            </p>
        </footer>
    );
}

export default Footer;