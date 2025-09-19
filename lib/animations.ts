import { animate } from 'animejs';
import type { Variants } from 'framer-motion';

// Framer Motion variants
// Use cubic-bezier arrays for `ease` to satisfy strict typings
const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

export const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: easeOut 
    } 
  }
};

// Anime.js helpers using the latest `{ animate }` API
export const initFloatingShapes = () => {
  animate('.floating-shape', {
    translateY: [-10, 10],
    translateX: [-5, 5],
    rotate: [-5, 5],
    scale: [1, 1.05],
    duration: 4000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    // Use untyped parameters to match Anime.js FunctionValue signature
    delay: (_el, i) => i * 200,
  });
};

export const initParticleAnimation = () => {
  const particles = document.querySelectorAll('.particle');
  particles.forEach((particle, i) => {
    animate(particle as Element, {
      keyframes: [
        { translateY: -10, duration: 1000 },
        { translateY: 10, duration: 2000 },
        { translateY: 0, duration: 1000 },
      ],
      easing: 'easeInOutQuad',
      loop: true,
      delay: i * 300,
    });
    animate(particle as Element, {
      keyframes: [
        { translateX: -5, duration: 2000 },
        { translateX: 5, duration: 2000 },
        { translateX: 0, duration: 1000 },
      ],
      easing: 'easeInOutQuad',
      loop: true,
      delay: i * 300,
    });
    animate(particle as Element, {
      keyframes: [
        { opacity: 0.3, duration: 1000 },
        { opacity: 0.8, duration: 1000 },
        { opacity: 0.3, duration: 1000 },
      ],
      easing: 'easeInOutQuad',
      loop: true,
      delay: i * 300,
    });
  });
};

export const initTimelineAnimation = () => {
  // Simple staged sequence without a dedicated timeline helper
  const steps = [
    '.timeline-item:nth-child(1)',
    '.timeline-item:nth-child(2)',
    '.timeline-item:nth-child(3)',
    '.timeline-item:nth-child(4)',
  ];

  steps.forEach((selector, index) => {
    animate(selector, {
      opacity: [0, 1],
      translateX: index % 2 === 0 ? [-30, 0] : [30, 0],
      easing: 'easeOutExpo',
      duration: 750,
      delay: index * 150,
    });
  });
};

export const initHoverGlow = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      animate(element, {
        scale: 1.05,
        boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
        duration: 300,
        easing: 'easeOutQuad',
      });
    });
    element.addEventListener('mouseleave', () => {
      animate(element, {
        scale: 1,
        boxShadow: '0 0 10px rgba(0, 212, 255, 0.2)',
        duration: 300,
        easing: 'easeOutQuad',
      });
    });
  });
};