import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Backend',
            skills: ['Spring Boot', 'Java', 'JPA', 'Hibernate', 'REST APIs', 'Multi-tenant Architecture', 'MySQL','JDBC',],
            color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
        },
        {
            title: 'Frontend',
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS','TanStack','Next.js','Node.js'],
            color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
        },
        {
            title: 'Tools',
            skills: ['IntelliJ', 'Eclipse', 'GitHub', 'Postman', 'Maven','JDK','JRE','JVM','VSCode','Git','Jenkins','Docker','Cursor','antigravity','Kiro',],
            color: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
        },
        {
            title: 'Other',
            skills: ['WebRTC', 'Email System (SMTP)', 'Database Design', 'System Architecture','DevOps'],
            color: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
        }
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
                            >
                                <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    {category.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className={`px-3 py-1 rounded-full text-sm font-medium border ${category.color}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
