import { motion } from 'framer-motion';
import { FiArrowDown, FiFileText } from 'react-icons/fi';
import NeonButton from './NeonButton';
import AnimatedTextCycle from './AnimatedTextCycle';
import './HeroSection.css';

export default function HeroSection() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__bg">
        <div className="hero-section__grain" />
        <div className="hero-section__vignette" />
      </div>

      <div className="container hero-section__content">
        <motion.div
          className="hero-section__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="hero-section__wave">👋</span>
          <span>HELLO, I'M</span>
        </motion.div>

        <motion.h1
          className="hero-section__name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Rafa Rezandrya Jaelani
        </motion.h1>

        <motion.div
          className="hero-section__role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span className="hero-section__role-line" />
          <AnimatedTextCycle 
            words={[
              "Frontend Web Developer",
              "Data Analyst",
              "UI/UX Designer",
              "Vibe Coder"
            ]}
            className="hero-section__role-text"
            interval={2500}
          />
          <span className="hero-section__role-line" />
        </motion.div>

        <motion.p
          className="hero-section__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Information System student at Gunadarma University. Passionate and technology enthusiast
        </motion.p>

        <motion.div
          className="hero-section__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <NeonButton onClick={scrollToProjects} variant="primary">
            <FiArrowDown />
            View My Work
          </NeonButton>
          <NeonButton
            href="https://drive.google.com/file/d/1gp1snC_LIN6on8djsW015UK_L1XzwivC/view?usp=sharing"
            variant="secondary"
          >
            <FiFileText />
            My CV
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
}
