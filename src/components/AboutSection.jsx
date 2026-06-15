import { motion } from 'framer-motion';
import { FiUser, FiBookOpen, FiMapPin, FiAward } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import './AboutSection.css';

const infoCards = [
  { icon: FiUser, label: 'Nama', value: 'Rafa Rezandrya Jaelani' },
  { icon: FiBookOpen, label: 'Jurusan', value: 'Sistem Informasi' },
  { icon: FiMapPin, label: 'Lokasi', value: 'Bekasi, Indonesia' },
  { icon: FiAward, label: 'IPK', value: '3.72 / 4.00' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeader title="About Me" subtitle="Mengenal lebih dekat tentang saya" />

        <motion.div
          className="about-section__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div className="about-section__bio" variants={itemVariants}>
            <div className="about-section__bio-card">
              <div className="about-section__quote-mark">"</div>
              
              <div className="about-section__avatar-wrapper" title="Ganti '/profile.jpg' dengan fotomu">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="about-section__avatar"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="about-section__avatar-fallback">FOTO</div>
              </div>

              <p>
                Saya adalah mahasiswa Sistem Informasi di Universitas Gunadarma 
                yang memiliki minat dan passion dalam bidang Frontend Web Development, Data Analitics, UI/UX Design.
              </p>
              <p>
                Saya senang mempelajari teknologi baru dan membangun pengalaman web
                yang interaktif, responsif, dan user-friendly. Saat ini saya sedang
                aktif mengembangkan skill di ReactJS, Python dan teknologi web modern lainnya.
              </p>
              <p>
                Selain coding, saya juga tertarik dengan UI/UX design dan selalu
                berusaha menggabungkan estetika visual dengan fungsionalitas
                yang baik dalam setiap project yang saya kerjakan.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-section__info"
            variants={containerVariants}
          >
            {infoCards.map((card) => (
              <motion.div key={card.label} className="about-section__info-card" variants={itemVariants}>
                <div className="about-section__info-icon">
                  <card.icon />
                </div>
                <div className="about-section__info-text">
                  <span className="about-section__info-label">{card.label}</span>
                  <span className="about-section__info-value">{card.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
