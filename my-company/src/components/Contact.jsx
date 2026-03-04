import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{
      padding: '40px',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      margin: '20px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '30px',
        borderBottom: '3px solid #3498db',
        paddingBottom: '10px'
      }}>
        Contact Us
      </h1>
      
      <form onSubmit={handleSubmit} style={{
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            color: '#2c3e50',
            fontWeight: 'bold'
          }}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            required
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: focusedField === 'name' 
                ? '3px solid #3498db' 
                : '2px solid #bdc3c7',
              borderRadius: '5px',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            color: '#2c3e50',
            fontWeight: 'bold'
          }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            required
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: focusedField === 'email' 
                ? '3px solid #3498db' 
                : '2px solid #bdc3c7',
              borderRadius: '5px',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            color: '#2c3e50',
            fontWeight: 'bold'
          }}>
            Message:
          </label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            required
            rows="5"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: focusedField === 'message' 
                ? '3px solid #3498db' 
                : '2px solid #bdc3c7',
              borderRadius: '5px',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box',
              resize: 'vertical',
              fontFamily: 'inherit'
            }}
          />
        </div>
        
        <button 
          type="submit"
          onMouseEnter={() => setHoveredButton(true)}
          onMouseLeave={() => setHoveredButton(false)}
          style={{
            backgroundColor: hoveredButton ? '#2980b9' : '#3498db',
            color: 'white',
            border: 'none',
            padding: '14px 30px',
            fontSize: '1.1rem',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            width: '100%',
            fontWeight: 'bold',
            letterSpacing: '1px',
            transform: hoveredButton ? 'scale(1.02)' : 'scale(1)'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
