"use client";

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience & Education</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </div>

                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
                    {/* Experience Column */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                <Briefcase className="text-primary" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">Work Experience</h3>
                        </div>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-white/5 before:to-transparent">
                            <ExperienceItem
                                title="Full Stack Developer"
                                company="Chandra Realtors"
                                period="2025 - Present"
                                description="Leading full-stack development. Working on internal CRM systems, mobile apps, and DevOps automation."
                                icon={<div className="w-3 h-3 rounded-full bg-primary border-4 border-black" />}
                            />
                            <ExperienceItem
                                title="App Debugging"
                                company="MereHisaab App"
                                period="2024"
                                description="Resolved critical build issues, optimized performance, and handled production releases for React Native apps."
                                icon={<div className="w-3 h-3 rounded-full bg-white/20 border-4 border-black" />}
                            />
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                                <GraduationCap className="text-accent" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
                        </div>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent/50 before:via-white/5 before:to-transparent">
                            <ExperienceItem
                                title="B.Tech in CSE"
                                company="Baba Banda Singh Bahadur Engineering College"
                                period="2021 - 2025"
                                description="Specialized in software development and modern backend architectures."
                                icon={<div className="w-3 h-3 rounded-full bg-accent border-4 border-black" />}
                            />
                            <ExperienceItem
                                title="Senior Secondary"
                                company="BSEB Bihar"
                                period="2018 - 2020"
                                description="Deep interest in mathematics and computer science fundamentals."
                                icon={<div className="w-3 h-3 rounded-full bg-white/20 border-4 border-black" />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ExperienceItem = ({ title, company, period, description, icon }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active perspective-1000"
        >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 glass-dark text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-white/20">
                {icon}
            </div>

            <motion.div
                style={{ perspective: 1000 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <motion.div
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="p-6 rounded-3xl glass-dark border border-white/5 transition-all group-hover:border-white/10 group-hover:bg-white/[0.07] hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 transform-style-3d" style={{ transform: "translateZ(20px)" }}>
                        <div className="font-bold text-white text-lg">{title}</div>
                        <time className="text-xs font-medium text-white/30 uppercase tracking-widest">{period}</time>
                    </div>
                    <div className="text-primary/80 font-medium text-sm mb-4 transform-style-3d" style={{ transform: "translateZ(10px)" }}>{company}</div>
                    <div className="text-white/50 text-sm leading-relaxed font-light transform-style-3d" style={{ transform: "translateZ(5px)" }}>{description}</div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Experience;
