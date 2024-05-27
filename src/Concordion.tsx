import React, { useState, ReactNode } from 'react';
import './Concordion.css';

interface ConcordionProps {
  title: string;
  children: ReactNode;
}

const Concordion: React.FC<ConcordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="concordion">
      <div className="concordion-header" onClick={toggleOpen}>
        {title}
      </div>
      {isOpen && <div className="concordion-content">{children}</div>}
    </div>
  );
};

export default Concordion;
