"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals',
    price: '$29',
    duration: '/month',
    features: ['Access to 5 Platforms', 'Standard Support', 'Direct Login Access', 'Browser Extension'],
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Best for power users',
    price: '$49',
    duration: '/month',
    features: ['Access to 15 Platforms', 'Priority Support', 'Direct Login & Cookies', 'Browser Extension', 'Early Access to New Tools'],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For teams and agencies',
    price: '$99',
    duration: '/month',
    features: ['All Platforms Included', '24/7 Dedicated Support', 'Multi-User Access', 'API Access', 'Custom Platform Request'],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="plans" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or cancel at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`relative h-full flex flex-col ${plan.popular ? 'border-primary ring-1 ring-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="primary" className="px-3 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.duration}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-primary" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/register?plan=${plan.name.toLowerCase()}" className="w-full">
                    <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                      Choose {plan.name}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
