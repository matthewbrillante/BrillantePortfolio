import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    { name: 'Godot Space Shooting App', description: 'A 2D space game base on Godot Engine.', imageUrl: '/spaceshoot.png', downloadUrl: '/Brillante.exe' },
    { name: 'Godot Sword App', description: 'A 2D Topdown sword game based on Godot Engine.', imageUrl: '/Sword.png', downloadUrl: '/Demo.exe' },
    { name: 'Godot Topdown Shooting Game', description: 'A 2D Topdown shooting game based on Godot Engine', imageUrl: '/shoot.png', downloadUrl: '/Top-Down Shooter.exe' },
  ];

  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.heading}>My Sample Projects</h2>
      <div style={styles.grid}>
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            style={styles.card}
          >
            <img src={project.imageUrl} alt={project.name} style={styles.image} />
            <h3 style={styles.cardTitle}>{project.name}</h3>
            <p style={styles.cardDescription}>{project.description}</p>
            <div style={styles.buttonContainer}>
              <a href={project.downloadUrl} style={styles.downloadLink} download>
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Updated styles
const styles = {
  container: {
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9', // Light and clean background
    color: '#333',
    textAlign: 'center',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#222',
    marginBottom: '2.5rem',
    fontFamily: "'Poppins', sans-serif",
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    padding: '1.5rem',
    backgroundColor: '#a9f5b1', // White background for cards
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '250px', // Increased height for larger images
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333',
    margin: '1rem 0 0.5rem',
    fontFamily: "'Roboto', sans-serif",
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1.5rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center', // Center-align the button
    marginTop: '1rem',
  },
  downloadLink: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: "'Roboto', sans-serif",
    transition: 'background-color 0.3s ease',
  },
  downloadLinkHover: {
    backgroundColor: '#0056b3',
  },
};

export default Projects;