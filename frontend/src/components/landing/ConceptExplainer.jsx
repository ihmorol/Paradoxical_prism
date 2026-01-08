import React from 'react';
import CyberCard from '../ui/CyberCard';

const ConceptExplainer = ({ text }) => {
    return (
        <div className="max-w-3xl mx-auto my-12 px-4">
            <CyberCard className="p-8 text-center bg-surface-dark/50 border-primary/20">
                <div className="space-y-4">
                    {text.map((paragraph, index) => (
                        <p key={index} className="text-lg text-gray-300 font-body leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </CyberCard>
        </div>
    );
};

export default ConceptExplainer;
