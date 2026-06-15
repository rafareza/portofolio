import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import './CertificatesSection.css';

const certificates = [
  {
    title: 'Belajar Dasar Pemrograman Web',
    org: 'Dicoding Indonesia',
    date: '2024',
    link: 'https://www.dicoding.com/certificates/07Z6G4V4QZQR',
  },
  {
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    org: 'Dicoding Indonesia',
    date: '2024',
    link: 'https://www.dicoding.com/certificates/GRX5OKWVQP0M',
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    org: 'Dicoding Indonesia',
    date: '2024',
    link: 'https://www.dicoding.com/certificates/L4PQ8YN61XO1',
  },
  {
    title: 'Belajar Dasar AI',
    org: 'Dicoding Indonesia',
    date: '2024',
    link: 'https://www.dicoding.com/certificates/1OP8LGNVQXQK',
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
        <SectionHeader title="Certificates" subtitle="Sertifikat yang telah saya peroleh" />

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
