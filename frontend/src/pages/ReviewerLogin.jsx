import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewerLogin = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login
        navigate('/reviewer/console');
    };

    return (
        <div className="flex flex-col h-full relative items-center justify-center p-4">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[length:40px_40px]"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-5"></div>

            <div className="w-full max-w-md relative group z-10">
                <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary opacity-60"></div>
                <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-primary opacity-60"></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-primary opacity-60"></div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary opacity-60"></div>

                <div className="sci-fi-border bg-panel-bg p-8 md:p-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-1000 pointer-events-none z-0"></div>

                    <div className="relative z-10 mb-8 text-center">
                        <div className="inline-block p-3 rounded-full bg-input-bg mb-4 border border-border-dark shadow-inner">
                            <span className="material-symbols-outlined text-4xl text-primary">lock</span>
                        </div>
                        <h1 className="text-3xl font-bold uppercase tracking-widest text-white font-mono mb-1">Restricted Access</h1>
                        <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">Authorized Personnel Only</p>
                    </div>

                    <form className="relative z-10 space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-2">
                            <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold ml-1">
                                Identification ID
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400 text-lg">badge</span>
                                </div>
                                <input className="input-notch w-full bg-input-bg border border-gray-700 text-white pl-10 pr-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono tracking-wider placeholder-gray-600" placeholder="USR-ID-0000" type="text" />
                                <div className="absolute inset-y-0 right-0 flex flex-col justify-center pr-2 space-y-1 opacity-50">
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold ml-1">
                                    Secure Key
                                </label>
                                <a className="text-[10px] uppercase text-primary hover:text-orange-400 transition-colors" href="#">Forgot Key?</a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400 text-lg">vpn_key</span>
                                </div>
                                <input className="input-notch w-full bg-input-bg border border-gray-700 text-white pl-10 pr-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono tracking-wider placeholder-gray-600" placeholder="••••••••••••" type="password" />
                                <div className="absolute inset-y-0 right-0 flex flex-col justify-center pr-2 space-y-1 opacity-50">
                                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-2 border-t border-b border-gray-800 mt-4 mb-6">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[10px] uppercase text-gray-500">System Online</span>
                            </div>
                            <span className="text-[10px] font-mono text-gray-400">V.2.0.45-BETA</span>
                        </div>

                        <button className="group relative w-full overflow-hidden rounded-none input-notch bg-primary hover:bg-orange-600 transition-all duration-300 text-white font-bold py-4 uppercase tracking-widest shadow-glow" type="submit">
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                                <span>Access Console</span>
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 transform skew-x-12"></div>
                        </button>
                    </form>

                    <div className="mt-8 flex justify-between items-end opacity-40">
                        <div className="h-1 w-16 bg-gray-600"></div>
                        <div className="h-1 w-2 bg-primary"></div>
                        <div className="h-1 w-2 bg-primary ml-1"></div>
                        <div className="flex-grow mx-2 h-[1px] bg-gray-800 self-center"></div>
                        <div className="text-[9px] font-mono text-gray-500 uppercase">Secured by Phoenix Shield</div>
                    </div>
                </div>
            </div>

            <footer className="relative z-20 w-full border-t border-gray-800 px-6 py-2 flex justify-between items-center text-[10px] uppercase tracking-wider text-gray-500 font-mono mt-auto">
                <div className="flex items-center space-x-6">
                    <span className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        <span>Server: US-East-1</span>
                    </span>
                    <span className="hidden md:inline">Latency: 24ms</span>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="opacity-50">© 2024 Phoenix Corp. All rights reserved.</span>
                    <span className="text-primary cursor-pointer hover:underline">Privacy Protocol</span>
                </div>
            </footer>
        </div>
    );
};

export default ReviewerLogin;
