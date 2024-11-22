import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>Matthew Brillante</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <a href="#about" style={styles.navLink}>
            Home
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#projects" style={styles.navLink}>
            Projects
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#skills" style={styles.navLink}>
            Skills
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#testimonials" style={styles.navLink}>
            Testimonials
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#certifications" style={styles.navLink}>
            Certification & Seminars
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};


// Inline Styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  brand: {
    fontSize: '2rem', // Bigger and more prominent font size
    fontWeight: '600', // Slightly bolder to make it stand out
    color: '#333',
    fontFamily: "'Poppins', sans-serif", // Clean, modern font family
    letterSpacing: '1.5px', // Spacing between letters for a neat look
    textTransform: 'uppercase', // Make brand text all caps for a sleek design
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '40px', // More space between nav items
    margin: 0,
    padding: 0,
  },
  navItem: {},
  navLink: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#555',
    textDecoration: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    fontFamily: "'Roboto', sans-serif", // Elegant font for navigation
    textTransform: 'uppercase', // Make links uppercase for consistency
    letterSpacing: '1px', // Add letter spacing for a polished look
    transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
  },
  navLinkHover: {
    backgroundColor: '#007bff', // Highlight color
    color: 'white', // White text on hover
    transform: 'scale(1.05)', // Slight zoom effect on hover for emphasis
  },
};

// Add hover effect using JavaScript for inline styles
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');
  links.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.style.backgroundColor = '#007bff';
      link.style.color = 'white';
      link.style.transform = 'scale(1.05)';
    });
    link.addEventListener('mouseout', () => {
      link.style.backgroundColor = 'transparent';
      link.style.color = '#555';
      link.style.transform = 'scale(1)';
    });
  });
});

export default Navbar;
