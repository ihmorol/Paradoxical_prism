import React from 'react';
import CyberCard from '../ui/CyberCard';

const HiddenReportsSection = () => {
    return (
        <div className="lg:col-span-8 bg-panel-bg rounded-2xl p-6 lg:p-8 relative border border-border-dark flex flex-col justify-between overflow-hidden group h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30"></div>

            {/* Header */}
            <div className="flex justify-between items-start mb-8 z-10 relative">
                <div>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase mb-2 text-white tracking-wide drop-shadow-md">Hidden Reports</h2>
                    <h3 className="font-display text-2xl lg:text-3xl font-light text-gray-600 uppercase tracking-widest">Visible Art</h3>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-input-bg rounded border border-border-dark text-xs font-bold tracking-widest text-gray-400 hover:text-white hover:border-primary/50 transition shadow-lg">
                    SECURE MODE <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span>
                </button>
            </div>

            {/* Visualization Area */}
            <div className="flex-1 relative flex items-center mb-8">
                <div className="relative z-10">
                    <div className="bg-gradient-to-r from-[#1E1E24] to-[#1a1a20] p-1 rounded-l-lg pr-4 inline-flex items-center shadow-2xl border-l-4 border-primary ring-1 ring-white/5">
                        <div className="px-6 py-4">
                            <span className="block text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">Encrypted Input</span>
                            <span className="font-display text-xl text-white tracking-wider">RAW DATA</span>
                        </div>
                    </div>
                    <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(255,94,0,0.4)] z-20 border border-white/20">
                        <span className="material-symbols-outlined text-white animate-pulse">lock</span>
                    </div>
                </div>

                {/* SVG Path */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                    <path className="drop-shadow-[0_0_5px_rgba(255,94,0,0.5)]" d="M180,50 C350,50 350,20 550,20" fill="none" stroke="#FF5E00" strokeOpacity="0.8" strokeWidth="2"></path>
                    <path d="M180,50 C350,50 350,60 550,60" fill="none" stroke="#333" strokeOpacity="0.5" strokeWidth="2"></path>
                    <path d="M180,50 C350,50 350,100 550,100" fill="none" stroke="#333" strokeOpacity="0.5" strokeWidth="2"></path>
                    <path d="M180,50 C350,50 350,140 550,140" fill="none" stroke="#333" strokeOpacity="0.5" strokeWidth="2"></path>
                </svg>

                {/* Status List */}
                <div className="ml-auto flex flex-col gap-4 z-10 w-56">
                    <div className="flex items-center justify-between group/item cursor-pointer">
                        <div className="text-right mr-4">
                            <span className="block text-[10px] text-primary font-bold tracking-wider">ACTIVE</span>
                            <span className="font-display text-lg text-white tracking-wide drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Steganography</span>
                        </div>
                        <div className="w-12 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(255,94,0,0.8)]"></div>
                    </div>
                    <div className="flex items-center justify-between group/item opacity-40 hover:opacity-100 transition duration-300">
                        <div className="text-right mr-4">
                            <span className="block text-[10px] text-gray-500 tracking-wider">IDLE</span>
                            <span className="font-display text-lg text-gray-300">Metadata Strip</span>
                        </div>
                        <div className="w-12 h-2 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between group/item opacity-40 hover:opacity-100 transition duration-300">
                        <div className="text-right mr-4">
                            <span className="block text-[10px] text-gray-500 tracking-wider">IDLE</span>
                            <span className="font-display text-lg text-gray-300">IP Masking</span>
                        </div>
                        <div className="w-12 h-2 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between group/item opacity-40 hover:opacity-100 transition duration-300">
                        <div className="text-right mr-4">
                            <span className="block text-[10px] text-gray-500 tracking-wider">OFFLINE</span>
                            <span className="font-display text-lg text-gray-300">Visual Noise</span>
                        </div>
                        <div className="w-12 h-2 bg-gray-800 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Footer Stats */}
            <div className="flex items-end justify-between border-t border-border-dark pt-6">
                <div>
                    <span className="block text-5xl font-display font-bold text-white drop-shadow-sm">24<span className="text-2xl text-gray-600 align-top ml-1">HR</span></span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mt-1 block">Encryption Cycle</span>
                </div>
                <div className="relative w-48">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2 block text-right">System Load</span>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-1/3 relative shadow-[0_0_10px_#FF5E00]">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_5px_white]"></div>
                        </div>
                    </div>
                    <svg className="absolute -bottom-4 left-0 w-full h-8 opacity-30" preserveAspectRatio="none" viewBox="0 0 100 20">
                        <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="#FF5E00" strokeWidth="1"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HiddenReportsSection;
