import React from 'react';

const EthicsSafetyBlock = ({ heading, body }) => {
    return (
        <div className="max-w-4xl mx-auto my-12 px-4">
            <div className="bg-panel-bg border border-border-dark rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                        <span className="material-icons-round text-4xl text-primary p-4 bg-primary/10 rounded-full border border-primary/20">gavel</span>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wider">{heading}</h3>
                        <ul className="space-y-3">
                            {body.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-400">
                                    <span className="material-icons-round text-primary text-sm mt-1">warning</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EthicsSafetyBlock;
