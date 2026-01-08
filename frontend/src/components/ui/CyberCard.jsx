import React from 'react';

const CyberCard = ({ children, className = "", hoverEffect = false }) => {
    return (
        <div
            className={`
        bg-panel-bg border border-border-dark rounded-2xl relative overflow-hidden 
        ${hoverEffect ? 'hover:border-primary/50 transition-colors duration-300 group cursor-pointer' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default CyberCard;
