"use client";

import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Lock, CreditCard, Headphones } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'All-in-One Access',
    description: 'Access multiple premium platforms from a single dashboard. No need for multiple subscriptions.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data is encrypted and secure. We use advanced security measures to protect your account.',
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Get started immediately after purchase. Automated system ensures zero waiting time.',
  },
  {
    icon: Lock,
    title: 'Cookie Managment',
    description: 'Advanced cookie management system for seamless access to cookie-based platforms.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Pricing',
    description: 'Choose a plan that fits your budget. Upgrade or downgrade anytime.',
  },
  {
    icon: Headphones,
    title: 'Premium Support',
    description: 'Our dedicated support team is always ready to help you with any issues.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide the best solution for managing your premium subscriptions efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
