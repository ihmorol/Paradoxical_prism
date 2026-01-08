import React from 'react';
import { useNavigate } from 'react-router-dom';
import CyberButton from '../ui/CyberButton';

const HeroSection = ({ title, subtitle, primaryActions }) => {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col items-center justify-center text-center py-20 px-4 relative z-10">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-widest uppercase drop-shadow-[0_0_15px_rgba(255,94,0,0.3)] leading-tight">
                    {title.split(',').map((part, index) => (
                        <React.Fragment key={index}>
                            {index === 0 ? part : <span className="text-primary block mt-2">{part}</span>}
                            {index === 0 && ','}
                        </React.Fragment>
                    ))}
                </h1>
                <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed border-l-2 border-primary/30 pl-6 border-r-2 border-primary/30 pr-6">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                    {primaryActions.map((action, index) => (
                        <CyberButton
                            key={index}
                            onClick={() => navigate(action.link)}
                            variant={action.variant === 'primary' ? 'action' : 'primary'}
                            className={action.variant === 'primary' ? "w-64 h-auto py-4 rounded-xl text-lg hover:scale-105" : "px-8 py-3 rounded-xl"}
                        >
                            {action.label}
                        </CyberButton>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
