import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import './CertificatesSection.css';

const certificates = [
  {
    title: 'Bootcamp: Data Analyst FIKTI Learning',
    org: 'Gunadarma University',
    date: '28 May 2023',
    link: 'https://drive.google.com/file/d/1rP3gV4iMsG7eY1ZbyAabsWYeADu2eqOk/view',
  },
  {
    title: 'Bootcamp: Web Development FIKTI Learning',
    org: 'Gunadarma University',
    date: '19 May 2024',
    link: 'https://drive.google.com/file/d/1fHt1ChT_3GCWdUpEBsj3ynnjlVlS6NT-/view',
  },
  {
    title: 'Workshop: Javascript Fundamental Analysis',
    org: 'Gunadarma University',
    date: '23 August 2024',
    link: 'https://drive.google.com/file/d/1EAYolRzkjaqxQ9XZijlyNd2R3JED70yS/view',
  },
  {
    title: 'Vinix7: Divisi Data Sains',
    org: 'Vinix7',
    date: '28 December 2025',
    link: 'https://drive.google.com/file/d/1bTW7J1Bkx9n812H-nBRsyoxvo-msTTMA/view',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function CertificatesSection() {
  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <SectionHeader title="Certificates" subtitle="Certificates Obtained" />

        <motion.div
          className="certificates-section__list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {certificates.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificates-section__card"
              variants={cardVariants}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
            >
              <div className="certificates-section__card-icon">
                <FiAward />
              </div>
              <div className="certificates-section__card-info">
                <h3 className="certificates-section__card-title">{cert.title}</h3>
                <div className="certificates-section__card-meta">
                  <span>{cert.org}</span>
                  <span className="certificates-section__dot">•</span>
                  <span>{cert.date}</span>
                </div>
              </div>
              <div className="certificates-section__card-arrow">
                <FiExternalLink />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
