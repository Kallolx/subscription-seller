"use client";

import { useState } from "react";
import { Copy, Eye, EyeOff, ExternalLink, Shield, Diamond, Clock, Activity, CreditCard, Film, Music, Video, Zap, PenTool, Layout, Key, Cookie } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

// Mock Data
const platforms = [
  {
    id: 1,
    name: "Udemy Business",
    type: "cookies",
    url: "https://www.udemy.com",
    cookieData: "UdemyAuthToken=xyz123; SessionID=abc789;",
    email: "user@example.com", 
    icon: "/images/udemy.svg",
    iconSize: 30
  },
  {
    id: 2,
    name: "Coursera",
    type: "credentials",
    email: "alex.student@edu.com",
    password: "learningisfun",
    url: "https://www.coursera.org",
    icon: "/images/coursera.svg"
  },
  {
    id: 3,
    name: "Skillshare",
    type: "credentials",
    email: "design.pro@studio.com",
    password: "creativemindset",
    url: "https://www.skillshare.com",
    icon: "/images/skillshare.svg"
  },
  {
    id: 4,
    name: "Netflix Premium",
    type: "cookies",
    url: "https://www.netflix.com",
    cookieData: "nf_auth=secure_token_v2; SecureNetflixId=998877;",
    icon: "/images/netflix.svg"
  },
  {
    id: 5,
    name: "Prime Video",
    type: "cookies",
    url: "https://www.primevideo.com",
    cookieData: "at-main=amazon_token_secure; sess-at-main=...",
    icon: "/images/amazon-prime.svg"
  },
  {
    id: 6,
    name: "Disney+",
    type: "credentials",
    email: "movies@disney.com",
    password: "mickeymouse123",
    url: "https://www.disneyplus.com",
    icon: "/images/disney.svg"
  },
  {
    id: 7,
    name: "Canva Pro",
    type: "credentials",
    email: "designer@canva.com",
    password: "designanything",
    url: "https://www.canva.com",
    icon: "/images/canva.svg"
  },
];

export function UserDashboardContent() {
  const [activeTab, setActiveTab] = useState<'credentials' | 'cookies'>('credentials');

  const credentialsPlatforms = platforms.filter(p => p.type === 'credentials');
  const cookiesPlatforms = platforms.filter(p => p.type === 'cookies');

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">My Platforms</h2>
            <p className="text-muted-foreground mt-1">Access your accounts securely.</p>
          </div>

          <div className="bg-secondary/30 p-1.5 rounded-xl inline-flex self-start md:self-auto">
            {[
              { id: 'credentials', label: 'Credentials', icon: Key },
              { id: 'cookies', label: 'Cookies', icon: Cookie }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={clsx(
                  "relative px-4 py-2.5 text-sm font-medium transition-colors rounded-lg z-10 flex items-center gap-2",
                  activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary shadow-sm rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {activeTab === 'credentials' ? (
              credentialsPlatforms.map((platform) => (
                <CredentialCard key={platform.id} platform={platform} />
              ))
            ) : (
              cookiesPlatforms.map((platform) => (
                <CookieCard key={platform.id} platform={platform} />
              ))
            )}
            
            {activeTab === 'credentials' && credentialsPlatforms.length === 0 && (
                <div className="col-span-full py-12 text-center text-muted-foreground bg-secondary/20 rounded-xl border border-dashed border-border">
                    No credential-based platforms assigned.
                </div>
            )}
             {activeTab === 'cookies' && cookiesPlatforms.length === 0 && (
                <div className="col-span-full py-12 text-center text-muted-foreground bg-secondary/20 rounded-xl border border-dashed border-border">
                    No cookie-based platforms assigned.
                </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function CredentialCard({ platform }: { platform: any }) {
  const [showPassword, setShowPassword] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="rounded-xl bg-card border border-gray-200 p-6 hover:border-primary/30 transition-colors">
      <div className="flex flex-row items-center justify-between pb-4">
        <div className="flex items-center gap-4">
            <div className="text-primary">
                {typeof platform.icon === 'string' ? (
                   <Image src={platform.icon} alt={platform.name} width={40} height={40} className="object-contain" />
                ) : (
                   <platform.icon size={40} />
                )}
            </div>
            <div className="flex flex-col">
                <h4 className="text-lg font-semibold">{platform.name}</h4>
                 <a href={platform.url} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 mt-1">
                    {platform.url} <ExternalLink size={10} />
                 </a>
            </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Email / Username</label>
          <div className="relative group">
            <code className="block w-full bg-secondary/30 px-3 py-2 rounded-lg text-sm text-foreground/90 font-mono border border-border group-hover:border-primary/50 transition-colors">
              {platform.email}
            </code>
            <button 
                onClick={() => copyToClipboard(platform.email)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-background text-muted-foreground hover:text-primary opacity-0 group-hover:opacity-100 transition-all"
            >
                <Copy size={14} />
            </button>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Password</label>
           <div className="relative group">
            <code className="block w-full bg-secondary/30 px-3 py-2 rounded-lg text-sm text-foreground/90 font-mono border border-border group-hover:border-primary/50 transition-colors">
               {showPassword ? platform.password : '••••••••••••'}
            </code>
             <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                <button 
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-1.5 rounded-md hover:bg-background text-muted-foreground hover:text-primary"
                >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
                <button 
                    onClick={() => copyToClipboard(platform.password)}
                    className="p-1.5 rounded-md hover:bg-background text-muted-foreground hover:text-primary"
                >
                    <Copy size={14} />
                </button>
             </div>
          </div>
        </div>
        
        <div className="pt-2">
             <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm" onClick={() => window.open(platform.url, '_blank')}>
                Access Platform
             </Button>
        </div>
      </div>
    </div>
  );
}

function CookieCard({ platform }: { platform: any }) {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

  return (
    <div className="rounded-xl bg-card border border-gray-200 p-6 hover:border-primary/30 transition-colors">
      <div className="flex flex-row items-center justify-between pb-4">
        <div className="flex items-center gap-4">
            <div className="text-primary">
                {typeof platform.icon === 'string' ? (
                   <Image src={platform.icon} alt={platform.name} width={platform.iconSize || 40} height={platform.iconSize || 40} className="object-contain" />
                ) : (
                   <platform.icon size={40} />
                )}
            </div>
            <div className="flex flex-col">
                 <h4 className="text-lg font-semibold">{platform.name}</h4>
                 <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Shield size={10} className="text-green-500" /> Secure Access
                 </div>
            </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="rounded-lg bg-yellow-500/10 p-3 flex gap-2 items-start">
            <div className="mt-0.5">
                <Shield size={14} className="text-yellow-600" />
            </div>
            <p className="text-xs text-yellow-700 leading-relaxed">
                Requires browser extension.
            </p>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground">Access Method</label>
           <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/30 text-sm text-foreground/80">
                <div className="h-2 w-2 rounded-full bg-green-500 ml-1" />
                Extension Ready
           </div>
        </div>

        <div className="pt-2 flex gap-3">
             <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm" onClick={() => copyToClipboard(platform.cookieData)}>
                <Copy size={14} className="mr-2" /> Copy Data
             </Button>
        </div>
      </div>
    </div>
  );
}
