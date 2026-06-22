import { motion } from 'framer-motion';
import { FiUser, FiBookOpen, FiMapPin, FiAward } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import './AboutSection.css';

const infoCards = [
  { icon: FiUser, label: 'Name', value: 'Rafa Rezandrya Jaelani' },
  { icon: FiBookOpen, label: 'Major', value: 'Information Systems' },
  { icon: FiMapPin, label: 'Location', value: 'Bekasi, Indonesia' },
  { icon: FiAward, label: 'GPA', value: '3.72 / 4.00' },
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
        <SectionHeader title="About Me" subtitle="Get to know me" />

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
                I am an Information Systems student at Gunadarma University with an interest and passion for front-end web development, 
                data analytics, and UI/UX design.
              </p>
              <p>
                I enjoy learning new technologies and building interactive, responsive, and user-friendly web experiences. Currently, 
                I am actively developing my skills in ReactJS, Python, and other modern web technologies.
              </p>
              <p>
                In addition to coding, 
                I’m also interested in UI/UX design and always strive to combine visual aesthetics with strong functionality in every project I work on.
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
