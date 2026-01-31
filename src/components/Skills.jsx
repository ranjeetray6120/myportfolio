"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

const Skills = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yEven = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const yOdd = useTransform(scrollYProgress, [0, 1], [0, 50]);

    const skillCategories = [
        {
            title: 'Backend & Systems',
            skills: ['Java 8/11/17', 'Spring Boot 3.x', 'Hibernate/JPA', 'Microservices', 'Spring Security', 'MySQL', 'System Design'],
            gradient: 'from-blue-500/20 to-cyan-500/20',
            borderColor: 'group-hover:border-blue-500/30'
        },
        {
            title: 'Frontend & UI',
            skills: ['React.js', 'Next.js 14/15', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'JavaScript (ES6+)', 'Responsive UI'],
            gradient: 'from-emerald-500/20 to-teal-500/20',
            borderColor: 'group-hover:border-emerald-500/30'
        },
        {
            title: 'DevOps & Cloud',
            skills: ['Docker', 'Jenkins', 'GitHub Actions', 'Maven', 'Git / GitHub', 'CI/CD Pipelines', 'RESTful API Design'],
            gradient: 'from-purple-500/20 to-pink-500/20',
            borderColor: 'group-hover:border-purple-500/30'
        },
        {
            title: 'Tools & Ecosystem',
            skills: ['Postman', 'WebRTC', 'SMTP', 'Linux Shell', 'Auth/Identity (JWT)', 'Multi-tenant Logic', 'IntelliJ / VS Code'],
            gradient: 'from-orange-500/20 to-red-500/20',
            borderColor: 'group-hover:border-orange-500/30'
        }
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical <span className="text-white/40">Toolbox</span></h2>
                    <p className="text-white/50 text-lg font-light leading-relaxed">
                        A comprehensive set of technologies I use to bring complex digital products to life.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} category={category} index={index} y={index % 2 === 0 ? yEven : yOdd} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ category, index, y }) => {
    const x = useMotionValue(0);
    const yRotate = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(yRotate, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set((clientX - left) / width - 0.5);
        yRotate.set((clientY - top) / height - 0.5);
    }

    function handleMouseLeave() {
        x.set(0);
        yRotate.set(0);
    }

    return (
        <motion.div
            style={{ y, perspective: 1000 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative h-full"
            >
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-br rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                    category.gradient
                )} />

                <div className={cn(
                    "glass-dark rounded-[2rem] p-8 border border-white/5 transition-all h-full group-hover:border-white/20 group-hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]",
                    category.borderColor
                )}>
                    <h3 className="text-xl font-bold text-white mb-8 tracking-tight transform-style-3d" style={{ transform: "translateZ(30px)" }}>{category.title}</h3>
                    <div className="flex flex-wrap gap-2 transform-style-3d" style={{ transform: "translateZ(20px)" }}>
                        {category.skills.map((skill, idx) => (
                            <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + (idx * 0.05) }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                viewport={{ once: true }}
                                className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[10px] sm:text-xs font-semibold text-white/60 cursor-default transition-colors"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Skills;
