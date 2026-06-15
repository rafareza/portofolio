import { motion } from 'framer-motion';
import './SectionHeader.css';

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-header__ornament">✦</div>
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      <div className="section-header__divider">
        <span className="section-header__line" />
        <span className="section-header__diamond">◆</span>
        <span className="section-header__line" />
      </div>
    </motion.div>
  );
}
