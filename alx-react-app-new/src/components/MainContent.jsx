function MainContent() {
    return (
        <main style={{
            backgroundColor: '#f0f8ff',
            padding: '25px',
            borderRadius: '15px',
            margin: '20px 0',
            border: '3px dashed #4682b4'
        }}>
            <p style={{
                fontSize: '1.3rem',
                color: '#2c3e50',
                lineHeight: '1.6',
                textAlign: 'center',
                fontFamily: 'Georgia, serif',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
                I love to visit <span style={{
                    color: '#e74c3c',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }}>New York</span>, <span style={{
                    color: '#27ae60',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }}>Paris</span>, and <span style={{
                    color: '#2980b9',
                    fontWeight: 'bold',
                    textDecoration: 'underline'
                }}>Tokyo</span>.
            </p>
        </main>
    );
}

export default MainContent;