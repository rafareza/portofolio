import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaBootstrap, FaFilm,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiVite, SiMysql, SiPython,
} from 'react-icons/si';
import SectionHeader from './SectionHeader';
import './SkillsSection.css';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
  { name: 'JavaScript', icon: FaJsSquare, color: '#f7df1e' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'CapCut', icon: FaFilm, color: '#00c4cc' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952b3' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Git', icon: FaGitAlt, color: '#f05032' },
  { name: 'Figma', icon: FaFigma, color: '#f24e1e' },
  { name: 'Vite', icon: SiVite, color: '#646cff' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'Python', icon: SiPython, color: '#3776AB'},
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeader title="Skills" subtitle="Technologies and tools I use" />

        <motion.div
          className="skills-section__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skills-section__card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="skills-section__card-glow" />
              <div
                className="skills-section__icon"
                style={{ '--skill-color': skill.color }}
              >
                <skill.icon />
              </div>
              <span className="skills-section__name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
