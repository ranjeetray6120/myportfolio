"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300",
                scrolled ? "top-2" : "top-4"
            )}
        >
            <div className="glass-dark rounded-2xl px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <a href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-black text-xl shadow-[0_0_15px_rgba(173,255,47,0.4)]">
                            R
                        </div>
                        <span className="text-xl font-bold text-white hidden sm:inline-block">
                            Ranjeet.dev <span className="text-white/40 block text-[10px] -mt-1 font-normal tracking-wider uppercase">Portfolio</span>
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/ranjeetray6120"
                        target="_blank"
                        className="px-5 py-2 rounded-lg bg-primary text-black text-sm font-bold hover:opacity-90 transition-all shadow-[0_0_10px_rgba(173,255,47,0.2)]"
                    >
                        GitHub
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white/60 hover:text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 w-full glass-dark rounded-2xl p-6 md:hidden flex flex-col gap-4 border border-white/10"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-white/80"
                            >
                                {link.name}
                            </a>
                        ))}
                        <hr className="border-white/10 my-2" />
                        <a href="https://github.com/ranjeetray6120" target="_blank" className="flex items-center gap-2 text-white/80">
                            <Github size={18} /> GitHub
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
