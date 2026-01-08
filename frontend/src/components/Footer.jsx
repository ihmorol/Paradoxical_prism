import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-6 mt-auto border-t border-border-dark bg-dark-bg/80 backdrop-blur-sm z-50 relative">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <div className="flex items-center gap-4">
                    <span className="text-primary font-bold">Paradoxical_Prism</span>
                    <span>//</span>
                    <span>System v.2.5.0</span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        <span>Node: Sync_Active</span>
                    </div>
                    <span>© 2026 All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
