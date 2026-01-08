import React from 'react';
import LayoutShell from '../components/landing/LayoutShell';
import HeaderNav from '../components/landing/HeaderNav';

const ReviewerConsole = () => {
    return (
        <LayoutShell>
            <HeaderNav />
            <div className="flex flex-col items-center justify-center flex-grow p-10 text-center">
                <h1 className="font-display text-4xl text-white mb-4">Reviewer Console</h1>
                <p className="text-gray-400">Authentication Required.</p>
            </div>
        </LayoutShell>
    );
};

export default ReviewerConsole;
