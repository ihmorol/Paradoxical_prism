import React from 'react';
import LayoutShell from '../components/landing/LayoutShell';
import HeaderNav from '../components/landing/HeaderNav';

const Gallery = () => {
    return (
        <LayoutShell>
            <HeaderNav />
            <div className="flex flex-col items-center justify-center flex-grow p-10 text-center">
                <h1 className="font-display text-4xl text-white mb-4">Public Gallery</h1>
                <p className="text-gray-400">Coming Soon</p>
            </div>
        </LayoutShell>
    );
};

export default Gallery;
