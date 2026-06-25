import { FiGithub, FiLinkedin, FiInstagram, FiHeart } from 'react-icons/fi';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/rafareza', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rafa-rezandrya-jaelani-070137391', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://www.instagram.com/rafa.reza_/', label: 'Instagram' },
];

export default function Footer() {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__border-top" />

      <div className="container footer__content">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <h3 className="footer__brand-name">Rafa Rezandrya</h3>
            <p className="footer__brand-desc">
              Information Systems student at Gunadarma University. Passionate and technology enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <h4 className="footer__contact-title">Contact</h4>
            <p>rafarezandrya@gmail.com</p>
            <p>Bekasi, Indonesia</p>
            <div className="footer__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="footer__social-link"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-line" />
          <p className="footer__copyright">
            © {new Date().getFullYear()} Rafa Rezandrya Jaelani.
          </p>
        </div>
      </div>
    </footer>
  );
}
