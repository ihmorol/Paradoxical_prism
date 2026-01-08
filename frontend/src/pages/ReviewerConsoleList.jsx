import React from 'react';
import { Link } from 'react-router-dom';

const ReviewerConsoleList = () => {
    return (
        <div className="flex flex-col h-full bg-dark-bg text-gray-300 font-body overflow-hidden p-4 lg:p-6 max-w-[1600px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 overflow-hidden h-full">
                <aside className="lg:col-span-3 flex flex-col gap-6 overflow-y-auto pr-1">
                    <div className="bg-surface-dark p-6 border border-white/10 relative group hover:border-primary/30 transition-colors shadow-card">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xs font-display text-gray-500 uppercase tracking-wider">Total Reports</h3>
                            <span className="material-symbols-outlined text-primary text-opacity-80">analytics</span>
                        </div>
                        <div className="text-4xl font-display font-bold text-white mb-2 tracking-tighter">1,248</div>
                        <div className="w-full bg-input-bg h-1 mt-2 overflow-hidden">
                            <div className="bg-primary h-full w-3/4 shadow-[0_0_10px_rgba(255,95,31,0.5)] relative">
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between text-xs font-mono">
                            <span className="text-green-500 flex items-center gap-1 shadow-black drop-shadow-sm">
                                <span className="material-symbols-outlined text-xs">trending_up</span> +12% CYCLE
                            </span>
                            <span className="text-gray-600">PREV_CYCLE_COMP</span>
                        </div>
                    </div>
                    <div className="bg-surface-dark p-6 border border-white/10 flex-1 flex flex-col justify-between relative overflow-hidden shadow-card min-h-[300px]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
                        <div>
                            <h3 className="text-xs font-display text-gray-500 uppercase tracking-wider mb-8 text-center border-b border-white/5 pb-2">Threat Level Assessment</h3>
                            <div className="relative h-48 w-48 mx-auto flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border border-dashed border-gray-700 animate-[spin_10s_linear_infinite]"></div>
                                <div className="absolute inset-2 rounded-full border border-dashed border-gray-800 animate-[spin_15s_linear_infinite_reverse]"></div>
                                <div className="absolute inset-4 rounded-full border-[2px] border-primary/20"></div>
                                <div className="absolute inset-4 rounded-full border-[2px] border-primary border-t-transparent border-l-transparent rotate-[45deg] shadow-[0_0_20px_rgba(255,95,31,0.4)]"></div>
                                <div className="text-center z-10 relative">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-primary animate-pulse">CRITICALITY</div>
                                    <span className="material-symbols-outlined text-primary text-5xl mb-1 drop-shadow-[0_0_8px_rgba(255,95,31,0.8)]">warning</span>
                                    <div className="text-3xl font-bold font-display text-white tracking-widest mt-1">HIGH</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-6">
                            <div className="bg-input-bg p-3 border border-white/5 text-center hover:border-primary/50 transition-colors group">
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 group-hover:text-primary">Active</div>
                                <div className="text-2xl font-bold text-white font-mono">42</div>
                            </div>
                            <div className="bg-input-bg p-3 border border-white/5 text-center hover:border-gray-500/50 transition-colors group">
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Closed</div>
                                <div className="text-2xl font-bold text-gray-500 font-mono group-hover:text-gray-300">105</div>
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="lg:col-span-9 flex flex-col bg-surface-dark border border-white/10 shadow-card relative">
                    <div className="p-5 border-b border-white/10 flex flex-wrap justify-between items-center gap-4 bg-surface-dark z-20">
                        <h2 className="font-display text-lg font-bold text-white flex items-center gap-3 tracking-widest">
                            <span className="w-1 h-6 bg-primary shadow-[0_0_10px_rgba(255,95,31,0.8)]"></span>
                            INCOMING STREAMS
                        </h2>
                        <div className="flex gap-3 items-center">
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-3 top-2 text-gray-600 text-sm group-focus-within:text-primary transition-colors">search</span>
                                <input className="bg-input-bg border border-white/10 text-gray-300 text-sm pl-9 pr-4 py-1.5 focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none w-64 font-mono placeholder-gray-700 transition-all" placeholder="SEARCH ID // KEYWORD" type="text" />
                            </div>
                            <button className="flex items-center gap-2 px-4 py-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/50 text-xs font-bold font-display tracking-wider transition-all shadow-[0_0_10px_rgba(255,95,31,0.1)] hover:shadow-[0_0_15px_rgba(255,95,31,0.6)] uppercase">
                                <span className="material-symbols-outlined text-sm">filter_list</span> Filter
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto flex-1 bg-surface-dark/50">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-[10px] font-display text-gray-500 border-b border-white/10 bg-input-bg">
                                    <th className="px-6 py-3 font-bold uppercase tracking-wider w-24">ID_REF</th>
                                    <th className="px-6 py-3 font-bold uppercase tracking-wider">Subject / Entity</th>
                                    <th className="px-6 py-3 font-bold uppercase tracking-wider">Sev_Lvl</th>
                                    <th className="px-6 py-3 font-bold uppercase tracking-wider">Timestamp</th>
                                    <th className="px-6 py-3 font-bold uppercase tracking-wider">Status_Code</th>
                                    <th className="px-6 py-3 font-bold uppercase tracking-wider text-right">Cmd</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 font-mono text-sm">
                                <tr className="group hover:bg-input-bg transition-colors cursor-pointer border-l-2 border-transparent hover:border-primary">
                                    <td className="px-6 py-4 text-primary font-bold tracking-wider">#8842-A</td>
                                    <td className="px-6 py-4">
                                        <div className="text-white font-bold group-hover:text-primary transition-colors tracking-wide">CORP_FINANCE_LEAK_01</div>
                                        <div className="text-xs text-gray-500 font-sans">Encrypted Attachment (24MB)</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-0.5 text-[10px] font-bold bg-red-900/20 text-red-500 border border-red-500/30 uppercase tracking-widest">CRITICAL</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">2023-10-24 14:02</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_currentColor] animate-pulse"></span>
                                            <span className="text-green-500 font-bold text-[10px] uppercase tracking-wider shadow-neon-green">NEW</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Link to="/reviewer/console/1" className="text-gray-500 hover:text-white transition-colors p-1 hover:bg-white/10 rounded inline-block">
                                            <span className="material-symbols-outlined text-lg">terminal</span>
                                        </Link>
                                    </td>
                                </tr>
                                <tr className="group hover:bg-input-bg transition-colors cursor-pointer border-l-2 border-transparent hover:border-primary">
                                    <td className="px-6 py-4 text-primary font-bold tracking-wider">#8841-B</td>
                                    <td className="px-6 py-4">
                                        <div className="text-white font-bold group-hover:text-primary transition-colors tracking-wide">PROJECT_ZEUS_BLUEPRINTS</div>
                                        <div className="text-xs text-gray-500 font-sans">Audio Log + Transcription</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-0.5 text-[10px] font-bold bg-orange-900/20 text-orange-400 border border-orange-500/30 uppercase tracking-widest">HIGH</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">2023-10-23 09:15</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_currentColor] animate-pulse"></span>
                                            <span className="text-primary font-bold text-[10px] uppercase tracking-wider">IN REVIEW</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Link to="/reviewer/console/2" className="text-gray-500 hover:text-white transition-colors p-1 hover:bg-white/10 rounded inline-block">
                                            <span className="material-symbols-outlined text-lg">terminal</span>
                                        </Link>
                                    </td>
                                </tr>
                                {/* More rows can be added here or generated dynamically */}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>

            <footer className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-[10px] font-mono tracking-wider text-gray-600 uppercase">
                <div className="bg-surface-dark px-4 py-2 border border-white/10 flex justify-between items-center group hover:border-primary/20 transition-colors shadow-card">
                    <span>SYSTEM STATUS</span>
                    <span className="text-green-500 flex items-center gap-2 drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]">
                        <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></span> ONLINE
                    </span>
                </div>
                <div className="bg-surface-dark px-4 py-2 border border-white/10 flex justify-between items-center group hover:border-primary/20 transition-colors shadow-card">
                    <span>ENCRYPTION</span>
                    <span className="text-primary group-hover:shadow-[0_0_5px_rgba(255,95,31,0.3)] transition-all">AES-256-GCM [LOCKED]</span>
                </div>
                <div className="bg-surface-dark px-4 py-2 border border-white/10 flex justify-between items-center group hover:border-primary/20 transition-colors shadow-card">
                    <span>LAST SYNC</span>
                    <span className="text-gray-400">00:04:21 UTC</span>
                </div>
                <div className="bg-surface-dark px-4 py-2 border border-white/10 flex justify-between items-center group hover:border-primary/20 transition-colors shadow-card">
                    <span>NODE</span>
                    <span className="text-gray-400">US-EAST-VA-09</span>
                </div>
            </footer>
        </div>
    );
};

export default ReviewerConsoleList;
