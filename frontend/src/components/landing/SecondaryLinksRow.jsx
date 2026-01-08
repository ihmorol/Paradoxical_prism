import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryLinksRow = ({ links }) => {
    return (
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 my-12 px-4 border-t border-white/5 pt-12">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={link.link}
                    className="group flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-display uppercase tracking-widest text-sm font-bold"
                >
                    <span className="material-icons-round group-hover:animate-pulse">chevron_right</span>
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export default SecondaryLinksRow;
