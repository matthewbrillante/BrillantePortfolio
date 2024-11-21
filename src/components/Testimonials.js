import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Software Engineer',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    text: 'Working with you was a pleasure. Your creativity and technical expertise exceeded all my expectations.',
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png',
    text: 'Your dedication and problem-solving skills are truly impressive. I highly recommend your work!',
  },
  {
    name: 'Alice Brown',
    role: 'UI/UX Designer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jWeXcV1U--PcrNLb3rUDyT-612kt_ePfnW3TVRmga0Pqpba042DBivoL_cKmJ7PD50Q&usqp=CAU',
    text: 'The designs you created were both beautiful and functional. It was a pleasure collaborating with you.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" style={styles.section}>
      <h2 style={styles.heading}>Testimonials</h2>
      <div style={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card" style={styles.card}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
              style={styles.image}
            />
            <p style={styles.text}>"{testimonial.text}"</p>
            <h3 style={styles.name}>{testimonial.name}</h3>
            <p style={styles.role}>{testimonial.role}</p>
          </div>
        ))}
      </div>
      <style>
        {`
          .testimonial-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .testimonial-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
          .testimonial-image {
            transition: transform 0.3s ease, border-color 0.3s ease;
          }
          .testimonial-card:hover .testimonial-image {
            transform: scale(1.1);
            border-color: #2e89ab;
          }
        `}
      </style>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '280px',
    textAlign: 'center',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    border: '5px solid #7fe1fa',
  },
  text: {
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '15px',
    fontSize: '0.9rem',
    lineHeight: '1.4',
  },
  name: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#222',
  },
  role: {
    fontSize: '0.9rem',
    color: '#888',
  },
};

export default Testimonials;