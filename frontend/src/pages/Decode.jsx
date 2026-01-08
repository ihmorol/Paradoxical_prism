import React from 'react';
import LayoutShell from '../components/landing/LayoutShell';
import HeaderNav from '../components/landing/HeaderNav';

const Decode = () => {
    return (
        <LayoutShell>
            <HeaderNav />
            <div className="flex flex-col items-center justify-center flex-grow p-10 text-center">
                <h1 className="font-display text-4xl text-white mb-4">Decode Interface</h1>
                <p className="text-gray-400">Restricted Access. Private Key Required.</p>
            </div>
        </LayoutShell>
    );
};

export default Decode;
