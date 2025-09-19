"use client";

import { motion } from 'framer-motion';
import { Twitter, Send, BookOpen, Github } from 'lucide-react';
import Button from './Button';

export default function Footer() {
  const socialLinks = [
    { 
      icon: Twitter, 
      label: 'Follow on X', 
      href: 'https://twitter.com/eolas',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Send, 
      label: 'Join Telegram', 
      href: 'https://t.me/eolas',
      color: 'hover:text-cyan-400'
    },
    { 
      icon: BookOpen, 
      label: 'View Docs', 
      href: 'https://docs.eolas.fun',
      color: 'hover:text-purple-400'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/eolas',
      color: 'hover:text-gray-400'
    },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#timeline' },
    { label: 'Join Waitlist', href: '#waitlist' },
  ];

  return (
    <footer className="bg-black border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg neon-glow"></div>
              <span className="text-2xl font-bold gradient-text">Eolas</span>
            </motion.div>
            <p className="text-gray-300 max-w-sm">
              Empowering AI agents with Edge, Reach, and Trace capabilities 
              for the next generation of autonomous systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 text-gray-300 transition-colors duration-300 ${social.color}`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Get Started</h3>
            <p className="text-gray-300 text-sm">
              Ready to revolutionize your AI agents?
            </p>
            <div className="space-y-3">
              <Button href="#waitlist" variant="primary" size="sm" className="w-full">
                Join Waitlist
              </Button>
              <div></div>
              <Button href="https://docs.eolas.fun" variant="outline" size="sm" className="w-full">
                Read Docs
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Eolas. All rights reserved. Built for the future.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Glowing divider */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
    </footer>
  );
}