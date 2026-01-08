import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div className="bg-dark-bg font-body text-gray-300 min-h-screen overflow-hidden transition-colors duration-300">
            {/* Background Effects */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-dark-bg">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary opacity-[0.04] rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600 opacity-[0.03] rounded-full blur-[150px]"></div>
            </div>

            <main className="w-full h-screen bg-card-bg relative z-10 flex flex-col overflow-hidden">
                <Header />
                <div className="flex-1 overflow-y-auto relative custom-scrollbar">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
