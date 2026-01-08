import React from 'react';

const LayoutShell = ({ children }) => {
    return (
        <div className="bg-dark-bg font-body text-gray-300 min-h-screen flex flex-col overflow-hidden transition-colors duration-300">
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-dark-bg">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary opacity-[0.04] rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600 opacity-[0.03] rounded-full blur-[150px]"></div>
            </div>
            <main className="w-full bg-card-bg shadow-2xl overflow-y-auto border-b border-border-dark relative z-10 h-screen flex flex-col">
                {children}
            </main>
        </div>
    );
};

export default LayoutShell;
