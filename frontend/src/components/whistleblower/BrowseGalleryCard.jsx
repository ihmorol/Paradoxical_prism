import React from 'react';
import CyberCard from '../ui/CyberCard';

const BrowseGalleryCard = () => {
    return (
        <CyberCard className="flex-1 p-6 flex flex-col justify-between h-full hover:border-gray-500">
            <div className="flex justify-between items-start mb-6">
                <h3 className="font-display text-xl font-bold uppercase text-gray-200">Browse<br />Gallery</h3>
                <span className="material-symbols-outlined text-gray-600 group-hover:text-white transition">arrow_forward</span>
            </div>

            <div className="relative flex items-center justify-center py-4 flex-grow">
                <svg className="w-32 h-32 transform -rotate-90">
                    <circle className="text-gray-800" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeWidth="6"></circle>
                    <circle
                        className="text-primary transition-all duration-1000 ease-out group-hover:stroke-dashoffset-50 drop-shadow-[0_0_8px_rgba(255,94,0,0.4)]"
                        cx="64" cy="64" fill="transparent" r="56" stroke="currentColor"
                        strokeDasharray="351.86" strokeDashoffset="100" strokeWidth="6"
                    ></circle>
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
        </CyberCard>
    );
};

export default BrowseGalleryCard;
