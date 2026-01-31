"use client";

import React, { useEffect, useRef } from 'react';

const StaggeredGrid = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width, height;
        let dots = [];

        // Grid configuration
        const DOT_SIZE = 1.5; // Radius
        const DOT_SPACING = 25;
        const HOVER_RADIUS = 100;

        let mouseX = -1000;
        let mouseY = -1000;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        class Dot {
            constructor(x, y, indexX, indexY) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.indexX = indexX;
                this.indexY = indexY;
                // Staggered entry delay calculation
                this.delay = (indexX + indexY) * 0.05;
                this.timer = 0;
                this.scale = 0;
                this.opacity = 0;
                this.maxOpacity = 0.2;
                this.color = 255;
            }

            draw() {
                // Entry animation logic
                if (this.timer < this.delay) {
                    this.timer += 0.01;
                    return;
                }

                // Pulse animation
                const time = Date.now() / 1000;
                const pulse = Math.sin(time + this.indexX * 0.1 + this.indexY * 0.1) * 0.1 + 1; // base pulse

                // Interaction logic
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                let targetScale = 1;
                let targetOpacity = this.maxOpacity;
                let colorStyle = `rgba(255, 255, 255, ${this.opacity})`;

                if (distance < HOVER_RADIUS) {
                    targetScale = 4;
                    targetOpacity = 1;
                    colorStyle = '#ADFF2F';
                }

                // Smooth interpolation
                this.scale += (targetScale - this.scale) * 0.1;
                this.opacity += (targetOpacity - this.opacity) * 0.1;

                ctx.beginPath();
                ctx.arc(this.x, this.y, DOT_SIZE * this.scale * pulse, 0, Math.PI * 2);
                ctx.fillStyle = colorStyle;
                ctx.fill();
            }
        }

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            dots = [];
            const cols = Math.floor(width / DOT_SPACING) + 2;
            const rows = Math.floor(height / DOT_SPACING) + 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    dots.push(new Dot(i * DOT_SPACING + DOT_SPACING / 2, j * DOT_SPACING + DOT_SPACING / 2, i, j));
                }
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            dots.forEach(dot => dot.draw());
            animationFrameId = requestAnimationFrame(render);
        };

        const onResize = () => {
            init();
        };

        window.addEventListener('resize', onResize);
        window.addEventListener('mousemove', handleMouseMove);

        init();
        render();

        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
            />
        </div>
    );
};

export default StaggeredGrid;
