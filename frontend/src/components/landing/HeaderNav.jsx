import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <header className="flex items-center justify-between px-8 py-6 border-b border-border-dark bg-card-bg/80 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">visibility_off</span>
                <h1 className="font-display font-bold text-2xl tracking-widest text-white">PHANTOM<span className="text-primary">.IO</span></h1>
            </div>
            <nav className="hidden md:flex gap-8">
                <Link to="/" className="text-primary font-display font-bold text-sm tracking-wider border-b-2 border-primary pb-1 shadow-[0_4px_10px_rgba(255,94,0,0.3)]">HOME</Link>
                <Link to="/report/new" className="text-gray-500 hover:text-white font-display font-bold text-sm tracking-wider transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">CREATE</Link>
                <Link to="/gallery" className="text-gray-500 hover:text-white font-display font-bold text-sm tracking-wider transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">GALLERY</Link>
                <Link to="/decode" className="text-gray-500 hover:text-white font-display font-bold text-sm tracking-wider transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">DECODE</Link>
                <Link to="/reviewer/reports" className="text-gray-500 hover:text-white font-display font-bold text-sm tracking-wider transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">REVIEWER</Link>
            </nav>
            <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg bg-input-bg text-gray-400 hover:bg-gray-800 hover:text-white transition border border-border-dark hover:border-gray-600">
                    <span className="material-symbols-outlined text-lg">grid_view</span>
                </button>
            </div>
        </header>
    );
};

export default HeaderNav;
