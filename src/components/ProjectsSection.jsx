import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaBrain, FaLeaf, FaStore, FaBriefcase, FaCoffee } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import './ProjectsSection.css';

const projects = [
  {
    icon: FaBrain,
    title: 'Mental Health Detection',
    desc: 'A mental health detection website using SVM and Naive Bayes algorithms. Built with Flask and machine learning models.',
    tech: ['Python', 'Flask', 'Machine Learning', 'SVM', 'Naive Bayes'],
    github: 'https://github.com/rafareza/mental-health',
    demo: null,
  },
  {
    icon: FaLeaf,
    title: 'Acacia Water',
    desc: 'Website for selling and purchasing water and gas at Acacia Water stores.',
    tech: ['React', 'Typescript', 'Supabase'],
    github: 'https://github.com/rafareza/acacia-water',
    demo: 'https://acacia-water.vercel.app/',
  },
  {
    icon: FaStore,
    title: 'Website Bunga Indah',
    desc: 'Website for selling and purchasing flowers at the Bunga Indah shop',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/rafareza/bunga-indah',
    demo: null,
  },
  {
    icon: FaBriefcase,
    title: 'Portfolio Website',
    desc: 'Personal Portofolio Website',
    tech: ['React', 'Vite', 'JavaScript'],
    github: 'https://github.com/rafareza/portofolio',
    demo: 'https://rafareza-three.vercel.app/',
  },
  {
    icon: FaCoffee,
    title: 'Design UI/UX Jacoffee',
    desc: 'Designing the user interface (UI) and user experience (UX) for Jacoffee coffee shop',
    tech: ['Figma', 'UI/UX Design'],
    github: null,
    demo: 'https://www.figma.com/proto/KAwUZgVfSJbND6TGMCthHt/jacoffee?page-id=0%3A1&node-id=431-6742&p=f&viewport=-1638%2C257%2C0.18&t=nzovOmIiJ7AaWPhI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=431%3A6720',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeader title="Projects" subtitle="Some projects I've worked on" />

        <motion.div
          className="projects-section__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="projects-section__card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="projects-section__card-header">
                <div className="projects-section__card-icon">
                  <project.icon />
                </div>
                <div className="projects-section__card-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FiGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="projects-section__card-title">{project.title}</h3>
              <p className="projects-section__card-desc">{project.desc}</p>

              <div className="projects-section__card-tech">
                {project.tech.map((t) => (
                  <span key={t} className="projects-section__tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
