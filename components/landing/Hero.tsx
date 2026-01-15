"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-18 md:py-32 lg:py-30">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              New: Enterprise Plans Available
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl"
          >
            <span className="tracking-tighter">Access All Your Favorite</span> <br />
            <span className="gradient-text tracking-tighter">Premium Platforms</span>{" "} 
            <span className="tracking-tighter">in One Place</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-md md:text-lg lg:text-xl text-muted-foreground max-w-2xl tracking-tighter"
          >
            Get instant access to top-tier software and content platforms with our all-in-one subscription. 
            Secure, affordable, and easy to manage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center"
          >
            <Link href="/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full gap-2">
                Get Started Now <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/plans" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">
                View Plans
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-8 text-sm text-muted-foreground pt-8"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-primary" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-primary" />
              <span>Secure Login</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-primary" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
