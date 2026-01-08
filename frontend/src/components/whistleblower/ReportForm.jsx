import React from 'react';

const ReportForm = () => {
    return (
        <div className="bg-surface-dark border border-white/5 rounded-2xl p-8 shadow-outer-panel flex-grow relative bg-tech-pattern">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/50 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/50 rounded-tr-lg"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 opacity-10 pointer-events-none border-r-2 border-b-2 border-primary rounded-br-xl"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 opacity-10 pointer-events-none border-r border-b border-primary rounded-br-lg"></div>

            <form action="#" className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Incident Category */}
                    <div className="space-y-2 group">
                        <label className="flex justify-between text-xs font-display uppercase tracking-widest text-text-muted group-focus-within:text-primary transition-colors">
                            <span>Incident Category</span>
                            <span className="opacity-0 group-focus-within:opacity-100 transition-opacity text-[10px] bg-primary/20 border border-primary/30 px-1.5 py-0.5 rounded text-primary font-mono">SELECT</span>
                        </label>
                        <div className="relative">
                            <select className="w-full bg-surface-lighter text-gray-200 border-none rounded-lg px-4 py-4 shadow-inset-panel focus:ring-1 focus:ring-primary focus:shadow-input-active placeholder-gray-500 transition-all appearance-none cursor-pointer outline-none">
                                <option disabled selected value="">Select Classification...</option>
                                <option value="env">Environmental Hazard</option>
                                <option value="corp">Corporate Malfeasance</option>
                                <option value="data">Data Breach</option>
                                <option value="safety">Workplace Safety</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                                <span className="material-icons-round">expand_more</span>
                            </div>
                        </div>
                    </div>

                    {/* Location Coordinates */}
                    <div className="space-y-2 group">
                        <label className="flex justify-between text-xs font-display uppercase tracking-widest text-text-muted group-focus-within:text-primary transition-colors">
                            <span>Location Coordinates</span>
                            <span className="opacity-0 group-focus-within:opacity-100 transition-opacity text-[10px] bg-primary/20 border border-primary/30 px-1.5 py-0.5 rounded text-primary font-mono">GEO-TAG</span>
                        </label>
                        <div className="relative">
                            <input
                                className="w-full bg-surface-lighter text-gray-200 placeholder-gray-600 border-none rounded-lg px-4 py-4 pl-12 shadow-inset-panel focus:ring-1 focus:ring-primary focus:shadow-input-active outline-none transition-all font-mono"
                                placeholder="Sector 7G, Facility B..."
                                type="text"
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/70 group-focus-within:text-primary transition-colors">
                                <span className="material-icons-round text-lg">place</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Encrypted Description */}
                <div className="space-y-2 group">
                    <label className="flex justify-between text-xs font-display uppercase tracking-widest text-text-muted group-focus-within:text-primary transition-colors">
                        <span>Encrypted Description</span>
                        <span className="opacity-0 group-focus-within:opacity-100 transition-opacity text-[10px] bg-primary/20 border border-primary/30 px-1.5 py-0.5 rounded text-primary font-mono">LOG_ENTRY</span>
                    </label>
                    <div className="relative">
                        <textarea
                            className="w-full bg-surface-lighter text-gray-200 placeholder-gray-600 border-none rounded-lg px-4 py-4 shadow-inset-panel focus:ring-1 focus:ring-primary focus:shadow-input-active outline-none transition-all resize-none font-mono text-sm leading-relaxed"
                            placeholder="Describe the incident details. This information will be embedded into the artwork steganography..."
                            rows="6"
                        ></textarea>
                        <div className="absolute bottom-3 right-3 text-[10px] text-text-muted font-mono bg-surface-dark px-2 py-1 rounded border border-white/5">
                            0/5000 BYTES
                        </div>
                    </div>
                </div>

                {/* Upload Area */}
                <div className="border border-dashed border-white/10 hover:border-primary/50 hover:bg-surface-lighter/50 rounded-lg p-8 flex flex-col items-center justify-center bg-surface-lighter/20 transition-all cursor-pointer group relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <span className="material-icons-round text-4xl text-text-muted group-hover:text-primary mb-3 transition-colors relative z-10 group-hover:scale-110 duration-300">cloud_upload</span>
                    <span className="text-sm font-display text-text-muted uppercase tracking-wider relative z-10 group-hover:text-white transition-colors">Drag Evidence Here or <span className="text-primary underline decoration-primary/50 hover:decoration-primary">Browse</span></span>
                    <span className="text-xs text-gray-600 mt-2 font-mono relative z-10">SUPPORTED: PDF, JPG, PNG, LOG</span>
                </div>
            </form>
        </div>
    );
};

export default ReportForm;
