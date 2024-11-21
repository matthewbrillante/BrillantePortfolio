import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png', proficiency: 85 },
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png', proficiency: 90 },
    { name: 'Python', logo: 'https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-1713885634631.webp', proficiency: 50 },
    { name: 'JavaScript', logo: 'https://w7.pngwing.com/pngs/4/186/png-transparent-javascript-node-js-logo-computer-programming-programmer-others-miscellaneous-angle-text-thumbnail.png', proficiency: 50 },
    { name: 'React', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175110.png?f=webp&w=256', proficiency: 20 },
    { name: 'Tailwind CSS', logo: 'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png', proficiency: 10 },
    { name: 'Node.js', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-e_zLyIIrlVMxClajEd6a1KCSg8D5koXLQ&s', proficiency: 30 },
    { name: 'VSCode', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png', proficiency: 50 },
  ];

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Skills</h2>

        <div style={styles.contentWrapper}>
          {/* Paragraph */}
          <div style={styles.paragraphBox}>
            <p style={styles.paragraph}>
              I may not be the most quick learner, but I am committed and persistent in my efforts to acquire new abilities.
              I’m willing to invest the time and energy required to learn new technologies and frameworks because I’m keen to keep learning new things and developing my skills.
              I might not be an expert in every area, but my strong work ethic and flexibility enable me to pick things up quickly and contribute to projects.
              I have faith that I can master a variety of skills that will help me in my future positions, given the proper direction and opportunities.
            </p>
          </div>

          {/* Skills */}
          <div style={styles.skillsBox}>
            <div style={styles.grid}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }} // Slide-in animation starts to the left
                  whileInView={{ opacity: 1, x: 0 }} // Animates to visible and in place
                  transition={{ delay: index * 0.2, duration: 0.5 }} // Staggered animations
                  viewport={{ once: true, amount: 0.3 }} // Trigger only once when in view
                  style={styles.card}
                >
                  <motion.div
                    animate={{ rotate: 360 }} // Continuous rotation animation
                    transition={{ repeat: Infinity, duration: 4, ease: 'linear' }} // Infinite rotation
                    style={styles.logoContainer}
                  >
                    <img src={skill.logo} alt={skill.name} style={styles.logo} />
                  </motion.div>
                  <p style={styles.skillName}>{skill.name}</p>
                  <div style={styles.progressBarContainer}>
                    <div
                      style={{
                        ...styles.progressBar,
                        width: `${skill.proficiency}%`,
                      }}
                    ></div>
                  </div>
                  <p style={styles.proficiency}>{skill.proficiency}%</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#fcba03',
    color: 'white',
    padding: '100px 20px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#0d0d0d',
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif",
  },
  contentWrapper: {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  paragraphBox: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#0d0d0d',
    textAlign: 'justify',
    fontFamily: "'Roboto', sans-serif",
  },
  skillsBox: {
    flex: '1',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#eb9234',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
  },
  skillName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#fff',
    fontFamily: "'Roboto', sans-serif",
  },
  progressBarContainer: {
    backgroundColor: '#050505',
    height: '8px',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '4px',
  },
  proficiency: {
    fontSize: '1rem',
    color: '#ccc',
  },
};

export default Skills;
