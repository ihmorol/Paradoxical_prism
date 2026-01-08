import React from 'react';
import CyberCard from '../ui/CyberCard';

const StatusPanel = () => {
    return (
        <CyberCard className="p-5 flex flex-col justify-between h-full">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold border-b border-gray-800 pb-2">Protocol Status</h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
                <div>
                    <span className="block text-gray-600 text-[10px] uppercase mb-0.5">Mode</span>
                    <span className="font-display font-bold text-white flex items-center gap-2">
                        GHOST <span className="material-symbols-outlined text-xs text-primary animate-pulse">bolt</span>
                    </span>
                </div>
                <div>
                    <span className="block text-gray-600 text-[10px] uppercase mb-0.5">Uptime</span>
                    <span className="font-display font-bold text-white">99.9%</span>
                </div>
                <div>
                    <span className="block text-gray-600 text-[10px] uppercase mb-0.5">Frequency</span>
                    <span className="font-display font-bold text-white">440 HZ</span>
                </div>
                <div>
                    <span className="block text-gray-600 text-[10px] uppercase mb-0.5">Nodes</span>
                    <span className="font-display font-bold text-white">1,024</span>
                </div>
            </div>
        </CyberCard>
    );
};

export default StatusPanel;
