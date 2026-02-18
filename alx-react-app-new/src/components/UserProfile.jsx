const UserProfile = (props) => {
    return (
        <div style={{ 
            border: '2px solid #e0e0e0',
            borderRadius: '10px',
            padding: '20px',
            margin: '15px 0',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s',
            cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <h2 style={{ 
                color: '#2c3e50',
                fontSize: '1.8rem',
                marginBottom: '10px',
                borderBottom: '2px solid #3498db',
                paddingBottom: '5px'
            }}>{props.name}</h2>
            
            <p style={{ 
                fontSize: '1.1rem',
                color: '#34495e',
                margin: '8px 0'
            }}>
                Age: <span style={{ 
                    fontWeight: 'bold',
                    color: '#e74c3c',
                    fontSize: '1.2rem'
                }}>{props.age}</span>
            </p>
            
            <p style={{ 
                fontSize: '1rem',
                color: '#7f8c8d',
                fontStyle: 'italic',
                backgroundColor: '#ecf0f1',
                padding: '10px',
                borderRadius: '5px',
                marginTop: '10px'
            }}>
                Bio: {props.bio}
            </p>
        </div>
    );
};

export default UserProfile;