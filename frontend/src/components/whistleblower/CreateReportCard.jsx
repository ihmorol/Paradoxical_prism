import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateReportCard = () => {
    const navigate = useNavigate();

    return (
        <section
            onClick={() => navigate('/create-report')}
            className="flex-1 bg-gradient-to-b from-[#1a1b1f] to-[#0d0e10] rounded-2xl p-6 relative overflow-hidden group cursor-pointer border border-border-dark hover:border-primary/60 transition-all duration-300 shadow-xl h-full flex flex-col justify-between"
        >
            <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
                <img
                    alt="Abstract Data Visualization"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1M7cL5dFFMdi02s5HAP7FhEGPWec47xZaDlqKUFuk75QJN3C8RyWI6yW5-vZIrxFO8moye-ckPRzycYmhn5lN89tgGrrj232WI4ufx2C_pJG1_m0nA7hOx9X3Xp3UWQejdF_Q8rmKXfViQBzQevkBq68IPcACxf_LVR_LvJ7I_20U8v7_TTzQ0Wz3zjGPYq3YFDQdA6RBjLE_pNiN8AdDfmXjxQ4GZ_i-Pq8yq2FdJAvw0tHWTSQ2VfnaMXDX9s4bJGAnLFoVGcj- "
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="font-display text-2xl font-bold uppercase text-white leading-none tracking-wide">
                        Create<br /><span className="text-primary glow-text">Report</span>
                    </h3>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded border border-primary/30 shadow-[0_0_10px_rgba(255,94,0,0.1)]">
                        Secure Upload
                    </span>
                </div>

                <div className="mt-8 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition duration-300 bg-black/40 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <span className="material-symbols-outlined text-4xl text-primary drop-shadow-[0_0_5px_rgba(255,94,0,0.8)]">add</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 flex items-center justify-between text-gray-500 text-xs uppercase tracking-wider">
                    <span>Anonymous</span>
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></span> AES-256
                    </span>
                </div>
            </div>
        </section>
    );
};

export default CreateReportCard;
