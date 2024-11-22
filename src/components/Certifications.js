import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        { id: 1, title: 'Cloud Queest Practioner Badge', image: 'aws.png' },
        { id: 2, title: 'Web Development Builder Badge', image: 'aws2.png' },
        { id: 3, title: 'Red Hat Certificate of Attendance', image: 'cert1-1.png', downloadLink: '/cert1.pdf' },
        { id: 4, title: 'CENTRO ESCOLAR UNIVERSITY School of Science and Technology Computer Education Department CERTIFICATE OF APPRECIATION', image: 'cert2-1.png', downloadLink: '/cert2.pdf' },
        { id: 5, title: '2024 Red Hat Academy - Program Learner Certificate', image: 'cert3-1.png', downloadLink: '/cert3.pdf' },
        { id: 6, title: 'Certificate of Continuing Education Completion Defensive Security and Cyber Risk', image: 'cert4-1.png', downloadLink: '/cert4.pdf' },
        { id: 7, title: 'Coursera Learner Create a Promotional Video using Canva Certificate', image: 'cert5-1.png', downloadLink: '/cert5.pdf' },
        { id: 8, title: 'Coursera Learner Create a Storyboard using Canva Certificate', image: 'cert6-1.png', downloadLink: '/cert6.pdf' },
        { id: 9, title: 'Coursera Learner Create a Project Charter with Google Docs Certificate', image: 'cert7-1.png', downloadLink: '/cert7.pdf' },
        { id: 10, title: 'Coursera Learner Get started with Jira Certificate', image: 'cert8-1.png', downloadLink: '/cert8.pdf' },
        { id: 11, title: 'Coursera Learner How to create a Jira SCRUM project Certificate', image: 'cert9-1.png', downloadLink: '/cert9.pdf' },
    ];

    // Animation for the section
    const sectionAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: 'easeInOut' },
        },
    };

    // Animation for individual certification cards
    const cardAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: 'easeInOut' },
        },
    };

    return (
        <motion.div
            className="certifications-container"
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={{ once: true }}
            id="certifications" // Ensures the section scrolls to the right location
        >
            <h1 className="certifications-title">My Badge And Certifications</h1>
            <div className="certifications-grid">
                {certifications.map((cert) => (
                    <motion.div
                        key={cert.id}
                        className="cert-card"
                        initial="hidden"
                        whileInView="visible"
                        variants={cardAnimation}
                    >
                        <img src={cert.image} alt={cert.title} className="cert-image" />
                        <h2 className="cert-title">{cert.title}</h2>
                        {/* Conditionally render the download button */}
                        {cert.downloadLink && (
                            <a href={cert.downloadLink} className="download-btn" download>
                                Download
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Certifications;