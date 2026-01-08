import React from 'react';

const CyberButton = ({ children, className = "", variant = "primary", ...props }) => {
    const baseStyles = "relative font-display font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-surface-lighter border border-white/10 hover:border-primary/50 hover:bg-surface-lighter/80 shadow-inset-panel text-text-muted hover:text-white",
        glow: "bg-input-bg text-gray-400 hover:text-white hover:border-primary/50 border border-border-dark shadow-lg",
        icon: "p-2 rounded-lg bg-input-bg text-gray-400 hover:bg-gray-800 hover:text-white border border-border-dark hover:border-gray-600",
        action: "w-28 h-28 rounded-full bg-surface-lighter border-[6px] border-surface-dark shadow-[0_0_0_2px_rgba(255,255,255,0.05),_8px_8px_20px_black,_-4px_-4px_15px_rgba(255,255,255,0.05)] flex items-center justify-center active:scale-95"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default CyberButton;
