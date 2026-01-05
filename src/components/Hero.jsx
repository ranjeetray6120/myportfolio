import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-600/30 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">
                        Full Stack Developer
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
                        Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Ranjeet Kumar</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                        I completed my B.Tech in 2025 and currently work as a Full Stack Developer at Chandra Realtors. 
                        I work on web development along with Android and iOS apps, and I also contribute to DevOps tasks.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="group px-8 py-3 bg-blue-600 text-white rounded-full font-medium transition-all hover:bg-blue-700 hover:scale-105 flex items-center gap-2"
                        >
                            View Work
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-3 border border-gray-600 text-white rounded-full font-medium hover:border-gray-400 hover:bg-white/5 transition-all"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
