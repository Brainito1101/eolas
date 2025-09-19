"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Button from './Button';
import { CheckCircle, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  useCase: z.string().min(10, 'Please describe your use case (minimum 10 characters)'),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card p-12 rounded-3xl space-y-6"
          >
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto neon-glow" />
            <h3 className="text-3xl font-bold text-white">Thank You!</h3>
            <p className="text-xl text-gray-300">
              We've received your information and will be in touch soon with early access details.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Submit Another Response
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Join the Future
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get early access to Eolas and be among the first to empower your agents 
              with Edge, Reach, and Trace capabilities.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeInUp}>
            <div className="glass-card p-8 md:p-12 rounded-3xl border-blue-500/20">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="futuristic-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="futuristic-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization *
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    className="futuristic-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                    placeholder="Your company name"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Use Case *
                  </label>
                  <textarea
                    {...register('useCase')}
                    rows={4}
                    className="futuristic-input w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none resize-none"
                    placeholder="Describe how you plan to use Eolas agents..."
                  />
                  {errors.useCase && (
                    <p className="mt-1 text-sm text-red-400">{errors.useCase.message}</p>
                  )}
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Join Waitlist</span>
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}