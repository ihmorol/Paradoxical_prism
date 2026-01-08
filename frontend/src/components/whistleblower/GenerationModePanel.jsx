import React from 'react';
import CyberButton from '../ui/CyberButton';

const GenerationModePanel = () => {
    return (
        <div className="bg-surface-dark border border-white/5 rounded-2xl p-6 shadow-outer-panel flex-grow flex flex-col justify-between relative overflow-hidden min-h-[400px]">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>

            <div>
                <h3 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-white/5 pb-3 flex items-center gap-2">
                    <span className="material-icons-round text-primary text-base">settings_suggest</span>
                    Generation Mode
                </h3>
                <div className="space-y-5">
                    {/* Toggle 1 */}
                    <div className="flex items-center justify-between group cursor-pointer">
                        <span className="text-sm text-text-muted group-hover:text-white transition-colors font-medium">Steganography</span>
                        <div className="w-12 h-6 rounded-full bg-surface-lighter border border-white/10 relative shadow-inset-panel transition-colors group-hover:border-primary/30">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(255,87,34,0.8)] transition-transform group-hover:scale-110"></div>
                        </div>
                    </div>
                    {/* Toggle 2 */}
                    <div className="flex items-center justify-between group cursor-pointer">
                        <span className="text-sm text-text-muted group-hover:text-white transition-colors font-medium">Metadata Scrub</span>
                        <div className="w-12 h-6 rounded-full bg-surface-lighter border border-white/10 relative shadow-inset-panel transition-colors group-hover:border-primary/30">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(255,87,34,0.8)] transition-transform group-hover:scale-110"></div>
                        </div>
                    </div>
                    {/* Toggle 3 */}
                    <div className="flex items-center justify-between group cursor-pointer">
                        <span className="text-sm text-text-muted group-hover:text-white transition-colors font-medium">Blockchain Hash</span>
                        <div className="w-12 h-6 rounded-full bg-surface-lighter border border-white/10 relative shadow-inset-panel transition-colors group-hover:border-white/20">
                            <div className="absolute left-1 top-1 w-4 h-4 bg-gray-600 rounded-full transition-colors group-hover:bg-gray-500"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex flex-col items-center">
                <CyberButton variant="action">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2a2c35] to-[#15161c] rounded-full"></div>
                    <div className="absolute inset-2 rounded-full border border-white/5 bg-gradient-to-br from-white/5 to-transparent"></div>
                    <span className="material-icons-round text-5xl text-gray-500 group-hover:text-white relative z-10 transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">fingerprint</span>
                    <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_30px_theme('colors.primary.DEFAULT')] transition-all duration-300 scale-90 group-hover:scale-100 animate-pulse"></div>
                </CyberButton>

                <div className="mt-5 text-center group cursor-pointer">
                    <span className="font-display font-bold text-white uppercase tracking-widest text-sm group-hover:text-primary transition-colors">Generate</span>
                    <div className="text-[10px] text-primary uppercase tracking-[0.3em] opacity-80 mt-1 font-mono group-hover:opacity-100 group-hover:drop-shadow-[0_0_5px_#FF5722]">Hidden Artwork</div>
                </div>
            </div>
        </div>
    );
};

export default GenerationModePanel;
