import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaBrain, FaLeaf, FaStore, FaBriefcase, FaCoffee } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import './ProjectsSection.css';

const projects = [
  {
    icon: FaBrain,
    title: 'Mental Health Detection',
    desc: 'Website deteksi kesehatan mental menggunakan machine learning. Menganalisis input teks untuk mendeteksi potensi masalah kesehatan mental.',
    tech: ['Python', 'Flask', 'Machine Learning', 'HTML', 'CSS'],
    github: 'https://github.com/rafarezandrya',
    demo: null,
  },
  {
    icon: FaLeaf,
    title: 'Acacia Water',
    desc: 'Landing page untuk brand minuman Acacia Water dengan desain modern dan responsif. Menampilkan produk dan informasi brand.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rafarezandrya',
    demo: 'https://acacia-water.vercel.app/',
  },
  {
    icon: FaStore,
    title: 'Website Bunga Indah',
    desc: 'Website toko bunga online dengan katalog produk, keranjang belanja, dan sistem pemesanan. Desain yang elegant dan user-friendly.',
    tech: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/rafarezandrya',
    demo: null,
  },
  {
    icon: FaBriefcase,
    title: 'Portfolio Website',
    desc: 'Website portfolio personal yang menampilkan informasi, skill, project, dan sertifikat. Dibangun dengan React dan Vite.',
    tech: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/rafarezandrya',
    demo: 'https://rafareza.vercel.app',
  },
  {
    icon: FaCoffee,
    title: 'Design UI/UX Jacoffee',
    desc: 'Desain UI/UX untuk aplikasi coffee shop Jacoffee menggunakan Figma. Meliputi user flow, wireframe, dan high-fidelity prototype.',
    tech: ['Figma', 'UI/UX Design'],
    github: null,
    demo: null,
  },
  {
    icon: FaStore,
    title: 'Buku Harian Digital', 
    desc: 'Aplikasi buku harian digital yang membantu pengguna mencatat kegiatan harian dengan mudah. Dilengkapi fitur pengingat dan keamanan.',
    tech: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/rafarezandrya/buku-harian-digital',
    demo: null,
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
        <SectionHeader title="Projects" subtitle="Beberapa project yang telah saya kerjakan" />

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
