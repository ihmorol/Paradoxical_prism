import React from 'react';

const ConnectionPanel = () => {
    return (
        <div className="bg-[#08080a] rounded-xl p-5 relative overflow-hidden flex flex-col justify-between border border-border-dark group hover:border-primary/30 transition-colors h-full">
            <div className="absolute inset-0 bg-carbon opacity-10 mix-blend-overlay pointer-events-none"></div>
            <div className="relative z-10 w-full">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Connection</span>
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_5px_#FF5E00]"></div>
                        <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-50"></div>
                        <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-20"></div>
                    </div>
                </div>
                <div className="h-16 flex items-center justify-center relative my-1">
                    <div className="absolute w-full h-[2px] bg-gray-800 rounded-full"></div>
                    <div className="w-10 h-10 rounded-full border border-gray-600 bg-[#0B0C10] flex items-center justify-center z-10 relative shadow-[0_0_15px_rgba(255,94,0,0.2)]">
                        <span className="material-symbols-outlined text-primary text-lg animate-pulse">wifi_tethering</span>
                        <div className="absolute w-14 h-14 border border-primary/20 rounded-full animate-[spin_4s_linear_infinite] border-t-transparent border-l-transparent"></div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="font-display text-sm text-gray-400 uppercase tracking-wide">Tunneling</span>
                    <div className="flex items-center bg-gray-900 rounded-full px-2 py-1 border border-gray-800">
                        <span className="text-[9px] uppercase font-bold text-gray-400 mr-2">ON</span>
                        <div className="w-6 h-1.5 bg-primary/20 rounded-full relative overflow-hidden">
                            <div className="absolute left-0 top-0 h-full w-full bg-primary/80 shadow-[0_0_5px_#FF5E00]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectionPanel;
