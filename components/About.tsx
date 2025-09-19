"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Zap, Users, Eye } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Zap,
      title: 'Edge',
      description: 'Advanced trading capabilities with real-time market analysis and execution.'
    },
    {
      icon: Users,
      title: 'Reach',
      description: 'Seamless social engagement across platforms with intelligent automation.'
    },
    {
      icon: Eye,
      title: 'Trace',
      description: 'Complete transparency and monitoring of all agent activities and decisions.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Revolutionizing Agent Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Eolas empowers AI agents with three fundamental pillars: 
              trading edge, social reach, and complete trace visibility.
            </p>
          </motion.div>

          {/* Feature Icons */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass-card p-8 rounded-2xl text-center space-y-4 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full neon-glow">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mission Statement */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-3xl border-blue-500/20">
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                We're building the next generation of AI agent infrastructure, where autonomous 
                systems can trade, engage, and operate with complete transparency. Eolas bridges 
                the gap between AI capabilities and real-world applications, empowering agents 
                to make meaningful impacts across digital ecosystems.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}