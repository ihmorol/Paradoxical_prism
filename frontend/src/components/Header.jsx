import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-8 py-6 border-b border-border-dark bg-card-bg z-20">
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">visibility_off</span>
                <h1 className="font-display font-bold text-2xl tracking-widest text-white">
                    Paradoxical<span className="text-primary">_Prism</span>
                </h1>
            </div>
            <nav className="hidden md:flex gap-8">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `font-display font-bold text-sm tracking-wider transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] ${isActive
                            ? 'text-primary border-b-2 border-primary pb-1 shadow-[0_4px_10px_rgba(255,94,0,0.3)]'
                            : 'text-gray-500 hover:text-white'
                        }`
                    }
                >
                    HOME
                </NavLink>
                <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                        `font-display font-bold text-sm tracking-wider transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] ${isActive
                            ? 'text-primary border-b-2 border-primary pb-1 shadow-[0_4px_10px_rgba(255,94,0,0.3)]'
                            : 'text-gray-500 hover:text-white'
                        }`
                    }
                >
                    GALLERY
                </NavLink>
                <NavLink
                    to="/decode"
                    className={({ isActive }) =>
                        `font-display font-bold text-sm tracking-wider transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] ${isActive
                            ? 'text-primary border-b-2 border-primary pb-1 shadow-[0_4px_10px_rgba(255,94,0,0.3)]'
                            : 'text-gray-500 hover:text-white'
                        }`
                    }
                >
                    DECODE
                </NavLink>
                <NavLink
                    to="/reviewer/login"
                    className={({ isActive }) =>
                        `font-display font-bold text-sm tracking-wider transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] ${isActive
                            ? 'text-primary border-b-2 border-primary pb-1 shadow-[0_4px_10px_rgba(255,94,0,0.3)]'
                            : 'text-gray-500 hover:text-white'
                        }`
                    }
                >
                    REVIEWER
                </NavLink>
            </nav>
            <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg bg-input-bg text-gray-400 hover:bg-gray-800 hover:text-white transition border border-border-dark hover:border-gray-600">
                    <span className="material-symbols-outlined text-lg">grid_view</span>
                </button>
                <button className="p-2 rounded-lg bg-input-bg text-gray-400 hover:bg-gray-800 hover:text-white transition relative border border-border-dark hover:border-gray-600">
                    <span className="material-symbols-outlined text-lg">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#FF5E00]"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
