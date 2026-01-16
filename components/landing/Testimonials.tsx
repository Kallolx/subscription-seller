"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Developer",
    content: "This platform has completely transformed how we manage our team's subscriptions. The unified dashboard is a game-changer for productivity.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Lead",
    content: "Incredible value for money. We saved over 40% on our monthly software costs by switching to MasterTools. Highly recommended!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Freelance Designer",
    content: "As a freelancer, managing multiple tools was a nightmare. Now I have everything in one place. The UI is stunning and easy to use.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Startup Founder",
    content: "Security was our main concern, but the credential management is top-notch. It's the perfect solution for growing teams.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Product Manager",
    content: "The customer support is outstanding, and the platform uptime is perfect. It's reliable, fast, and exactly what we needed.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
  },
  {
    id: 6,
    name: "James Taylor",
    role: "DevOps Engineer",
    content: "Simple, efficient, and powerful. The API integration capabilities are great for automating our onboarding process.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
          Trusted by <span className="gradient-text">Developers & Businesses</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join thousands of satisfied users who have streamlined their workflow with our premium subscription management platform.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex">
          <motion.div
            className="flex gap-6 px-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[350px] md:w-[400px] flex-shrink-0 p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative group"
              >
                <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <Quote size={40} fill="currentColor" />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-yellow-500" fill="currentColor" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden border border-border">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
