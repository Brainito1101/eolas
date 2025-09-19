"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { initTimelineAnimation, fadeInUp, staggerContainer } from '@/lib/animations';
import { Search, Zap, MessageCircle, Repeat } from 'lucide-react';

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        initTimelineAnimation();
      }, 500);
    }
  }, [isInView]);

  const steps = [
    {
      icon: Search,
      title: 'Analyze',
      description: 'Process market data, social signals, and environmental factors to identify opportunities.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Act',
      description: 'Execute trades, create content, or perform tasks based on intelligent analysis.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: MessageCircle,
      title: 'Communicate',
      description: 'Engage with communities, share insights, and build meaningful connections.',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Repeat,
      title: 'Adapt',
      description: 'Learn from results, refine strategies, and continuously improve performance.',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              How Eolas Agents Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our intelligent agents follow a continuous cycle of analysis, action, 
              communication, and adaptation to deliver optimal results.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 via-cyan-500 to-pink-500 opacity-30"></div>

            <div className="space-y-16">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    className={`timeline-item flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } opacity-0`}
                  >
                    <div className={`flex-1 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className={`glass-card p-6 rounded-xl ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      } text-center`}>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Icon */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 mx-4">
                      <div className={`w-full h-full bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center neon-glow`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className={`flex-1 ${isEven ? 'md:pl-8' : 'md:pr-8'} hidden md:block`}></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}