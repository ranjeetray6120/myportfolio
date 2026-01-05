import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ranjeet Kumar. All rights reserved.</p>
            <p className="text-sm mt-2">Built with React, Vite & Tailwind CSS</p>
        </footer>
    );
};

export default Footer;
