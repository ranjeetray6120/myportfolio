import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-gray-300">
                            <p>
                                I’m a developer from Bihar. I completed my B.Tech in Computer Science Engineering in 2025 at Baba Banda Singh Bahadur Engineering College.
                            </p>
                            <p>
                                I currently work as a Full Stack Developer at Chandra Realtors where I build web platforms, Android and iOS apps, and also work with DevOps tools and production deployments.
                            </p>
                            <p>
                                My main focus is backend development using <strong>Java</strong> and <strong>Spring Boot</strong>, but I also work with APIs, authentication, email notifications, live streaming and dashboards.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                                <Code className="text-blue-400 mb-4" size={32} />
                                <h3 className="text-xl font-semibold text-white mb-2">Full Stack Development</h3>
                                <p className="text-gray-400">Java, Spring Boot, React, REST APIs, Android, and iOS apps.</p>
                            </div>
                            <div className="p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
                                <Database className="text-emerald-400 mb-4" size={32} />
                                <h3 className="text-xl font-semibold text-white mb-2">Database and DevOps</h3>
                                <p className="text-gray-400">MySQL design, multi-tenant systems, deployments, and DevOps tooling.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
