import { useRef } from 'react';
import './NeonButton.css';

export default function NeonButton({ children, href, onClick, variant = 'primary', type = 'button', className = '' }) {
  const btnRef = useRef(null);

  const handleClick = (e) => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={btnRef}
      className={`neon-button neon-button--${variant} ${className}`}
      onClick={handleClick}
      type={type}
    >
      <span className="neon-button__border" />
      <span className="neon-button__content">
        {children}
      </span>
    </button>
  );
}
