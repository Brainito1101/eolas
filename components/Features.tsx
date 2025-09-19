"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, initHoverGlow } from '@/lib/animations';
import { TrendingUp, MessageSquare, Shield, Activity, Globe, Lock } from 'lucide-react';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      initHoverGlow('.feature-card');
    }
  }, [isInView]);

  const edgeFeatures = [
    {
      icon: TrendingUp,
      title: 'Smart Trading Engine',
      description: 'Advanced algorithms for market analysis, pattern recognition, and automated execution.'
    },
    {
      icon: Activity,
      title: 'Real-time Analytics',
      description: 'Live market data processing with millisecond precision for optimal timing.'
    }
  ];

  const reachFeatures = [
    {
      icon: MessageSquare,
      title: 'Social Automation',
      description: 'Intelligent content creation and engagement across multiple social platforms.'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Integration',
      description: 'Seamless connectivity with Twitter, Telegram, Discord, and more.'
    }
  ];

  const traceFeatures = [
    {
      icon: Shield,
      title: 'Transparent Operations',
      description: 'Complete audit trail of all agent decisions and actions with immutable logs.'
    },
    {
      icon: Lock,
      title: 'Security Monitoring',
      description: 'Advanced threat detection and prevention with real-time security alerts.'
    }
  ];

  const FeatureCard = ({ feature, index, variant }: { 
    feature: any; 
    index: number; 
    variant: any; 
  }) => {
    const IconComponent = feature.icon;
    
    return (
      <motion.div
        variants={variant}
        className="feature-card glass-card p-6 rounded-xl space-y-4 transition-all duration-300"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-white">{feature.title}</h4>
        <p className="text-gray-300">{feature.description}</p>
      </motion.div>
    );
  };

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Three Pillars of Agent Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each pillar represents a core capability that transforms how AI agents 
              interact with the digital world.
            </p>
          </motion.div>

          {/* Edge Features */}
          <motion.div variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeInLeft} className="text-center">
              <h3 className="text-3xl font-bold text-blue-400 mb-4">Edge</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Cutting-edge trading capabilities that give agents a competitive advantage in financial markets.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {edgeFeatures.map((feature, index) => (
                <FeatureCard 
                  key={index} 
                  feature={feature} 
                  index={index} 
                  variant={fadeInLeft} 
                />
              ))}
            </div>
          </motion.div>

          {/* Reach Features */}
          <motion.div variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeInRight} className="text-center">
              <h3 className="text-3xl font-bold text-purple-400 mb-4">Reach</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Expand agent influence through intelligent social engagement and community building.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reachFeatures.map((feature, index) => (
                <FeatureCard 
                  key={index} 
                  feature={feature} 
                  index={index} 
                  variant={fadeInRight} 
                />
              ))}
            </div>
          </motion.div>

          {/* Trace Features */}
          <motion.div variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeInLeft} className="text-center">
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">Trace</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Complete transparency and monitoring ensure agents operate with full accountability.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {traceFeatures.map((feature, index) => (
                <FeatureCard 
                  key={index} 
                  feature={feature} 
                  index={index} 
                  variant={fadeInLeft} 
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}