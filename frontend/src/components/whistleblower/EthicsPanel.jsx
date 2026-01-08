import React from 'react';
import CyberCard from '../ui/CyberCard';

const EthicsPanel = () => {
    return (
        <CyberCard className="p-5 flex flex-col justify-center relative overflow-hidden h-full">
            <div className="absolute top-[-10px] right-[-10px] p-4 opacity-5 rotate-12">
                <span className="material-symbols-outlined text-6xl text-white">gavel</span>
            </div>
            <h4 className="font-display text-gray-500 uppercase text-[10px] tracking-[0.2em] mb-2 border-b border-gray-800 pb-2 inline-block w-max">Ethics Block</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed font-mono relative z-10">
                Usage constitutes agreement to Whistleblower Protection Act 2142. Reports are scrubbed of metadata. Do not upload classified schematics.
            </p>
            <div className="mt-3 flex items-center justify-end">
                <a className="text-[10px] uppercase font-bold text-primary hover:text-white transition flex items-center gap-1" href="#">
                    Read Policy <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                </a>
            </div>
        </CyberCard>
    );
};

export default EthicsPanel;
