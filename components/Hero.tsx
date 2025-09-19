"use client";

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { initFloatingShapes, initParticleAnimation, fadeInUp, staggerContainer } from '@/lib/animations';
import Button from './Button';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  useEffect(() => {
    initFloatingShapes();
    initParticleAnimation();
  }, []);

  const socialLinks = [
    { href: 'https://twitter.com/eolas', label: 'Follow on X' },
    { href: 'https://t.me/eolas', label: 'Join Telegram' },
    { href: 'https://docs.eolas.fun', label: 'View Docs' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="gradient-text">Eolas:</span>
            <br />
            <span className="text-white">Empowering Agents with</span>
            <br />
            <span className="gradient-text">Edge, Reach, and Trace</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Unlock the full potential of AI agents with advanced trading capabilities, 
            social engagement tools, and complete transparency monitoring.
          </motion.p>

          {/* Character Placeholder */}
          <motion.div
            variants={fadeInUp}
            className="relative w-48 h-48 mx-auto my-12"
          >
            <div className="w-full h-full glass-card rounded-2xl flex items-center justify-center floating">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 neon-glow"></div>
                <p className="text-xs text-gray-400">
                  Replace with Nic's character visual
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                href={link.href}
                variant={index === 0 ? 'primary' : 'secondary'}
                size="lg"
              >
                {link.label}
              </Button>
            ))}
            <Button
              href="#waitlist"
              variant="outline"
              size="lg"
            >
              Join Waitlist
            </Button>
          </motion.div>

          {/* Floating Shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="floating-shape absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-sm"></div>
            <div className="floating-shape absolute top-1/3 right-1/4 w-12 h-12 bg-purple-500/20 rounded-full blur-sm"></div>
            <div className="floating-shape absolute bottom-1/3 left-1/3 w-20 h-20 bg-cyan-500/20 rounded-full blur-sm"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}