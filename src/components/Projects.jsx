import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Camera Shooting Booking System',
            tech: 'Spring Boot, MySQL, WebRTC',
            description: 'A full booking platform for camera shooting services like weddings and events.',
            features: ['Booking management', 'Admin dashboard', 'Live streaming using WebRTC', 'Chat system', 'Email notifications'],
            link: '#',
            github: '#'
        },
        {
            title: 'Real Estate CRM',
            tech: 'Full Stack, Multi-tenant DB',
            description: 'Multi-company CRM system for real estate businesses.',
            features: ['Lead management', 'Follow-ups & Notes', 'User roles & Admin dashboard', 'Multi-tenant database (separate DB per company)'],
            link: 'https://github.com/ranjeetray6120/real-estate-crm-backend',
            github: 'https://github.com/ranjeetray6120/real-estate-crm-backend'
        },
        {
            title: 'Banking Management System',
            tech: 'Spring Boot, Security',
            description: 'Secure banking system for customer account management.',
            features: ['Customer account creation', 'Transactions (Withdraw/Deposit)', 'Entity relations', 'Secure authentication'],
            link: 'https://github.com/ranjeetray6120/authuser',
            github: 'https://github.com/ranjeetray6120/authuser'
        },
        {
            title: 'Cricket Management Simulator',
            tech: 'Hibernate, Java',
            description: 'Detailed ball-by-ball cricket simulation engine.',
            features: ['Team selection', 'Match result calculation', 'Player performance records', 'Automatic database updates'],
            link: 'https://github.com/ranjeetray6120',
            github: 'https://github.com/ranjeetray6120'
        },
        {
            title: 'Calculator',
            tech: 'HTML, CSS, JavaScript',
            description: 'A responsive web-based calculator.',
            features: ['Mathematical operations', 'Responsive design', 'Clean UI'],
            link: 'https://github.com/ranjeetray6120/CALCULATOR',
            github: 'https://github.com/ranjeetray6120/CALCULATOR'
        },
        {
            title: 'Landing Page',
            tech: 'CSS, HTML',
            description: 'A modern landing page design.',
            features: ['Responsive layout', 'CSS animations', 'Modern aesthetics'],
            link: 'https://github.com/ranjeetray6120/landing_page',
            github: 'https://github.com/ranjeetray6120/landing_page'
        },
        {
            title: 'Manisha Portfolio',
            tech: 'React, Tailwind CSS',
            description: 'A personal portfolio website showcasing skills and projects.',
            features: ['Responsive Design', 'Project Showcase', 'Contact Form', 'Modern UI'],
            link: 'https://github.com/ranjeetray6120/manisha-portfolio',
            github: 'https://github.com/ranjeetray6120/manisha-portfolio'
        },
        {
            title: 'AI Assistant',
            tech: 'Python, AI',
            description: 'An intelligent assistant capable of answering queries and performing tasks.',
            features: ['Natural Language Processing', 'Task Automation', 'Context Awareness', 'Smart Responses'],
            link: 'https://github.com/ranjeetray6120/ai-assistant-',
            github: 'https://github.com/ranjeetray6120/ai-assistant-'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                        <span className="text-sm text-blue-400 mt-1 block">{project.tech}</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                                        <a href={project.link} className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6">{project.description}</p>

                                <div className="space-y-2">
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
