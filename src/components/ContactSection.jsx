import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiInstagram, FiSend } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import NeonButton from './NeonButton';
import './ContactSection.css';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'rafa.rezandrya08@gmail.com', href: 'mailto:rafa.rezandrya08@gmail.com' },
  { icon: FiMapPin, label: 'Lokasi', value: 'Bekasi, Indonesia', href: null },
  { icon: FiPhone, label: 'Phone', value: '+6285894109114', href: 'https://wa.me/6285894109114' },
];

const socialLinks = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/rafarezandrya' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/rafarezandrya' },
  { icon: FiInstagram, label: 'Instagram', href: 'https://instagram.com/rafarezandrya_' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mailto fallback
    const mailtoLink = `mailto:rafarezandrya@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeader title="Contact" subtitle="Let’s connect and collaborate" />

        <motion.div
          className="contact-section__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Contact Info */}
          <motion.div className="contact-section__info" variants={itemVariants}>
            <h3 className="contact-section__info-title">Get In Touch</h3>
            <p className="contact-section__info-desc">
               feel free to contact me if you're interested in collaborating or have any questions. 
               I'm always open to new opportunities and discussions
            </p>

            <div className="contact-section__info-list">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-section__info-item">
                  <div className="contact-section__info-icon">
                    <item.icon />
                  </div>
                  <div>
                    <span className="contact-section__info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact-section__info-value">{item.value}</a>
                    ) : (
                      <span className="contact-section__info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-section__socials">
              <span className="contact-section__socials-label">Follow Me</span>
              <div className="contact-section__socials-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-section__social-link"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact-section__form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="contact-section__form-row">
              <div className="contact-section__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-section__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="contact-section__field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-section__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <NeonButton type="submit" variant="primary" className="contact-section__submit">
              <FiSend />
              Send Message
            </NeonButton>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
