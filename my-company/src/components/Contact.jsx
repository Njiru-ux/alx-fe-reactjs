import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      margin: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
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
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: '2px solid #bdc3c7',
              borderRadius: '5px',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3498db'}
            onBlur={(e) => e.target.style.borderColor = '#bdc3c7'}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: '2px solid #bdc3c7',
              borderRadius: '5px',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3498db'}
            onBlur={(e) => e.target.style.borderColor = '#bdc3c7'}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: '2px solid #bdc3c7',
              borderRadius: '5px',
              outline: 'none',
              transition: 'border-color 0.3s',
              resize: 'vertical'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3498db'}
            onBlur={(e) => e.target.style.borderColor = '#bdc3c7'}
          />
        </div>
        
        <button 
          type="submit"
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '12px 30px',
            fontSize: '1.1rem',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            width: '100%'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;