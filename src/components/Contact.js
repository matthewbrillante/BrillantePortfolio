import React from 'react';

const Contact = () => {
  return (
    <footer style={styles.container}>
      <div style={styles.content}>
        {/* Email */}
        <div style={styles.contactItem}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
            alt="Email"
            style={styles.icon}
          />
          <a href="mailto:brillante21050@ceu.edu.ph" style={styles.link}>
            brillante21050@ceu.edu.ph
          </a>
        </div>

        {/* Phone */}
        <div style={styles.contactItem}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/455/455705.png"
            alt="Phone"
            style={styles.icon}
          />
          <span style={styles.text}>+639685697301</span>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#2d2d2d',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.2)',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  icon: {
    width: '20px',
    height: '20px',
  },
  link: {
    color: '#00bcd4',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  text: {
    color: '#ccc',
    fontSize: '0.9rem',
  },
};

export default Contact;
