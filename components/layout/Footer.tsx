"use client";

import Link from 'next/link';
import { Zap, Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  product: [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#plans' },
    { name: 'Home', href: '/' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Security', href: '/security' },
  ],
  contact: [ 
    { icon: Mail, text: "support@mastertoolsbd.com", href: "mailto:support@mastertoolsbd.com" },
    { icon: Phone, text: "+880 1878-720467", href: "tel:+8801878720467" },
    { icon: MapPin, text: "Dhaka, Bangladesh", href: "#" }
  ]
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
           
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <Zap size={20} fill="currentColor" />
              </div>
              <span className="font-bold text-xl tracking-tighter">MasterTools BD</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-6">
              The ultimate subscription management platform for individuals and teams. Secure, simple, and efficient.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="font-semibold mb-4">Legal</h3> 
             <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
             <ul className="space-y-3">
              {footerLinks.contact.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <item.icon size={16} />
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MasterTools BD. All rights reserved.
          </p>
          
          <Link 
            href="https://kallol.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors border border-transparent hover:border-primary/20 group"
          >
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Developed By <span className="text-foreground font-semibold">Kamrul Hasan</span></span>
            <div className="relative h-8 w-8 rounded-full overflow-hidden border border-border group-hover:border-primary transition-colors">
                <Image src="/images/me.webp" alt="Kamrul Hasan" fill className="object-cover" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
