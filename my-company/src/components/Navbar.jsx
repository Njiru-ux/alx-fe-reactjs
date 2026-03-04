import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/services', name: 'Services' },
    { path: '/contact', name: 'Contact' }
  ];

  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem 2rem',
      display: 'flex',
      gap: '2rem',
      justifyContent: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            color: isActive ? '#f1c40f' : 'white',
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: '500',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            backgroundColor: isActive ? '#34495e' : 'transparent',
            transform: hoveredLink === item.path ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.3s ease'
          })}
          onMouseEnter={() => setHoveredLink(item.path)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
