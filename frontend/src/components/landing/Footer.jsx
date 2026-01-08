import React from 'react';

const Footer = ({ text, links }) => {
    return (
        <footer className="mt-auto border-t border-white/5 bg-background-dark/95 backdrop-blur text-xs py-8 px-8 flex flex-col md:flex-row justify-between items-center text-text-muted font-mono gap-4">
            <div className="max-w-md text-center md:text-left">
                {text}
            </div>
            <div className="flex gap-8">
                {links.map((link, index) => (
                    <a key={index} href={link.link} className="hover:text-primary transition-colors uppercase tracking-wider">
                        {link.label}
                    </a>
                ))}
            </div>
            <div className="uppercase tracking-widest opacity-50">Phoenix Protocol © 2084</div>
        </footer>
    );
};

export default Footer;
