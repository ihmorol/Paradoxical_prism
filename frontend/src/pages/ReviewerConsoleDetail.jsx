import React from 'react';

const ReviewerConsoleDetail = () => {
    return (
        <div className="flex flex-col h-full bg-dark-bg text-gray-300 font-body overflow-hidden relative p-4 lg:p-6 max-w-[1600px] mx-auto w-full">
            <div className="fixed inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] opacity-[0.07] pointer-events-none"></div>
            <div className="scanline"></div>

            <main className="flex-1 p-6 flex flex-col gap-6 overflow-hidden relative z-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 shrink-0">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-900/30 text-green-500 border border-green-500/20 uppercase tracking-wider">Secure Connection</span>
                            <span className="h-px w-8 bg-border-dark"></span>
                        </div>
                        <h1 className="font-display text-3xl font-bold text-white uppercase tracking-wider">
                            Reviewer Console <span className="text-primary text-lg align-top opacity-80">v2.4</span>
                        </h1>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 rounded bg-panel-bg border border-border-dark text-xs font-bold uppercase tracking-wider hover:border-primary/50 hover:text-white transition-all text-gray-500">
                            <span className="material-symbols-outlined text-sm">history</span> History
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded bg-panel-bg border border-border-dark text-xs font-bold uppercase tracking-wider hover:border-primary/50 hover:text-white transition-all text-gray-500">
                            <span className="material-symbols-outlined text-sm">bug_report</span> Flag
                        </button>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
                    <div className="lg:col-span-4 flex flex-col gap-5 overflow-y-auto custom-scrollbar pr-2">
                        <div className="bg-panel-bg border border-border-dark rounded-lg p-5 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary/50"></div>
                            <div className="absolute -right-6 -top-6 text-border-dark/30 group-hover:text-primary/5 transition-colors">
                                <span className="material-symbols-outlined text-[8rem]">fingerprint</span>
                            </div>
                            <h2 className="font-display text-white text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-xl">folder_shared</span> Asset Status
                            </h2>
                            <div className="grid grid-cols-2 gap-3 mb-5 relative z-10">
                                <div className="bg-black/40 p-3 rounded border border-white/5">
                                    <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Clearance</div>
                                    <div className="text-xl font-display font-bold text-white flex items-center gap-1">
                                        LVL 5 <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                                    </div>
                                </div>
                                <div className="bg-black/40 p-3 rounded border border-white/5">
                                    <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Risk Factor</div>
                                    <div className="text-xl font-display font-bold text-white flex items-center gap-1">
                                        HIGH <span className="material-symbols-outlined text-red-500 text-sm animate-pulse">warning</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3 relative z-10 text-sm">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500 uppercase text-xs font-bold">Source ID</span>
                                    <span className="font-mono text-white">WHISTLE_XJ9</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500 uppercase text-xs font-bold">Date</span>
                                    <span className="font-mono text-white">2084.11.05</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500 uppercase text-xs font-bold">Encryption</span>
                                    <span className="font-mono text-primary">AES-4096-GCM</span>
                                </div>
                                <div className="flex justify-between items-center pt-1">
                                    <span className="text-gray-500 uppercase text-xs font-bold">Integrity</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                                        </div>
                                        <span className="font-mono text-xs text-green-500">100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-panel-bg border border-border-dark rounded-lg p-5">
                            <h2 className="font-display text-white text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-xl">psychology</span> AI Analysis
                            </h2>
                            <div className="flex items-center gap-6 mb-5">
                                <div className="relative w-20 h-20 flex items-center justify-center">
                                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
                                        <path className="text-gray-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                        <path className="text-primary drop-shadow-[0_0_3px_rgba(255,102,0,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="94, 100" strokeWidth="3"></path>
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="text-lg font-bold font-display text-white">94%</span>
                                    </div>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-gray-500 uppercase">Credibility</span>
                                        <span className="text-primary font-mono font-bold">VERIFIED</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-gray-500 uppercase">Sentiment</span>
                                        <span className="text-white">Negative / Alarmist</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-gray-500 uppercase">Entities</span>
                                        <span className="text-white">14 Corps Found</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-panel-bg border border-border-dark rounded-lg p-5 flex-1">
                            <h2 className="font-display text-white text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-xl">account_tree</span> Workflow
                            </h2>
                            <div className="space-y-3">
                                {[
                                    "Metadata Verification",
                                    "Source Anonymization",
                                    "Legal Compliance Check",
                                    "Final Approval"
                                ].map((item, index) => (
                                    <label key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-white/5 transition-colors cursor-pointer group border border-transparent hover:border-white/5">
                                        <input defaultChecked={index < 2} type="checkbox" className="form-checkbox h-4 w-4 text-primary bg-black border-gray-600 rounded focus:ring-0 focus:ring-offset-0" />
                                        <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 flex flex-col h-full bg-panel-bg border border-border-dark rounded-lg overflow-hidden relative shadow-2xl">
                        <div className="bg-black/40 border-b border-border-dark h-12 flex items-center justify-between px-4 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="h-4 w-px bg-border-dark mx-1"></div>
                                <span className="font-mono text-xs text-primary/80 tracking-wide">/root/intercepts/classified/project_zeus.txt</span>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-gray-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">search</span></button>
                                <button className="text-gray-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">download</span></button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 bg-black/20 font-mono relative">
                            <div className="absolute top-10 right-10 pointer-events-none opacity-5">
                                <span className="material-symbols-outlined text-[12rem]">lock_open</span>
                            </div>
                            <div className="max-w-3xl mx-auto space-y-6">
                                <div className="border-b border-primary/20 pb-4 mb-8">
                                    <h3 className="text-2xl text-white font-bold mb-2 font-display tracking-wider">PROJECT ZEUS: ENERGY DIVERSION PROTOCOLS</h3>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-1">Confidential - Eyes Only</p>
                                            <p className="text-gray-500 text-xs">Authored: Dr. A. Vanko | Date: 2084.09.20</p>
                                        </div>
                                        <span className="text-xs text-gray-500 border border-gray-500/30 px-2 py-0.5 rounded">ID: #992-AZ</span>
                                    </div>
                                </div>
                                <p className="text-primary font-bold text-sm tracking-widest border-l-2 border-primary pl-3">&gt;&gt;&gt; BEGIN DECRYPTION SEQUENCE</p>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    The following report outlines the unauthorized rerouting of municipal power grid sectors 7 through 12 to the <span className="bg-white/10 text-white px-1 border border-white/20">Zeus-X Heavy Industries</span> private facility. Preliminary data suggests this diversion has been active for approximately 18 months, masked by falsified maintenance logs within the Central Energy Authority.
                                </p>
                                <div className="my-6 p-4 bg-primary/5 border-l-2 border-primary rounded-r">
                                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">warning</span> ANOMALY DETECTED</h4>
                                    <p className="text-primary/80 italic text-sm">
                                        "Power signatures indicate a 400% surge in consumption during nighttime cycles (0200 - 0500 hours), correlating directly with rolling blackouts in the lower residential districts."
                                    </p>
                                </div>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    Evidence suggests the involvement of high-ranking officials. The <span className="text-white border-b border-dotted border-gray-500 hover:text-primary cursor-help transition-colors">Cyber-Grid Controller</span> node access logs were wiped on 2084.10.01, but a fragmented backup was recovered from a localized cache server.
                                </p>
                                <div className="bg-black/50 p-4 rounded border border-border-dark font-mono text-xs my-4 group hover:border-primary/30 transition-colors">
                                    <div className="flex justify-between mb-2 border-b border-white/5 pb-1">
                                        <strong className="text-white">Recovered fragment 0x4F92</strong>
                                        <span className="text-gray-500">SIZE: 12KB</span>
                                    </div>
                                    <div className="text-green-500/90 leading-6">
                                        root@grid-ctrl:~$ initiate_transfer --target="ZEUS_MAIN" --amount=50GW --override-safety<br />
                                        &gt; WARNING: Safety override requires Director Authorization.<br />
                                        &gt; AUTHENTICATING... [KEY: DIRECTOR_OMEGA]<br />
                                        &gt; ACCESS GRANTED.<br />
                                        &gt; Transfer initiated at 02:14:33.<br />
                                        &gt; STATUS: CRITICAL LOAD ON SECTOR 7 RESIDENTIAL.
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    This deliberate act prioritizes industrial output over civilian life support systems. The coolant systems in Sector 7 hospitals were compromised for 45 minutes during the last transfer.
                                </p>
                                <p className="text-primary font-bold text-sm tracking-widest border-l-2 border-primary pl-3">&gt;&gt;&gt; END OF FRAGMENT</p>
                                <div className="opacity-30 blur-[1px] select-none space-y-4">
                                    <p>System auto-generated filler content for obfuscation. Unauthorized access attempts will be logged and reported to central command. Continue scrolling for encrypted noise.</p>
                                    <p>XJ9-Protocol initiated. Handshake failing on port 8080. Retry connection. Error 404: Ethics not found.</p>
                                </div>
                                <div className="h-20"></div>
                            </div>
                        </div>

                        <div className="bg-panel-bg border-t border-border-dark p-4 flex items-center justify-between shrink-0 relative z-20">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span>Auto-saved: 14:02:59</span>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-6 py-2.5 rounded border border-border-dark text-gray-500 font-display font-medium uppercase tracking-wider text-xs hover:bg-white/5 hover:text-white transition-all hover:border-white/20">
                                    Discard
                                </button>
                                <button className="relative overflow-hidden group px-6 py-2.5 rounded bg-primary text-white font-display font-bold uppercase tracking-widest text-xs shadow-[0_0_15px_rgba(255,102,0,0.3)] hover:bg-orange-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">save</span>
                                    Save Changes
                                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shimmer"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReviewerConsoleDetail;
