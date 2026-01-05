import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & Education</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

                    {/* Experience Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="text-blue-500" size={24} />
                            <h3 className="text-2xl font-bold text-white">Work Experience</h3>
                        </div>

                        <div className="relative pl-8 border-l-2 border-slate-700 space-y-12">

                            {/* Chandra Realtors */}
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-900"></div>

                                <h4 className="text-xl font-bold text-white">Full Stack Developer</h4>
                                <p className="text-blue-400 mb-2">Chandra Realtors</p>
                                <p className="text-gray-400 text-sm mb-4">Web apps, mobile apps and DevOps</p>

                                <ul className="space-y-2 text-gray-300">
                                    <li>• Working on internal CRM systems and backend modules.</li>
                                    <li>• Building Android and iOS apps used for sales and property management.</li>
                                    <li>• Contributing to deployments and DevOps automation.</li>
                                </ul>
                            </div>

                            {/* MereHisaab app */}
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-900"></div>

                                <h4 className="text-xl font-bold text-white">Android App Debugging</h4>
                                <p className="text-blue-400 mb-2">MereHisaab App</p>
                                <p className="text-gray-400 text-sm mb-4">React Native app debugging</p>

                                <ul className="space-y-2 text-gray-300">
                                    <li>• Debugged build issues and fixed release configuration.</li>
                                    <li>• Resolved Android crashes, signature conflicts and deployment errors.</li>
                                    <li>• Optimized performance during production releases.</li>
                                </ul>
                            </div>

                        </div>
                    </motion.div>

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Calendar className="text-emerald-500" size={24} />
                            <h3 className="text-2xl font-bold text-white">Education</h3>
                        </div>

                        <div className="relative pl-8 border-l-2 border-slate-700 space-y-12">

                            {/* B.Tech */}
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-emerald-500 border-4 border-slate-900"></div>

                                <h4 className="text-xl font-semibold text-white">B.Tech in Computer Science Engineering</h4>
                                <p className="text-emerald-400 mb-2">Baba Banda Singh Bahadur Engineering College</p>
                                <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs text-gray-400 mb-4">
                                    2021 – 2025
                                </div>

                                <p className="text-gray-300">
                                    Completed B.Tech specializing in software development and modern backend technologies.
                                </p>
                            </div>

                            {/* 12th */}
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-emerald-500 border-4 border-slate-900"></div>

                                <h4 className="text-xl font-semibold text-white">Senior Secondary Education (12th)</h4>
                                <p className="text-emerald-400 mb-2">Bihar School Examination Board</p>
                                <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs text-gray-400 mb-4">
                                    2018 – 2020
                                </div>

                                <p className="text-gray-300">
                                    Completed senior secondary education with interest in computer science and mathematics.
                                </p>
                            </div>

                            {/* 10th */}
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-emerald-500 border-4 border-slate-900"></div>

                                <h4 className="text-xl font-semibold text-white">Secondary Education (10th)</h4>
                                <p className="text-emerald-400 mb-2">Bihar School Examination Board</p>
                                <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs text-gray-400 mb-4">
                                    2017 – 2018
                                </div>

                                <p className="text-gray-300">
                                    Built strong fundamentals and interest in technology during school years.
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
