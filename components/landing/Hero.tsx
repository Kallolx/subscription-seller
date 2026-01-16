"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe, Zap, Shield, Layers } from 'lucide-react';
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-18 md:py-32 lg:py-30">
      {/* Background Gradient */}
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-[40%] -right-[10%] w-[500px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
      
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

          <div className="relative">
             {/* Floating Icons */}
            {/* Left Side Icons - Equal Spacing */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-4 lg:-left-8 hidden md:block" // Top
            >
              <Image src="/images/udemy.svg" alt="Udemy" width={35} height={35} className="drop-shadow-lg" />
            </motion.div>
            <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
               className="absolute top-1/2 -translate-y-1/2 -left-10 lg:-left-16 hidden md:block" // Middle
            >
              <Image src="/images/netflix.svg" alt="Netflix" width={50} height={50} className="drop-shadow-lg" />
            </motion.div>
            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-12 -left-8 lg:-left-8 hidden md:block" // Bottom
            >
              <Image src="/images/coursera.svg" alt="Coursera" width={50} height={50} className="drop-shadow-lg" />
            </motion.div>

            {/* Right Side Icons - Equal Spacing */}
             <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-12 -right-4 lg:-right-8 hidden md:block" // Top
            >
              <Image src="/images/skillshare.svg" alt="Skillshare" width={50} height={50} className="drop-shadow-lg" />
            </motion.div>
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
               className="absolute top-1/2 -translate-y-1/2 -right-10 lg:-right-16 hidden md:block" // Middle
            >
              <Image src="/images/amazon-prime.svg" alt="Prime Video" width={50} height={50} className="drop-shadow-lg" />
            </motion.div>
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
               className="absolute -bottom-12 -right-8 lg:-right-8 hidden md:block" // Bottom
            >
              <Image src="/images/canva.svg" alt="Canva" width={50} height={50} className="drop-shadow-lg" />
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
          </div>

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
            className="flex flex-row gap-3 w-full max-w-md justify-center px-4 sm:px-0"
          >
            <Link href="/register" className="flex-1 sm:flex-none">
              <Button size="lg" className="w-full sm:w-auto gap-2 px-3 sm:px-8 whitespace-nowrap text-sm sm:text-base">
                Get Started <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/#plans" className="flex-1 sm:flex-none">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-3 sm:px-8 whitespace-nowrap text-sm sm:text-base">
                View Plans
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
