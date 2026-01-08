import React from 'react';

const ZeusPanel = () => {
    return (
        <div className="bg-surface-dark border border-white/5 rounded-2xl p-6 shadow-outer-panel h-80 relative overflow-hidden flex flex-col items-center justify-center group text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>

            {/* Spinning Center */}
            <div className="relative z-0 w-48 h-48 rounded-full border border-primary/10 flex items-center justify-center animate-spin-slow">
                <div className="absolute w-full h-full rounded-full border-t border-primary/30"></div>
                <div className="w-40 h-40 rounded-full border border-primary/20 flex items-center justify-center border-t-transparent border-l-transparent rotate-45 animate-reverse-spin">
                    <div className="w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
                </div>
            </div>

            {/* Text Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                <h3 className="font-display text-2xl font-bold text-white mb-1 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">ZEUS-X</h3>
                <div className="px-3 py-1 bg-surface-lighter border border-white/10 rounded-full text-[10px] text-primary font-mono inline-block tracking-widest shadow-lg">ENCRYPTION ENGINE</div>
            </div>

            {/* Bottom Params */}
            <div className="absolute bottom-0 left-0 w-full p-4 z-20 flex justify-between items-end border-t border-white/5 bg-black/60 backdrop-blur-md">
                <div className="text-left">
                    <div className="text-[10px] text-text-muted uppercase tracking-wider">Latency</div>
                    <div className="font-mono text-primary text-sm font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> 12ms
                    </div>
                </div>
                <div className="text-left">
                    <div className="text-[10px] text-text-muted uppercase tracking-wider">Security</div>
                    <div className="font-mono text-green-400 text-sm font-bold shadow-green-900 drop-shadow-sm">AES-256</div>
                </div>
                <div className="text-right">
                    <span className="material-icons-round text-primary animate-pulse drop-shadow-[0_0_5px_#FF5722]">wifi_tethering</span>
                </div>
            </div>
        </div>
    );
};

export default ZeusPanel;
