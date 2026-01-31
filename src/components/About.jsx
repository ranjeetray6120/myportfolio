"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Code, Database, Globe, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -50]);

    return (
        <section id="about" className="relative py-24 overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/2 space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                    Architecting Systems <br />
                                    <span className="text-white/40">Through Better Design</span>
                                </h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                            </div>

                            <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
                                <p>
                                    I thrive at the intersection of performance and scalability. With a deep foundation in the **Java ecosystem**,
                                    I focus on building systems that don't just work—they scale. My approach is rooted in clean code, design patterns, and a
                                    relentless pursuit of architectural excellence.
                                </p>
                                <p>
                                    Currently, I'm a Full Stack Developer at <span className="text-white font-medium">Chandra Realtors</span>, where I lead the development of high-throughput web platforms and multi-tenant systems.
                                </p>
                                <p>
                                    I believe that software engineering is about solving real-world problems with elegant, maintainable code. Whether it's optimizing a Spring Boot microservice or architecting complex databases, I bring a methodical approach to every challenge.
                                </p>
                            </div>
                        </div>

                        <motion.div style={{ y }} className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            <AboutCard
                                icon={<Code className="text-primary" />}
                                title="Systems Engineering"
                                description="Expertise in designing resilient, high-throughput distributed systems in Java."
                                delay={0.1}
                            />
                            <AboutCard
                                icon={<Database className="text-secondary" />}
                                title="Backend Architecture"
                                description="Architecting robust APIs and multi-tenant database systems with Spring Boot."
                                delay={0.2}
                            />
                            <AboutCard
                                icon={<Globe className="text-accent" />}
                                title="Cloud Infrastructure"
                                description="Production deployments and scalable microservices management."
                                delay={0.3}
                            />
                            <AboutCard
                                icon={<Zap className="text-yellow-400" />}
                                title="Problem Solving"
                                description="Optimizing legacy codebases and improving system performance."
                                delay={0.4}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const AboutCard = ({ icon, title, description, delay }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set((clientX - left) / width - 0.5);
        y.set((clientY - top) / height - 0.5);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{ perspective: 1000 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="group relative h-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="p-8 glass-dark rounded-3xl border border-white/5 hover:border-white/10 transition-all h-full"
            >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform transform-style-3d" style={{ transform: "translateZ(30px)" }}>
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight transform-style-3d" style={{ transform: "translateZ(20px)" }}>{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed transform-style-3d" style={{ transform: "translateZ(10px)" }}>{description}</p>
            </motion.div>
        </motion.div>
    );
};

export default About;
