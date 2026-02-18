import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',
            padding: '20px',
            margin: '20px 0',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{
                color: '#333',
                marginBottom: '15px'
            }}>Counter App</h2>
            
            <p style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: count > 0 ? '#27ae60' : count < 0 ? '#e74c3c' : '#3498db',
                margin: '10px 0'
            }}>
                Current Count: {count}
            </p>
            
            <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center'
            }}>
                <button 
                    onClick={() => setCount(count + 1)}
                    style={{
                        backgroundColor: '#27ae60',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#2ecc71'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#27ae60'}
                >
                    Increment (+1)
                </button>
                
                <button 
                    onClick={() => setCount(count - 1)}
                    style={{
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
                >
                    Decrement (-1)
                </button>
                
                <button 
                    onClick={() => setCount(0)}
                    style={{
                        backgroundColor: '#3498db',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;