"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin, Github, Send, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [-50, 0]);
    const x2 = useTransform(scrollYProgress, [0, 1], [50, 0]);

    return (
        <section id="contact" className="py-24 relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Info Side */}
                        <motion.div
                            style={{ x: x1 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 space-y-12"
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                    Let's build <br />
                                    <span className="text-white/40">something exceptional</span>
                                </h2>
                                <p className="text-lg text-white/50 font-light leading-relaxed max-w-md">
                                    Currently open to internships and full-time opportunities in Backend and Full Stack roles.
                                    I love talking about Java, Spring Boot, and modern web architectures.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <ContactItem
                                    icon={<Mail className="text-primary" size={20} />}
                                    label="Email"
                                    value="ranjeetkumarroya23@gmail.com"
                                    href="mailto:ranjeetkumarroya23@gmail.com"
                                />
                                <ContactItem
                                    icon={<Github className="text-accent" size={20} />}
                                    label="GitHub"
                                    value="@ranjeetray6120"
                                    href="https://github.com/ranjeetray6120"
                                />
                                <ContactItem
                                    icon={<MapPin className="text-secondary" size={20} />}
                                    label="Location"
                                    value="Bihar, India"
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <SocialButton icon={<Linkedin size={20} />} href="#" />
                                <SocialButton icon={<Github size={20} />} href="https://github.com/ranjeetray6120" />
                            </div>
                        </motion.div>

                        {/* Form Side */}
                        <motion.div
                            style={{ x: x2 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="glass-dark rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl relative">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />

                                <form className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Full Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-white/20 text-white placeholder-white/20 transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Email Address</label>
                                            <input
                                                type="email"
                                                className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-white/20 text-white placeholder-white/20 transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-4">Your Message</label>
                                        <textarea
                                            rows="5"
                                            className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-white/20 text-white placeholder-white/20 transition-all resize-none"
                                            placeholder="Tell me about your project..."
                                        ></textarea>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full py-5 bg-primary text-black rounded-2xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl shadow-primary/10"
                                    >
                                        <Send size={18} />
                                        Send Message
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ icon, label, value, href }) => (
    <div className="flex items-center gap-6 group">
        <div className="w-12 h-12 rounded-2xl glass-dark border border-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
            {icon}
        </div>
        <div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/20 mb-1">{label}</p>
            {href ? (
                <a href={href} className="text-white font-medium hover:text-primary transition-colors">{value}</a>
            ) : (
                <p className="text-white font-medium">{value}</p>
            )}
        </div>
    </div>
);

const SocialButton = ({ icon, href }) => (
    <a
        href={href}
        target="_blank"
        className="w-12 h-12 rounded-2xl glass-dark border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
    >
        {icon}
    </a>
);

export default Contact;
