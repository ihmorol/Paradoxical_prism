import React from 'react';
import ReportForm from '../components/whistleblower/ReportForm';
import ZeusPanel from '../components/whistleblower/ZeusPanel';
import GenerationModePanel from '../components/whistleblower/GenerationModePanel';

const CreateReport = () => {
    return (
        <div className="bg-background-dark text-gray-200 font-body min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white transition-colors duration-300 relative overflow-x-hidden dark">
            {/* Background Ambience */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]"></div>
                <div className="scanlines fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
            </div>

            {/* Navbar */}
            <nav className="relative z-20 w-full px-8 py-6 flex justify-between items-center bg-background-dark/80 backdrop-blur-sm border-b border-white/5 shadow-lg">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative">
                        <span className="material-icons-round text-primary text-3xl group-hover:drop-shadow-[0_0_8px_rgba(255,87,34,0.8)] transition-all duration-300">bolt</span>
                    </div>
                    <span className="font-display font-bold text-2xl tracking-widest text-white uppercase group-hover:text-primary transition-colors">Phoenix</span>
                </div>
                <div className="hidden md:flex items-center space-x-12">
                    <a href="#" className="text-text-muted hover:text-white hover:shadow-[0_2px_0_0_#FF5722] pb-1 transition-all uppercase tracking-widest text-sm font-semibold">Home</a>
                    <a href="#" className="text-text-muted hover:text-white hover:shadow-[0_2px_0_0_#FF5722] pb-1 transition-all uppercase tracking-widest text-sm font-semibold">Gallery</a>
                    <a href="#" className="text-text-muted hover:text-white hover:shadow-[0_2px_0_0_#FF5722] pb-1 transition-all uppercase tracking-widest text-sm font-semibold">Decode</a>
                    <a href="#" className="text-text-muted hover:text-white hover:shadow-[0_2px_0_0_#FF5722] pb-1 transition-all uppercase tracking-widest text-sm font-semibold">Reviewer</a>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-lg bg-surface-lighter border border-white/10 hover:border-primary/50 hover:bg-surface-lighter/80 transition-all group shadow-inset-panel">
                        <span className="material-icons-round text-text-muted group-hover:text-primary text-sm">grid_view</span>
                    </button>
                    <button className="p-2 rounded-lg bg-surface-lighter border border-white/10 hover:border-primary/50 hover:bg-surface-lighter/80 transition-all group relative shadow-inset-panel">
                        <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_5px_#FF5722]"></span>
                        <span className="material-icons-round text-text-muted group-hover:text-primary text-sm">notifications</span>
                    </button>
                    <button className="md:hidden p-2 text-white">
                        <span className="material-icons-round">menu</span>
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 flex-grow p-4 md:p-8 flex items-center justify-center">
                <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
                    {/* Left Column */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <header className="bg-surface-dark border border-white/5 rounded-2xl p-8 shadow-outer-panel relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-75 duration-500"></div>
                            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-transparent shadow-[0_0_10px_#FF5722]"></div>
                            <div className="flex justify-between items-start relative z-10">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 uppercase tracking-wide drop-shadow-md">
                                        Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 group-hover:from-primary group-hover:to-white transition-all duration-500">Channel</span>
                                    </h1>
                                    <p className="text-text-muted font-body text-lg tracking-wide border-l-2 border-primary/30 pl-3">Encrypted Submission Protocol v4.2 // Establish safe link</p>
                                </div>
                                <div className="hidden md:block text-right">
                                    <div className="text-primary font-mono text-sm mb-1 tracking-wider shadow-black drop-shadow-sm">STATUS: SECURE</div>
                                    <div className="flex items-center justify-end gap-1.5">
                                        <span className="h-1.5 w-1.5 bg-primary rounded-full animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                                        <span className="h-1.5 w-1.5 bg-primary rounded-full shadow-[0_0_5px_#FF5722]"></span>
                                        <span className="h-1.5 w-1.5 bg-primary/50 rounded-full"></span>
                                        <span className="h-1.5 w-1.5 bg-primary/20 rounded-full"></span>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <ReportForm />
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <ZeusPanel />
                        <GenerationModePanel />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 bg-background-dark/95 backdrop-blur text-xs py-3 px-8 flex justify-between items-center text-text-muted font-mono shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
                <div className="flex gap-6">
                    <span className="flex items-center gap-2 group cursor-help">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.8)] group-hover:animate-ping"></span>
                        SERVER: ONLINE
                    </span>
                    <span className="hidden md:inline border-l border-white/10 pl-6">UPTIME: <span className="text-white">99.98%</span></span>
                </div>
                <div className="uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">Phoenix Protocol © 2084</div>
                <div className="flex gap-6 text-right">
                    <span className="border-r border-white/10 pr-6">MEM: <span className="text-primary">64TB</span></span>
                    <span>CPU: <span className="text-primary">12%</span></span>
                </div>
            </footer>
        </div>
    );
};

export default CreateReport;
