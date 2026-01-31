"use client";

import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const projects = [
        {
            title: 'Camera Shooting Booking',
            tech: ['Spring Boot', 'MySQL', 'WebRTC', 'WebSocket'],
            description: 'A real-time service platform designed to handle simultaneous live streams and instantaneous messaging. Solved concurrency issues in camera booking slots and integrated low-latency communication via WebRTC.',
            link: '#',
            github: '#',
            color: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            title: 'Real Estate CRM',
            tech: ['Java', 'Multi-tenant', 'Hibernate', 'REST'],
            description: 'Architected a multi-company CRM with a focus on data isolation and dynamic routing. Implemented complex multi-tenant logic at the persistence layer using Hibernate filters and custom tenant resolvers.',
            link: 'https://github.com/ranjeetray6120/real-estate-crm-backend',
            github: 'https://github.com/ranjeetray6120/real-estate-crm-backend',
            color: 'from-purple-500/20 to-pink-500/20'
        },
        {
            title: 'Banking System',
            tech: ['Spring Security', 'JWT', 'JPA'],
            description: 'A highly secure financial management system. Implemented role-based access control (RBAC) and JWT-based stateless authentication, ensuring ACID compliance across all financial transactions.',
            link: 'https://github.com/ranjeetray6120/authuser',
            github: 'https://github.com/ranjeetray6120/authuser',
            color: 'from-emerald-500/20 to-teal-500/20'
        },
        {
            title: 'AI Assistant',
            tech: ['Python', 'NLP', 'OpenAI API', 'FastAPI'],
            description: 'A sophisticated intelligent assistant leveraging Large Language Models for natural language processing and task automation. Engineered a response-streaming backend for seamless user interaction.',
            link: 'https://github.com/ranjeetray6120/ai-assistant-',
            github: 'https://github.com/ranjeetray6120/ai-assistant-',
            color: 'from-orange-500/20 to-red-500/20'
        },
        {
            title: 'Cricket Simulator',
            tech: ['Java SE', 'Algorithms', 'MySQL'],
            description: 'A logic-heavy simulation engine that mimics real-world cricket dynamics. Implemented complex probability-based algorithms to determine ball outcomes and integrated automatic database logging.',
            link: 'https://github.com/ranjeetray6120',
            github: 'https://github.com/ranjeetray6120',
            color: 'from-yellow-500/20 to-orange-500/20'
        },
        {
            title: 'Manisha Portfolio',
            tech: ['React', 'Tailwind', 'Framer'],
            description: 'A personal portfolio website showcasing skills and projects with modern UI.',
            link: 'https://github.com/ranjeetray6120/manisha-portfolio',
            github: 'https://github.com/ranjeetray6120/manisha-portfolio',
            color: 'from-rose-500/20 to-pink-500/20'
        },
        {
            title: 'Landing Page',
            tech: ['HTML', 'CSS', 'Design'],
            description: 'A modern, responsive landing page with custom CSS animations and modern aesthetics.',
            link: 'https://github.com/ranjeetray6120/landing_page',
            github: 'https://github.com/ranjeetray6120/landing_page',
            color: 'from-indigo-500/20 to-blue-500/20'
        },
        {
            title: 'Smart Calculator',
            tech: ['JavaScript', 'HTML', 'Responsive'],
            description: 'A clean and responsive web-based calculator for complex mathematical operations.',
            link: 'https://github.com/ranjeetray6120/CALCULATOR',
            github: 'https://github.com/ranjeetray6120/CALCULATOR',
            color: 'from-cyan-500/20 to-emerald-500/20'
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden" ref={containerRef}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        >
                            Selected <span className="text-white/40">Work</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-white/50 font-light"
                        >
                            A collection of my most impactful projects, ranging from backend architectures to real-time communication systems.
                        </motion.p>
                    </div>
                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 5 }}
                        href="https://github.com/ranjeetray6120"
                        target="_blank"
                        className="flex items-center gap-2 text-white font-medium group px-6 py-3 rounded-full glass-dark border border-white/10 hover:bg-white/5 transition-all"
                    >
                        View all projects
                        <ArrowUpRight size={20} className="text-primary group-hover:rotate-45 transition-transform" />
                    </motion.a>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    <motion.div style={{ y: y1 }} className="flex flex-col gap-8 lg:gap-10">
                        {projects.filter((_, i) => i % 2 === 0).map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </motion.div>
                    <motion.div style={{ y: y2 }} className="flex flex-col gap-8 lg:gap-10 md:mt-12">
                        {projects.filter((_, i) => i % 2 !== 0).map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative h-full perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: "1000px" // CSS perspective
            }}
        >
            <motion.div
                className="relative border border-white/10 bg-white/5 rounded-[2.5rem] overflow-hidden h-full transform-style-3d transition-shadow hover:shadow-[0_0_50px_-15px_rgba(173,255,47,0.3)]"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(173, 255, 47, 0.15),
                            transparent 80%
                        )
                    `,
                    }}
                />

                <div className="relative h-full p-8 lg:p-12 flex flex-col justify-between z-10">
                    {/* Gradient Blob for visual interest */}
                    <div className={cn(
                        "absolute top-0 right-0 w-64 h-64 bg-gradient-to-br rounded-full blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-500",
                        project.color
                    )} />

                    <div>
                        <div className="flex justify-between items-start mb-8 transform-style-3d" style={{ transform: "translateZ(30px)" }}>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-white/50 font-bold group-hover:text-white/80 group-hover:border-white/20 transition-all">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a href={project.github} target="_blank" className="text-white/30 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                                    <Github size={20} />
                                </a>
                                <a href={project.link} target="_blank" className="text-white/30 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-primary transition-colors transform-style-3d" style={{ transform: "translateZ(50px)" }}>
                            {project.title}
                        </h3>
                        <p className="text-white/50 text-lg leading-relaxed font-light mb-12 group-hover:text-white/70 transition-colors">
                            {project.description}
                        </p>
                    </div>

                    <motion.div
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-3 text-white font-bold cursor-pointer w-fit"
                    >
                        View details
                        <ArrowRight size={20} className="text-primary" />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ArrowRight = ({ className, size }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
);

export default Projects;
