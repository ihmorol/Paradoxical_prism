import React from 'react';

const Gallery = () => {
    return (
        <div className="flex flex-col h-full relative p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
            <div className="fixed inset-0 pointer-events-none grid-pattern opacity-30 z-0"></div>

            <div className="flex items-end justify-between mb-8 relative z-10">
                <div>
                    <h2 className="font-display text-4xl text-white mb-2 uppercase tracking-wide">Public Evidence</h2>
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-widest border-l-2 border-primary pl-3">Encrypted Submissions // Level 4 Access</p>
                </div>
                <div className="flex space-x-2">
                    <button className="px-4 py-1.5 rounded bg-surface-dark border border-border-dark text-xs uppercase tracking-wider text-gray-400 hover:border-primary hover:text-primary transition-all">Latest</button>
                    <button className="px-4 py-1.5 rounded bg-surface-dark border border-border-dark text-xs uppercase tracking-wider text-gray-400 hover:border-primary hover:text-primary transition-all">Verified</button>
                    <button className="px-4 py-1.5 rounded bg-surface-dark border border-primary text-primary text-xs uppercase tracking-wider shadow-glow">All</button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
                {/* Article 1 */}
                <article className="group relative bg-surface-dark rounded-2xl overflow-hidden border border-border-dark hover:border-primary transition-all duration-300 hover:shadow-glow-hover hover:-translate-y-1 cursor-pointer">
                    <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">Audio Log</span>
                    </div>
                    <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                        <img alt="Abstract dark server room with neon lights" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRtdngq-qBr4XuL08GglWuiZIVcj46FJkUve0sjEG37arwQ7w8vYFIEp_uDvQQIsBwq-H_AINgv-2qHkLCWsajj_m2eF_xyC7oPS0Wc8J46-VL8UEO__s_OzMIfCQlO5Hb39jNejeFQ1eRi_ezLq2LH1P4CyAi3UA1L0Ro_-PovjB1UUMl9RM8PqORydB3oPP29cSOTHj0htFsEytzsUNMZQ142YoRm594qrC6lQmyZDr518UKDbPr4lck9tbKac57OiW44YhR1C37" />
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 mix-blend-overlay z-10"></div>
                    </div>
                    <div className="p-5 relative z-20 bg-surface-dark border-t border-border-dark">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-surface-dark border-4 border-surface-dark flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all">
                            <div className="w-full h-full rounded-full border border-gray-600 bg-gray-900 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-lg group-hover:text-white transition-colors">graphic_eq</span>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-end border-t border-gray-800 pt-3">
                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Upload Date</h4>
                                <p className="text-lg font-display font-bold text-white">2049.10.24</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse mb-1"></span>
                                <span className="text-[10px] text-primary uppercase font-bold tracking-wider">Encrypted</span>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Article 2 */}
                <article className="group relative bg-surface-dark rounded-2xl overflow-hidden border border-border-dark hover:border-primary transition-all duration-300 hover:shadow-glow-hover hover:-translate-y-1 cursor-pointer">
                    <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">Schematic</span>
                    </div>
                    <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                        <img alt="Abstract digital circuit board in blue and orange" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuUZXwUO1DuqCgE1fSGr2wTIDBsbB1hS478ztnAw6Ng1j869kDFs4WIw4E_DM-vyGzYtr0J9SBG-QXH56_XRNDthTcc_X24jn1zvLPNpKCuG-che1uIyfTLQjezpXLgRZH1NtZVLHFCGmuYFJGsChkLRS3u5ct6pUM-awIYZhKR_mEwF9wLNpUN4pWAdsbePNq2r0FImyiv3j6R3lSYtqmlJURw7OhmeRULSVETwD4Qv0YCnSPeatGJ2tLjd4hPIIp20a2VZ7Ilm28" />
                    </div>
                    <div className="p-5 relative z-20 bg-surface-dark border-t border-border-dark">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-surface-dark border-4 border-surface-dark flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all">
                            <div className="w-full h-full rounded-full border border-gray-600 bg-gray-900 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-lg group-hover:text-white transition-colors">architecture</span>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-end border-t border-gray-800 pt-3">
                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Upload Date</h4>
                                <p className="text-lg font-display font-bold text-white">2049.11.02</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="w-2 h-2 rounded-full bg-gray-600 mb-1"></span>
                                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Verifying</span>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Article 3 */}
                <article className="group relative bg-surface-dark rounded-2xl overflow-hidden border border-border-dark hover:border-primary transition-all duration-300 hover:shadow-glow-hover hover:-translate-y-1 cursor-pointer">
                    <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">Surveillance</span>
                    </div>
                    <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                        <img alt="Dark moody rainy futuristic city street" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUMt8WnqaHuDPHpYSr0Dhmnhj3Y2bxlJdmeHsYqzWCvSPNY1r5lo-xnESxminfEshImsjsg66WvAoGJsif0CFaP1HgOpWXbxW4oI3zz9JYBv4ASPLck7Ur_AXgK-DCQwq-LgR3OQAHrFGVJkNNj--AFB6MdcmbiW-ky2Ymbg-e4kxaVrdwzsTlDf-cnQjj8APzdnZiryUuL3ho5lO1PfwcQHjWGh9RbPX84Dm-2EqBpej1zNc0xMK5K8fBjeFobLMhXwzmpwpW7a6p" />
                    </div>
                    <div className="p-5 relative z-20 bg-surface-dark border-t border-border-dark">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-surface-dark border-4 border-surface-dark flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all">
                            <div className="w-full h-full rounded-full border border-gray-600 bg-gray-900 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-lg group-hover:text-white transition-colors">videocam</span>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-end border-t border-gray-800 pt-3">
                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Upload Date</h4>
                                <p className="text-lg font-display font-bold text-white">2049.11.05</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse mb-1"></span>
                                <span className="text-[10px] text-primary uppercase font-bold tracking-wider">Leaked</span>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Article 4 */}
                <article className="group relative bg-surface-dark rounded-2xl overflow-hidden border border-border-dark hover:border-primary transition-all duration-300 hover:shadow-glow-hover hover:-translate-y-1 cursor-pointer">
                    <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">Data Dump</span>
                    </div>
                    <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                        <img alt="Matrix style green code rain" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrNJ5ygY7RL_IDExRUKKu79i_lcSXKNzE_z1Xay1N-GN5U9DhzNpPCi68k0PNL2DMpuNvWiieNmGUrm3lZ2vcOhEsY7-0l31kmrVcBg5OodP8265U7mdRC7x4qARSxFA76HqLhDou0F4pmKzbK6nKJeLn_YsKI50qLhtCUF0bV0jpCrP7loDNhEKihCeFnHdIZM6FXhdZJLWmFpGWCQ4LRXFQqvjM0f0DNJ6lkGOLsZjwvuaLSl42RJhBt24yyWYOgFp7Cf7Y03eD4" />
                    </div>
                    <div className="p-5 relative z-20 bg-surface-dark border-t border-border-dark">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-surface-dark border-4 border-surface-dark flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all">
                            <div className="w-full h-full rounded-full border border-gray-600 bg-gray-900 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-lg group-hover:text-white transition-colors">code</span>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-end border-t border-gray-800 pt-3">
                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Upload Date</h4>
                                <p className="text-lg font-display font-bold text-white">2049.11.12</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse mb-1"></span>
                                <span className="text-[10px] text-primary uppercase font-bold tracking-wider">Raw</span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div className="flex justify-center mt-12 mb-8 relative z-10">
                <button className="group flex items-center space-x-2 px-6 py-3 border border-border-dark rounded-full text-sm font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all bg-surface-dark shadow-lg">
                    <span>Load More Evidence</span>
                    <span className="material-symbols-outlined text-base group-hover:animate-bounce">expand_more</span>
                </button>
            </div>

            <div className="fixed bottom-8 right-8 z-50">
                <button className="bg-primary hover:bg-orange-600 text-white w-14 h-14 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.5)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 group">
                    <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">add</span>
                </button>
            </div>
        </div>
    );
};

export default Gallery;
