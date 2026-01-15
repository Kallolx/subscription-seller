"use client";

import { useState } from "react";
import { Copy, Eye, EyeOff, ExternalLink, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

// Mock Data
const platforms = [
  {
    id: 1,
    name: "Udemy Business",
    type: "cookies",
    url: "https://www.udemy.com",
    cookieData: "Access via Extension",
  },
  {
    id: 2,
    name: "Coursera",
    type: "credentials",
    email: "user@example.com",
    password: "securepassword123",
    url: "https://www.coursera.org",
  },
  {
    id: 3,
    name: "Skillshare",
    type: "credentials",
    email: "skill@example.com",
    password: "anotherpassword",
    url: "https://www.skillshare.com",
  },
];

export function UserDashboardContent() {
  const [activeTab, setActiveTab] = useState<'credentials' | 'cookies'>('credentials');

  const credentialsPlatforms = platforms.filter(p => p.type === 'credentials');
  const cookiesPlatforms = platforms.filter(p => p.type === 'cookies');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">My Platforms</h2>
        <p className="text-muted-foreground">Access your subscribed platforms.</p>
      </div>

      <div className="flex space-x-1 rounded-xl bg-secondary p-1 w-full md:w-auto self-start inline-flex">
        {(['credentials', 'cookies'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              w-full md:w-40 rounded-lg py-2.5 text-sm font-medium leading-5
              ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
              ${
                activeTab === tab
                  ? 'bg-background shadow text-foreground'
                  : 'text-muted-foreground hover:bg-white/[0.12] hover:text-foreground'
              }
              capitalize transition-all duration-200
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function CredentialCard({ platform }: { platform: any }) {
  const [showPassword, setShowPassword] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Toast notification could go here
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col">
            <CardTitle className="text-lg">{platform.name}</CardTitle>
             <a href={platform.url} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:underline flex items-center gap-1 mt-1">
                {platform.url} <ExternalLink size={10} />
             </a>
        </div>
        <Badge variant="outline">Login</Badge>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground">Email / Username</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-secondary px-2 py-1.5 rounded text-sm overflow-hidden text-ellipsis">
              {platform.email}
            </code>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => copyToClipboard(platform.email)}>
              <Copy size={14} />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground">Password</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-secondary px-2 py-1.5 rounded text-sm overflow-hidden text-ellipsis font-mono">
              {showPassword ? platform.password : '••••••••••••'}
            </code>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => copyToClipboard(platform.password)}>
              <Copy size={14} />
            </Button>
          </div>
        </div>
        
        <div className="pt-2">
             <Button className="w-full" size="sm" onClick={() => window.open(platform.url, '_blank')}>
                Open {platform.name}
             </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function CookieCard({ platform }: { platform: any }) {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col">
             <CardTitle className="text-lg">{platform.name}</CardTitle>
             <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <Shield size={10} className="text-green-500" /> Secure Access
             </div>
        </div>
        <Badge variant="secondary">Cookies</Badge>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="rounded-lg bg-yellow-500/10 border border-yellow-500/20 p-3">
            <p className="text-xs text-yellow-600">
                This platform requires a browser extension to access. Do not share the cookie data.
            </p>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground">Access Method</label>
          <div className="flex items-center gap-2">
             <Button variant="outline" className="w-full justify-start text-muted-foreground" disabled>
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                Extension Ready
             </Button>
          </div>
        </div>

        <div className="pt-2 flex gap-2">
             <Button className="flex-1" size="sm" onClick={() => copyToClipboard(platform.cookieData)}>
                <Copy size={14} className="mr-2" /> Copy Data
             </Button>
             <Button variant="secondary" className="flex-1" size="sm">
                 <text>Extension</text>
             </Button>
        </div>
      </CardContent>
    </Card>
  );
}
