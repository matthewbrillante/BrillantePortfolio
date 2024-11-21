import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../asset/matt.png';

const About = () => {
  return (
    <div id="about" style={styles.container}>
      <motion.div
        style={styles.imageContainer}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.img
          src={profileImage}
          alt="Profile"
          style={styles.image}
        />
        <div style={styles.socialMediaContainer}>
          {[
            {
              href: 'https://www.facebook.com/matthewbrillante06/',
              icon: 'https://cdn-icons-png.flaticon.com/512/174/174848.png',
              alt: 'Facebook',
            },
            {
              href: 'https://www.instagram.com/hi_matt_u/?next=%2F',
              icon: 'https://cdn-icons-png.flaticon.com/512/1409/1409946.png',
              alt: 'Instagram',
            },
            {
              href: 'https://github.com/matthewbrillante',
              icon: 'https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png?v=638664844220000000',
              alt: 'GitHub',
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialButton}
              whileHover={{ scale: 1.2 }}
            >
              <img src={item.icon} alt={item.alt} style={styles.socialIcon} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div style={styles.textContainer}>
        <motion.p
          style={styles.subHeading}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          style={styles.heading}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Matthew D.V. Brillante
        </motion.h1>
        <motion.p
          style={styles.paragraph}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I have a solid foundation in a variety of technology disciplines as an IT student. 
          I cant wait to use my abilities and expertise to promote industry innovation. 
          With my technical know-how and aptitude for solving problems I am ready to take on the demands of a future IT position and help develop innovative solutions that improve user experiences.
        </motion.p>
        <a href="/resume.pdf" download style={styles.button}>
          Download CV
        </a>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    padding: '0 10%',
    backgroundColor: '#ffffff', // Permanent white background
    color: '#333', // Black text color
  },
  textContainer: {
    flex: 1,
    paddingLeft: '20px',
    textAlign: 'left',
  },
  subHeading: {
    fontSize: '2rem',
    fontWeight: '300',
    letterSpacing: '2px',
    marginBottom: '5px',
    color: '#666',
  },
  heading: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#222',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '30px',
    color: '#555',
  },
  button: {
    display: 'inline-block',
    padding: '15px 30px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '500',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    marginBottom: '20px',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  socialMediaContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  socialButton: {
    textDecoration: 'none',
    borderRadius: '50%',
  },
  socialIcon: {
    width: '32px',
    height: '32px',
    transition: 'transform 0.3s ease',
  },
};

export default About;