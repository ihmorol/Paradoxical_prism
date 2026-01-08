import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { api as apiClient } from '../lib/api/client';

const CreateReport = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const [file, setFile] = useState(null);

    const mutation = useMutation({
        mutationFn: async (formData) => {
            const response = await apiClient.post('/reports', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        },
        onSuccess: () => {
            toast.success('Report submitted securely.');
            reset();
            setFile(null);
        },
        onError: (error) => {
            toast.error('Transmission failed: ' + error.message);
        },
    });

    const onSubmit = (data) => {
        const formData = new FormData();
        const payload = {
            category: data.category,
            locationContext: data.locationContext,
            description: data.description,
            externalLink: 'http://placeholder.com', // Static for now as per minimal req
        };
        formData.append('data', JSON.stringify(payload));
        if (file) {
            formData.append('file', file);
        }
        mutation.mutate(formData);
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 h-full mx-auto p-6 lg:p-8">
            <div className="lg:col-span-8 flex flex-col gap-6">
                <header className="bg-surface-dark border border-white/5 rounded-2xl p-8 shadow-outer-panel relative overflow-hidden group bg-card-bg">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-75 duration-500"></div>
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-transparent shadow-[0_0_10px_#FF5E00]"></div>
                    <div className="flex justify-between items-start relative z-10">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 uppercase tracking-wide drop-shadow-md">
                                Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 group-hover:from-primary group-hover:to-white transition-all duration-500">Channel</span>
                            </h1>
                            <p className="text-gray-500 font-body text-lg tracking-wide border-l-2 border-primary/30 pl-3">Encrypted Submission Protocol v4.2 // Establish safe link</p>
                        </div>
                        <div className="hidden md:block text-right">
                            <div className="text-primary font-mono text-sm mb-1 tracking-wider shadow-black drop-shadow-sm">STATUS: SECURE</div>
                            <div className="flex items-center justify-end gap-1.5">
                                <span className="h-1.5 w-1.5 bg-primary rounded-full animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                                <span className="h-1.5 w-1.5 bg-primary rounded-full shadow-[0_0_5px_#FF5E00]"></span>
                                <span className="h-1.5 w-1.5 bg-primary/50 rounded-full"></span>
                                <span className="h-1.5 w-1.5 bg-primary/20 rounded-full"></span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="bg-surface-dark border border-white/5 rounded-2xl p-8 shadow-outer-panel flex-grow relative bg-card-bg">
                    {/* Decorative borders */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/50 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/50 rounded-tr-lg"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 opacity-10 pointer-events-none border-r-2 border-b-2 border-primary rounded-br-xl"></div>
                    <div className="absolute bottom-4 right-4 w-16 h-16 opacity-10 pointer-events-none border-r border-b border-primary rounded-br-lg"></div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2 group">
                                <label className="flex justify-between text-xs font-display uppercase tracking-widest text-gray-500 group-focus-within:text-primary transition-colors">
                                    <span>Incident Category</span>
                                    <span className="opacity-0 group-focus-within:opacity-100 transition-opacity text-[10px] bg-primary/20 border border-primary/30 px-1.5 py-0.5 rounded text-primary font-mono">SELECT</span>
                                </label>
                                <div className="relative">
                                    <select {...register('category', { required: true })} className="w-full bg-input-bg text-gray-200 border-none rounded-lg px-4 py-4 shadow-inset-panel focus:ring-1 focus:ring-primary focus:shadow-input-active outline-none transition-all appearance-none cursor-pointer">
                                        <option value="" disabled selected>Select Classification...</option>
                                        <option value="env">Environmental Hazard</option>
                                        <option value="corp">Corporate Malfeasance</option>
                                        <option value="data">Data Breach</option>
                                        <option value="safety">Workplace Safety</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2 group">
                                <label className="flex justify-between text-xs font-display uppercase tracking-widest text-gray-500 group-focus-within:text-primary transition-colors">
                                    <span>Location Coordinates</span>
                                    <span className="opacity-0 group-focus-within:opacity-100 transition-opacity text-[10px] bg-primary/20 border border-primary/30 px-1.5 py-0.5 rounded text-primary font-mono">GEO-TAG</span>
                                </label>
                                <div className="relative">
                                    <input {...register('locationContext', { required: true })} className="w-full bg-input-bg text-gray-200 placeholder-gray-600 border-none rounded-lg px-4 py-4 pl-12 shadow-inset-panel focus:ring-1 focus:ring-primary outline-none transition-all font-mono" placeholder="Sector 7G, Facility B..." type="text" />
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/70 group-focus-within:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">place</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <label className="flex justify-between text-xs font-display uppercase tracking-widest text-gray-500 group-focus-within:text-primary transition-colors">
                                <span>Encrypted Description</span>
                                <span className="opacity-0 group-focus-within:opacity-100 transition-opacity text-[10px] bg-primary/20 border border-primary/30 px-1.5 py-0.5 rounded text-primary font-mono">LOG_ENTRY</span>
                            </label>
                            <div className="relative">
                                <textarea {...register('description', { required: true })} className="w-full bg-input-bg text-gray-200 placeholder-gray-600 border-none rounded-lg px-4 py-4 shadow-inset-panel focus:ring-1 focus:ring-primary outline-none transition-all resize-none font-mono text-sm leading-relaxed" placeholder="Describe the incident details. This information will be embedded into the artwork steganography..." rows="6"></textarea>
                                <div className="absolute bottom-3 right-3 text-[10px] text-gray-500 font-mono bg-panel-bg px-2 py-1 rounded border border-white/5">
                                    0/5000 BYTES
                                </div>
                            </div>
                        </div>

                        <div className="border border-dashed border-white/10 hover:border-primary/50 hover:bg-input-bg/50 rounded-lg p-8 flex flex-col items-center justify-center bg-input-bg/20 transition-all cursor-pointer group relative overflow-hidden">
                            <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer z-20" />
                            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                            <span className="material-symbols-outlined text-4xl text-gray-600 group-hover:text-primary mb-3 transition-colors relative z-10 group-hover:scale-110 duration-300">cloud_upload</span>
                            <span className="text-sm font-display text-gray-500 uppercase tracking-wider relative z-10 group-hover:text-white transition-colors">Drag Evidence Here or <span className="text-primary underline decoration-primary/50 hover:decoration-primary">Browse</span></span>
                            <span className="text-xs text-gray-600 mt-2 font-mono relative z-10">SUPPORTED: PDF, JPG, PNG, LOG</span>
                            {file && <div className="relative z-10 mt-2 text-primary font-mono text-sm">{file.name}</div>}
                        </div>
                        
                        <button type="submit" disabled={mutation.isPending} className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all disabled:opacity-50">
                            {mutation.isPending ? 'Transmitting...' : 'Submit Secured Report'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
                {/* ZEUS-X Encryption Engine */}
                <div className="bg-card-bg border border-white/5 rounded-2xl p-6 shadow-outer-panel h-80 relative overflow-hidden flex flex-col items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10 pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                    <div className="relative z-0 w-48 h-48 rounded-full border border-primary/10 flex items-center justify-center animate-spin-slow">
                        <div className="absolute w-full h-full rounded-full border-t border-primary/30"></div>
                        <div className="w-40 h-40 rounded-full border border-primary/20 flex items-center justify-center border-t-transparent border-l-transparent rotate-45 animate-[spin_3s_linear_infinite_reverse]">
                            <div className="w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                        <h3 className="font-display text-2xl font-bold text-white mb-1 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">ZEUS-X</h3>
                        <div className="px-3 py-1 bg-input-bg border border-white/10 rounded-full text-[10px] text-primary font-mono inline-block tracking-widest shadow-lg">ENCRYPTION ENGINE</div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 z-20 flex justify-between items-end border-t border-white/5 bg-black/60 backdrop-blur-md">
                        <div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider">Latency</div>
                            <div className="font-mono text-primary text-sm font-bold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> 12ms
                            </div>
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider">Security</div>
                            <div className="font-mono text-green-400 text-sm font-bold shadow-green-900 drop-shadow-sm">AES-256</div>
                        </div>
                        <div className="text-right">
                            <span className="material-symbols-outlined text-primary animate-pulse drop-shadow-[0_0_5px_#FF5E00]">wifi_tethering</span>
                        </div>
                    </div>
                </div>

                {/* Settings Panel */}
                <div className="bg-card-bg border border-white/5 rounded-2xl p-6 shadow-outer-panel flex-grow flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
                    <div>
                        <h3 className="font-display text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-white/5 pb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-base">settings_suggest</span>
                            Generation Mode
                        </h3>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between group cursor-pointer">
                                <span className="text-sm text-gray-500 group-hover:text-white transition-colors font-medium">Steganography</span>
                                <div className="w-12 h-6 rounded-full bg-input-bg border border-white/10 relative shadow-inset-panel transition-colors group-hover:border-primary/30">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(255,87,34,0.8)] transition-transform group-hover:scale-110"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between group cursor-pointer">
                                <span className="text-sm text-gray-500 group-hover:text-white transition-colors font-medium">Metadata Scrub</span>
                                <div className="w-12 h-6 rounded-full bg-input-bg border border-white/10 relative shadow-inset-panel transition-colors group-hover:border-primary/30">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(255,87,34,0.8)] transition-transform group-hover:scale-110"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between group cursor-pointer">
                                <span className="text-sm text-gray-500 group-hover:text-white transition-colors font-medium">Blockchain Hash</span>
                                <div className="w-12 h-6 rounded-full bg-input-bg border border-white/10 relative shadow-inset-panel transition-colors group-hover:border-white/20">
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-gray-600 rounded-full transition-colors group-hover:bg-gray-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col items-center">
                        <div className="mt-5 text-center group cursor-pointer">
                            <span className="font-display font-bold text-white uppercase tracking-widest text-sm group-hover:text-primary transition-colors">Ready</span>
                            <div className="text-[10px] text-primary uppercase tracking-[0.3em] opacity-80 mt-1 font-mono group-hover:opacity-100 group-hover:drop-shadow-[0_0_5px_#FF5E00]">Encrypted</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateReport;
