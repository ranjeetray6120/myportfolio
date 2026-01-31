"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        window.addEventListener('mousemove', moveCursor);

        // Add event listeners to all clickable elements
        const clickableElements = document.querySelectorAll('a, button, input, [role="button"]');
        clickableElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup: Use MutationObserver to handle dynamically added elements (like the AI chat)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    const newClickables = document.querySelectorAll('a, button, input, [role="button"]');
                    newClickables.forEach(el => {
                        el.removeEventListener('mouseenter', handleMouseEnter); // Prevent duplicates
                        el.removeEventListener('mouseleave', handleMouseLeave);
                        el.addEventListener('mouseenter', handleMouseEnter);
                        el.addEventListener('mouseleave', handleMouseLeave);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            clickableElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            observer.disconnect();
        };
    }, [cursorX, cursorY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
            {/* Inner Dot - Follows strictly */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: 12, // Center offset
                    y: 12
                }}
            />

            {/* Outer Ring - Follows with spring delay */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    borderColor: isHovered ? 'rgba(173, 255, 47, 0.8)' : 'rgba(173, 255, 47, 0.3)',
                    backgroundColor: isHovered ? 'rgba(173, 255, 47, 0.1)' : 'transparent',
                }}
                transition={{ duration: 0.15 }}
            />
        </div>
    );
};

export default Cursor;
