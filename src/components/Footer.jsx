"use client";

import React from 'react';
import { cn } from '../lib/utils';

const Footer = ({ className }) => {
    return (
        <footer className={cn("py-8 border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-md", className)}>
            <div className="container mx-auto text-center">
                <p className="text-white/40 text-sm">
                    &copy; {new Date().getFullYear()} Ranjeet Kumar Portfolio. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center gap-6">
                    <a href="#" className="text-xs text-white/20 hover:text-white transition-colors">Twitter</a>
                    <a href="https://github.com/ranjeetray6120" target="_blank" className="text-xs text-white/20 hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="text-xs text-white/20 hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
