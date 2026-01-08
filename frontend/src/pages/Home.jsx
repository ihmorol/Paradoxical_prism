import React from 'react';
import { Link } from 'react-router-dom';
import mockData from '../data/mockData.json';

const Home = () => {
  const { protocolStatus } = mockData.stats;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
      {/* Main Feature Area */}
      <section className="lg:col-span-8 bg-panel-bg rounded-2xl p-6 lg:p-8 relative border border-border-dark flex flex-col justify-between overflow-hidden group min-h-[500px]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30"></div>

        <div className="flex justify-between items-start mb-8 z-10 relative">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase mb-2 text-white tracking-wide drop-shadow-md">Paradoxical_Prism</h2>
            <h3 className="font-display text-2xl lg:text-3xl font-light text-gray-600 uppercase tracking-widest">Visible Art</h3>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-input-bg rounded border border-border-dark text-xs font-bold tracking-widest text-gray-400 hover:text-white hover:border-primary/50 transition shadow-lg">
            SECURE MODE <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span>
          </button>
        </div>

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

          {/* SVG Connector Line */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <path className="drop-shadow-[0_0_5px_rgba(255,94,0,0.5)]" d="M180,50 C350,50 350,20 550,20" fill="none" stroke="#FF5E00" strokeOpacity="0.8" strokeWidth="2"></path>
            <path d="M180,50 C350,50 350,60 550,60" fill="none" stroke="#333" strokeOpacity="0.5" strokeWidth="2"></path>
            <path d="M180,50 C350,50 350,100 550,100" fill="none" stroke="#333" strokeOpacity="0.5" strokeWidth="2"></path>
            <path d="M180,50 C350,50 350,140 550,140" fill="none" stroke="#333" strokeOpacity="0.5" strokeWidth="2"></path>
          </svg>

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
      </section>

      {/* Sidebar Buttons */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <Link to="/report/new" className="flex-1">
          <section className="h-full bg-gradient-to-b from-[#1a1b1f] to-[#0d0e10] rounded-2xl p-6 relative overflow-hidden group cursor-pointer border border-border-dark hover:border-primary/60 transition-all duration-300 shadow-xl">
            <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
              <img alt="Abstract Data Visualization" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1M7cL5dFFMdi02s5HAP7FhEGPWec47xZaDlqKUFuk75QJN3C8RyWI6yW5-vZIrxFO8moye-ckPRzycYmhn5lN89tgGrrj232WI4ufx2C_pJG1_m0nA7hOx9X3Xp3UWQejdF_Q8rmKXfViQBzQevkBq68IPcACxf_LVR_LvJ7I_20U8v7_TTzQ0Wz3zjGPYq3YFDQdA6RBjLE_pNiN8AdDfmXjxQ4GZ_i-Pq8yq2FdJAvw0tHWTSQ2VfnaMXDX9s4bJGAnLFoVGcj-" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <h3 className="font-display text-2xl font-bold uppercase text-white leading-none tracking-wide">Create<br /><span className="text-primary glow-text">Report</span></h3>
                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded border border-primary/30 shadow-[0_0_10px_rgba(255,94,0,0.1)]">Secure Upload</span>
              </div>
              <div className="mt-8 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition duration-300 bg-black/40 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <span className="material-symbols-outlined text-4xl text-primary drop-shadow-[0_0_5px_rgba(255,94,0,0.8)]">add</span>
                </div>
              </div>
              <div className="mt-auto pt-4 flex items-center justify-between text-gray-500 text-xs uppercase tracking-wider">
                <span>Anonymous</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></span> AES-256</span>
              </div>
            </div>
          </section>
        </Link>

        <Link to="/gallery" className="flex-1">
          <section className="h-full bg-panel-bg rounded-2xl p-6 relative overflow-hidden border border-border-dark hover:border-gray-500 transition-colors group cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-display text-xl font-bold uppercase text-gray-200">Browse<br />Gallery</h3>
              <span className="material-symbols-outlined text-gray-600 group-hover:text-white transition">arrow_forward</span>
            </div>
            <div className="relative flex items-center justify-center py-4">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle className="text-gray-800" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeWidth="6"></circle>
                <circle className="text-primary transition-all duration-1000 ease-out group-hover:stroke-dashoffset-50 drop-shadow-[0_0_8px_rgba(255,94,0,0.4)]" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeDasharray="351.86" strokeDashoffset="100" strokeWidth="6"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-gray-500 mb-1">image_search</span>
                <span className="text-2xl font-display font-bold text-white">74<span className="text-sm text-gray-500">%</span></span>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-[10px] text-gray-600 uppercase tracking-widest font-bold">
              <span>Public Access</span>
              <span>204 Items</span>
            </div>
          </section>
        </Link>
      </div>

      {/* Bottom Status Panels */}
      <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-panel-bg rounded-xl p-5 border border-border-dark flex flex-col justify-between">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold border-b border-gray-800 pb-2">Protocol Status</h4>
          <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
            <div>
              <span className="block text-gray-600 text-[10px] uppercase mb-0.5">Mode</span>
              <span className="font-display font-bold text-white flex items-center gap-2">
                {protocolStatus.mode} <span className="material-symbols-outlined text-xs text-primary animate-pulse">bolt</span>
              </span>
            </div>
            <div>
              <span className="block text-gray-600 text-[10px] uppercase mb-0.5">Uptime</span>
              <span className="font-display font-bold text-white">{protocolStatus.uptime}</span>
            </div>
            <div>
              <span className="block text-gray-600 text-[10px] uppercase mb-0.5">Frequency</span>
              <span className="font-display font-bold text-white">{protocolStatus.frequency}</span>
            </div>
            <div>
              <span className="block text-gray-600 text-[10px] uppercase mb-0.5">Nodes</span>
              <span className="font-display font-bold text-white">{protocolStatus.nodes}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#08080a] rounded-xl p-5 relative overflow-hidden flex flex-col justify-between border border-border-dark group hover:border-primary/30 transition-colors">
          <div className="absolute inset-0 bg-carbon opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="relative z-10 w-full">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Connection</span>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_5px_#FF5E00]"></div>
                <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-50"></div>
                <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-20"></div>
              </div>
            </div>
            <div className="h-16 flex items-center justify-center relative my-1">
              <div className="absolute w-full h-[2px] bg-gray-800 rounded-full"></div>
              <div className="w-10 h-10 rounded-full border border-gray-600 bg-[#0B0C10] flex items-center justify-center z-10 relative shadow-[0_0_15px_rgba(255,94,0,0.2)]">
                <span className="material-symbols-outlined text-primary text-lg animate-pulse">wifi_tethering</span>
                <div className="absolute w-14 h-14 border border-primary/20 rounded-full animate-[spin_4s_linear_infinite] border-t-transparent border-l-transparent"></div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="font-display text-sm text-gray-400 uppercase tracking-wide">Tunneling</span>
              <div className="flex items-center bg-gray-900 rounded-full px-2 py-1 border border-gray-800">
                <span className="text-[9px] uppercase font-bold text-gray-400 mr-2">ON</span>
                <div className="w-6 h-1.5 bg-primary/20 rounded-full relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-full bg-primary/80 shadow-[0_0_5px_#FF5E00]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-panel-bg rounded-xl p-5 border border-border-dark flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-[-10px] right-[-10px] p-4 opacity-5 rotate-12">
            <span className="material-symbols-outlined text-6xl text-white">gavel</span>
          </div>
          <h4 className="font-display text-gray-500 uppercase text-[10px] tracking-[0.2em] mb-2 border-b border-gray-800 pb-2 inline-block w-max">Ethics Block</h4>
          <p className="text-[11px] text-gray-500 leading-relaxed font-mono relative z-10">
            Usage constitutes agreement to Whistleblower Protection Act 2142. Reports are scrubbed of metadata. Do not upload classified schematics.
          </p>
          <div className="mt-3 flex items-center justify-end">
            <a href="#" className="text-[10px] uppercase font-bold text-primary hover:text-white transition flex items-center gap-1">
              Read Policy <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
