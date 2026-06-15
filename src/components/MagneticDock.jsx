import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiCode, FiFolder, FiAward, FiMail } from 'react-icons/fi';
import './MagneticDock.css';

const dockItems = [
  { id: 'hero', icon: FiHome, label: 'Home' },
  { id: 'about', icon: FiUser, label: 'About' },
  { id: 'skills', icon: FiCode, label: 'Skills' },
  { id: 'projects', icon: FiFolder, label: 'Projects' },
  { id: 'certificates', icon: FiAward, label: 'Certificates' },
  { id: 'contact', icon: FiMail, label: 'Contact' },
];

function DockItem({ item, mouseX }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [44, 64, 44]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      className="dock-item-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="dock-tooltip"
            initial={{ opacity: 0, y: 8, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        ref={ref}
        className="dock-item"
        style={{ width, height: width }}
        onClick={() => scrollToSection(item.id)}
        whileTap={{ scale: 0.9 }}
        aria-label={`Navigate to ${item.label}`}
      >
        <item.icon className="dock-icon" />
      </motion.button>
    </motion.div>
  );
}

export default function MagneticDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.nav
      className="magnetic-dock"
      initial={{ y: 100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, type: 'spring', stiffness: 100 }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <div className="dock-container">
        {dockItems.map((item) => (
          <DockItem key={item.id} item={item} mouseX={mouseX} />
        ))}
      </div>
    </motion.nav>
  );
}
