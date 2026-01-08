import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/api/client';

const Gallery = () => {
    const { data: artworks, isLoading, error } = useQuery({
        queryKey: ['artworks'],
        queryFn: async () => {
            const response = await api.get('/artworks');
            return response.data.data;
        },
    });

    if (isLoading) return <div className="text-white text-center mt-20">Decrypting Archives...</div>;
    if (error) return <div className="text-red-500 text-center mt-20">Access Denied: {error.message}</div>;

    return (
        <div className="flex flex-col h-full relative p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
            <div className="fixed inset-0 pointer-events-none grid-pattern opacity-30 z-0"></div>

            <div className="flex items-end justify-between mb-8 relative z-10">
                <div>
                    <h2 className="font-display text-4xl text-white mb-2 uppercase tracking-wide">Public Evidence</h2>
                    <p className="text-gray-500 font-mono text-sm uppercase tracking-widest border-l-2 border-primary pl-3">Encrypted Submissions // Level 4 Access</p>
                </div>
                <div className="flex space-x-2">
                    <button className="px-4 py-1.5 rounded bg-surface-dark border border-border-dark text-xs uppercase tracking-wider text-gray-400 hover:border-primary hover:text-primary transition-all">Latest</button>
                    <button className="px-4 py-1.5 rounded bg-surface-dark border border-border-dark text-xs uppercase tracking-wider text-gray-400 hover:border-primary hover:text-primary transition-all">Verified</button>
                    <button className="px-4 py-1.5 rounded bg-surface-dark border border-primary text-primary text-xs uppercase tracking-wider shadow-glow">All</button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
                {artworks?.map((art) => (
                    <article key={art.id} className="group relative bg-surface-dark rounded-2xl overflow-hidden border border-border-dark hover:border-primary transition-all duration-300 hover:shadow-glow-hover hover:-translate-y-1 cursor-pointer">
                        <div className="absolute top-4 right-4 z-20">
                            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">{art.category}</span>
                        </div>
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                            <img alt={art.title || "Evidence"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src={art.imageUrl || "https://placehold.co/600x400?text=Encrypted"} />
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 mix-blend-overlay z-10"></div>
                        </div>
                        <div className="p-5 relative z-20 bg-surface-dark border-t border-border-dark">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-surface-dark border-4 border-surface-dark flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all">
                                <div className="w-full h-full rounded-full border border-gray-600 bg-gray-900 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-lg group-hover:text-white transition-colors">graphic_eq</span>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between items-end border-t border-gray-800 pt-3">
                                <div>
                                    <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Upload Date</h4>
                                    <p className="text-lg font-display font-bold text-white">{new Date(art.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse mb-1"></span>
                                    <span className="text-[10px] text-primary uppercase font-bold tracking-wider">{art.status || 'Encrypted'}</span>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="flex justify-center mt-12 mb-8 relative z-10">
                <button className="group flex items-center space-x-2 px-6 py-3 border border-border-dark rounded-full text-sm font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all bg-surface-dark shadow-lg">
                    <span>Load More Evidence</span>
                    <span className="material-symbols-outlined text-base group-hover:animate-bounce">expand_more</span>
                </button>
            </div>

            <div className="fixed bottom-8 right-8 z-50">
                <button className="bg-primary hover:bg-orange-600 text-white w-14 h-14 rounded-full shadow-[0_0_20px_rgba(255,87,34,0.5)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 group">
                    <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">add</span>
                </button>
            </div>
        </div>
    );
};



export default Gallery;
