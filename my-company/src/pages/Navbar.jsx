import { NavLink } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/services', name: 'Services' },
    { path: '/contact', name: 'Contact' }
  ];

  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem',
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            color: isActive ? '#f1c40f' : 'white',
            textDecoration: 'none',
            fontSize: '1.2rem',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            backgroundColor: isActive ? '#34495e' : 'transparent',
            transition: 'all 0.3s'
          })}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;