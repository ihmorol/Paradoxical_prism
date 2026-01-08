import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { api } from '../lib/api/client';
import { toast } from 'sonner';

const Decode = () => {
    const [sourceId, setSourceId] = useState('');
    const [key, setKey] = useState('');
    const [result, setResult] = useState(null);
    const [progress, setProgress] = useState(0);

    const mutation = useMutation({
        mutationFn: async (payload) => {
            // Simulate progress
            for (let i = 0; i <= 90; i += 10) {
                setProgress(i);
                await new Promise(resolve => setTimeout(resolve, 200));
            }
            const response = await api.post('/decodes', payload);
            return response.data.data;
        },
        onSuccess: (data) => {
            setProgress(100);
            toast.success('Decryption Successful');
            setResult(data);
        },
        onError: (error) => {
            setProgress(0);
            toast.error('Decryption Failed: ' + (error.response?.data?.message || error.message));
            setResult(null);
        },
    });

    const handleDecode = (e) => {
        e.preventDefault();
        if (!sourceId || !key) {
            toast.error('Artifact ID and Key are required');
            return;
        }
        mutation.mutate({ sourceId, key });
    };

    return (
        <div className="flex flex-col h-full relative">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,32,41,0)_0%,rgba(11,12,16,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none opacity-40"></div>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 mx-auto p-6 lg:p-8">
                <div className="lg:col-span-7 flex flex-col space-y-6">
                    <div className="mb-2">
                        <h1 className="font-display text-5xl md:text-6xl font-bold text-white uppercase tracking-tight">
                            Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Decryption</span>
                        </h1>
                        <p className="mt-2 text-gray-400 font-light tracking-wide text-sm max-w-md">
                            ENTER ENCRYPTED METADATA TO UNLOCK WHISTLEBLOWER ARTIFACTS.
                        </p>
                    </div>

                    <div className="bg-panel-bg rounded-2xl border border-border-dark p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary opacity-50 rounded-tl-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary opacity-50 rounded-br-2xl"></div>

                        <form className="space-y-8 relative z-10" onSubmit={handleDecode}>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="font-display text-xs font-bold uppercase tracking-widest text-gray-400">Target Artifact ID</label>
                                    <span className="text-primary text-[10px] animate-pulse">● AWAITING INPUT</span>
                                </div>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 material-symbols-outlined">fingerprint</span>
                                    <input 
                                        className="w-full bg-surface-dark border border-gray-700 text-white rounded-xl py-4 pl-12 pr-4 font-display text-lg tracking-wider focus:outline-none focus:border-primary transition-all placeholder-gray-600 focus:shadow-[0_0_15px_rgba(255,95,31,0.4)]" 
                                        placeholder="EX: ART-884-XJ" 
                                        type="text" 
                                        value={sourceId}
                                        onChange={(e) => setSourceId(e.target.value)}
                                    />
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <div className="h-2 w-8 bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-primary opacity-50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="font-display text-xs font-bold uppercase tracking-widest text-gray-400">Decryption Key</label>
                                    <span className="text-gray-500 text-[10px]">256-BIT REQUIRED</span>
                                </div>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 material-symbols-outlined">vpn_key</span>
                                    <input 
                                        className="w-full bg-surface-dark border border-gray-700 text-white rounded-xl py-4 pl-12 pr-4 font-display text-lg tracking-wider focus:outline-none focus:border-primary transition-all placeholder-gray-600 focus:shadow-[0_0_15px_rgba(255,95,31,0.4)]" 
                                        placeholder="•••• •••• •••• ••••" 
                                        type="password" 
                                        value={key}
                                        onChange={(e) => setKey(e.target.value)}
                                    />
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors" type="button">
                                        <span className="material-symbols-outlined text-lg">visibility_off</span>
                                    </button>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    className={`w-full relative overflow-hidden group bg-primary hover:bg-orange-600 text-white font-display font-bold uppercase tracking-widest py-5 rounded-xl transition-all shadow-glow hover:shadow-[0_0_25px_-5px_rgba(255,95,31,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 ${mutation.isPending ? 'cursor-not-allowed opacity-80' : ''}`}
                                    disabled={mutation.isPending}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {mutation.isPending && <span className="material-symbols-outlined animate-spin">settings</span>}
                                        <span>{mutation.isPending ? "DECRYPTING..." : "Initiate Sequence"}</span>
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="bg-panel-bg rounded-2xl border border-gray-800 p-6 flex flex-col h-full relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6 border-b border-gray-800 pb-4">
                            <div>
                                <h3 className="font-display font-bold text-xl text-white tracking-wide">SYSTEM STATUS</h3>
                                <div className="text-xs text-primary mt-1 font-mono">V.2.0.4 ONLINE</div>
                            </div>
                            <span className="material-symbols-outlined text-gray-600">graphic_eq</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-surface-dark p-4 rounded-xl border border-gray-700">
                                <div className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">Latency</div>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-display font-bold text-white">12<small className="text-sm">ms</small></span>
                                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                </div>
                            </div>
                            <div className="bg-surface-dark p-4 rounded-xl border border-gray-700">
                                <div className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">Encryption</div>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-display font-bold text-white">AES</span>
                                    <span className="material-symbols-outlined text-sm text-primary">lock</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow bg-black rounded-xl relative overflow-hidden flex items-center justify-center border border-gray-800 shadow-inner group">
                            {!result ? (
                                <div className="text-center z-10 transition-opacity duration-500">
                                    <div className="w-32 h-32 mx-auto rounded-full border-4 border-gray-800 flex items-center justify-center relative mb-4">
                                        <span className="material-symbols-outlined text-6xl text-gray-700">lock_clock</span>
                                        {mutation.isPending && <div className="absolute inset-0 rounded-full border-t-4 border-primary animate-spin opacity-50"></div>}
                                    </div>
                                    <p className="text-gray-500 font-display uppercase tracking-widest text-sm">Waiting for Key...</p>
                                </div>
                            ) : (
                                <div className="absolute inset-0 z-20 bg-panel-dark flex flex-col items-center justify-center p-6 text-center animate-fadeIn overflow-y-auto custom-scrollbar">
                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary shrink-0">
                                        <span className="material-symbols-outlined text-3xl">check_circle</span>
                                    </div>
                                    <h4 className="text-white font-display text-2xl font-bold mb-2">ACCESS GRANTED</h4>
                                    <p className="text-gray-400 text-sm mb-4">The artifact contains the following whistleblower testimony:</p>
                                    <div className="bg-surface-dark border-l-2 border-primary p-3 text-left w-full rounded text-sm text-gray-300 font-mono mb-4">
                                        "{result.description}"
                                    </div>
                                     {result.image && (
                                        <div className="w-full rounded overflow-hidden border border-white/10">
                                            <img src={result.image} alt="Decoded Evidence" className="w-full h-auto" />
                                        </div>
                                    )}
                                </div>
                            )}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
                        </div>

                        <div className="mt-6">
                            <div className="flex justify-between text-xs uppercase font-bold text-gray-500 mb-2">
                                <span>Process</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary shadow-[0_0_10px_#FF5F1F] transition-all duration-100 ease-out"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="relative z-10 w-full py-6 text-center text-xs text-gray-600 font-mono uppercase tracking-widest mt-auto">
                SECURE PROTOCOL // ENCRYPTED CONNECTION
            </footer>
        </div>
    );
};

export default Decode;
