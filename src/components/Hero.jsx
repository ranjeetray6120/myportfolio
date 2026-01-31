"use strict";

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
            {/* Background Magic */}
            {/* Background Cyber Mesh */}
            {/* Background Magic - Staggered Grid (Global in Layout) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" />

            <div className="container relative z-10 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 mb-8">
                        <Sparkles size={16} className="text-secondary" />
                        <span className="text-sm font-medium text-white/80 tracking-wide uppercase">
                            Full Stack Developer
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-8">
                        Core Java Expert & <br />
                        <span className="text-gradient">Full Stack Architect</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        Specializing in building <span className="text-white">robust backend systems</span> with Spring Boot and
                        <span className="text-white">scalable web architectures</span>.
                        Engineering efficient solutions for complex business challenges.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 bg-primary text-black rounded-xl font-bold transition-all hover:opacity-90 flex items-center gap-3 shadow-[0_0_20px_rgba(173,255,47,0.3)]"
                        >
                            View Projects
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 glass text-white rounded-xl font-bold hover:bg-white/10 transition-all border-white/20"
                        >
                            Download CV
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative bottom element */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] bg-gradient-to-t from-primary/20 to-transparent blur-3xl -z-10"
            />
        </section>
    );
};

export default Hero;

// Local DotGrid removed

