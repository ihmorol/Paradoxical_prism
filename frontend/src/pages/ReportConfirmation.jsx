import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const ReportConfirmation = () => {
    const handleCopy = () => {
        navigator.clipboard.writeText('XK92-M40A-Z77L');
        toast.success('Secret key copied to clipboard');
    };

    return (
        <div className="flex flex-col h-full relative font-body text-gray-800 dark:text-gray-200">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex-1 p-6 md:p-8 flex items-center justify-center relative z-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-7xl h-full">
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <div className="bg-white dark:bg-panel-bg rounded-2xl p-8 border border-gray-200 dark:border-border-dark shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between group">
                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                <div className="flex gap-2">
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-gray-900 dark:text-white mb-2">Submission <br /><span className="text-primary">Encrypted</span></h1>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">Upload Complete • Secure Channel</span>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-surface-dark rounded-lg text-xs font-mono tracking-wider hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-transparent hover:border-primary/50 text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-sm">print</span> PRINT RECEIPT
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                                <div className="relative w-full md:w-1/2 aspect-square md:aspect-video bg-gray-100 dark:bg-black rounded-xl border border-gray-300 dark:border-border-dark overflow-hidden flex items-center justify-center shadow-inner-glow">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                                    <div className="relative z-10 text-center">
                                        <div className="w-20 h-20 border-2 border-dashed border-primary/50 rounded-full flex items-center justify-center mx-auto mb-4 animate-[spin_10s_linear_infinite]">
                                            <span className="material-symbols-outlined text-3xl text-primary">fingerprint</span>
                                        </div>
                                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Evidence #9942-X</p>
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 shadow-[0_0_15px_rgba(255,107,0,0.8)] animate-[scan_3s_ease-in-out_infinite]"></div>
                                </div>
                                <div className="flex-1 w-full h-full flex flex-col justify-center space-y-6">
                                    <div className="bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-border-dark rounded-xl p-6 relative">
                                        <div className="absolute -top-3 left-4 bg-white dark:bg-panel-bg px-2 text-xs font-bold text-primary uppercase tracking-widest">Secret Key</div>
                                        <div className="font-mono text-2xl md:text-3xl text-center tracking-widest text-gray-800 dark:text-white select-all cursor-text py-2" id="secret-key">
                                            XK92-M40A-Z77L
                                        </div>
                                        <div className="mt-4 flex justify-between items-center">
                                            <span className="text-xs text-gray-500 font-mono">SHA-256 ENCRYPTED</span>
                                            <button className="text-primary hover:text-white text-xs uppercase font-bold tracking-wider flex items-center gap-1 transition-colors" onClick={handleCopy}>
                                                <span className="material-symbols-outlined text-sm">content_copy</span> Copy
                                            </button>
                                        </div>
                                    </div>
                                    <div className="border-l-2 border-primary pl-4 py-1">
                                        <h3 className="text-primary font-bold text-sm uppercase tracking-wide mb-1 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">warning</span> Critical Warning
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed">
                                            Do not lose this key. It is the <span className="text-white font-semibold">only way</span> to check the status of your report or communicate with the reviewer anonymously.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/5 flex flex-wrap gap-8 items-center">
                                <div>
                                    <div className="text-xs text-gray-500 uppercase mb-1">Estimated Review</div>
                                    <div className="text-xl font-display font-semibold text-gray-900 dark:text-white">48 <span className="text-sm font-normal text-gray-500">HRS</span></div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase mb-1">Priority Level</div>
                                    <div className="text-xl font-display font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                        HIGH <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                    </div>
                                </div>
                                <div className="flex-1 hidden sm:block">
                                    <div className="flex justify-between text-xs text-gray-500 mb-1 font-mono">
                                        <span>ENCRYPTION</span>
                                        <span>100%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full w-full shadow-neon"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-48">
                            <div className="bg-white dark:bg-panel-bg rounded-2xl p-6 border border-gray-200 dark:border-border-dark flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Network Integrity</span>
                                    <span className="material-symbols-outlined text-green-500 text-lg">wifi_tethering</span>
                                </div>
                                <div className="flex items-end gap-4">
                                    <div className="flex-1 space-y-1">
                                        <div className="h-1 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[85%]"></div>
                                        </div>
                                        <div className="h-1 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[92%]"></div>
                                        </div>
                                        <div className="h-1 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[78%]"></div>
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">Active</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-panel-bg rounded-2xl p-6 border border-gray-200 dark:border-border-dark flex flex-col justify-between relative overflow-hidden">
                                <div className="absolute right-0 top-0 w-20 h-20 bg-primary/10 rounded-bl-full"></div>
                                <div className="flex justify-between items-start z-10">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Anonymity Route</span>
                                    <span className="material-symbols-outlined text-primary text-lg">vpn_lock</span>
                                </div>
                                <div className="z-10">
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Routed via Tor</div>
                                    <div className="text-xs text-gray-500 font-mono">IP: HIDDEN • LOC: UNKNOWN</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="bg-gray-900 dark:bg-black rounded-2xl p-0 border border-gray-200 dark:border-border-dark overflow-hidden relative flex-1 min-h-[400px]">
                            <img alt="Abstract cyberpunk server room" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-color-dodge" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-q5pSN4f7-EozPJ9joOYlM5R9XQJdWQ5Zqd9wqoh0VPA4psxiajW958pk0qNtrRJEv3VwHwGeHDPpCluYuLetmzv3g54D0iyxWjoojyY3zidXBPdXMmwES92KYi4rKCBie8Lvvm7Zb5MQ9nmb-6QIu_tQOhEMTFGZBBKQ1zG4kuRe8FRL1w4i00sulaNxPsgUc9FD0ynQF-JGiFXDkmiKp6BR0u89mnSN-A5UI6YE7wLEuZxSghYAMhNHj2oAOUMdIvIQ64z3mhOY" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Vault<span class="text-primary">-X</span></h2>
                                    <div className="px-2 py-1 bg-gray-800 rounded border border-gray-600 text-[10px] text-gray-300 font-mono">READ-ONLY</div>
                                </div>
                                <div className="flex-1 flex items-center justify-center my-4">
                                    <div className="relative w-40 h-40">
                                        <div className="absolute inset-0 border-2 border-dashed border-gray-600 rounded-full animate-[spin_20s_linear_infinite]"></div>
                                        <div className="absolute inset-4 border border-primary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-6xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">lock</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <span className="text-xs font-bold text-gray-400 uppercase">Status</span>
                                    <div className="w-12 h-12 rounded-full border-2 border-gray-700 bg-gray-900 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                        <span className="material-symbols-outlined text-primary text-xl drop-shadow-[0_0_5px_rgba(255,107,0,0.8)]">power_settings_new</span>
                                    </div>
                                    <span className="text-xs font-bold text-white uppercase">Secured</span>
                                </div>
                                <div className="border-t border-gray-800 pt-4">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="text-[10px] text-gray-500 uppercase">Retention Policy</div>
                                            <div className="text-sm text-gray-300 font-mono">30 DAYS AUTO-WIPE</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] text-gray-500 uppercase">Vault Cap</div>
                                            <div className="text-sm text-primary font-mono">42% USED</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-panel-bg rounded-2xl p-6 border border-gray-200 dark:border-border-dark h-auto">
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6 text-center">Next Steps</h3>
                            <div className="relative flex items-center justify-center mb-4">
                                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" fill="none" r="45" stroke="#1F2229" strokeWidth="8"></circle>
                                    <circle className="drop-shadow-[0_0_5px_rgba(255,107,0,0.5)]" cx="50" cy="50" fill="none" r="45" stroke="#FF6B00" strokeDasharray="283" strokeDashoffset="70" strokeLinecap="round" strokeWidth="8"></circle>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-xl mb-1">verified</span>
                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">1/3</span>
                                </div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 font-mono mt-2">
                                <span>SUBMITTED</span>
                                <span>REVIEW</span>
                                <span>ACTION</span>
                            </div>
                            <div className="mt-6 flex gap-3">
                                <Link to="/" className="flex-1 bg-gray-200 dark:bg-surface-dark hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors text-center flex items-center justify-center">
                                    Home
                                </Link>
                                <button className="flex-1 bg-primary hover:bg-orange-600 text-white py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-neon transition-colors">
                                    Check Status
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="w-full py-4 text-center border-t border-gray-200 dark:border-border-dark bg-white/80 dark:bg-black/90 text-gray-500 text-xs font-mono uppercase z-10 sticky bottom-0">
                Phoenix Secure System v2.0.4 • Authorized Personnel Only • <span className="text-primary">Encrypted connection established</span>
            </footer>
        </div>
    );
};

export default ReportConfirmation;
