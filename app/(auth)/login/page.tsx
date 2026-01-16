"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Copy, X, Check, User, Shield, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showDemoToast, setShowDemoToast] = useState(true);

  // Demo Credentials
  const credentials = {
    user: { email: "kallol.user@gmail.com", pass: "password123", role: "User" },
    admin: { email: "kallol.admin@gmail.com", pass: "password123", role: "Admin" }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === credentials.admin.email) {
       router.push("/dashboard/admin");
    } else {
       // Default to user dashboard for specific user email or any other input
       router.push("/dashboard/user");
    }
    
    setLoading(false);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-secondary/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-4 z-10 -mt-32"
      >
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
              <Zap size={24} fill="currentColor" />
            </div>
            <span className="font-bold text-2xl tracking-tighter">MasterTools BD</span>
          </Link>
        </div>

        <Card className="border-border/50 shadow-xl backdrop-blur-sm bg-card/90">
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <Input 
                type="email" 
                placeholder="name@example.com" 
                label="Email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    label="Password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[34px] text-muted-foreground hover:text-foreground transition-colors"
                >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full" isLoading={loading}>
                Sign In
              </Button>


              <div className="w-full relative my-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="w-full flex flex-col gap-3">
                <Button variant="outline" type="button" className="w-full gap-2">
                  <Image src="/images/google.svg" alt="Google" width={20} height={20} />
                  Log in with Google
                </Button>
                <Button variant="outline" type="button" className="w-full gap-2">
                  <Image src="/images/microsoft.svg" alt="Microsoft" width={20} height={20} />
                  Log in with Microsoft
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/register" className="text-primary hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </motion.div>

      {/* Demo Credentials Toast */}
      <AnimatePresence>
        {showDemoToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-80 bg-background/95 backdrop-blur shadow-2xl rounded-xl border border-primary/20 overflow-hidden"
          >
            <div className="bg-primary/5 px-4 py-3 border-b border-primary/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Demo Access</span>
                </div>
                <button onClick={() => setShowDemoToast(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                    <X size={14} />
                </button>
            </div>
            <div className="p-4 space-y-4">
                <CredentialRow 
                    label="User Account" 
                    email={credentials.user.email} 
                    pass={credentials.user.pass} 
                    icon={User}
                    color="text-blue-500 bg-blue-500/10"
                />
                <CredentialRow 
                    label="Admin Account" 
                    email={credentials.admin.email} 
                    pass={credentials.admin.pass} 
                    icon={Shield}
                    color="text-purple-500 bg-purple-500/10"
                />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CredentialRow({ label, email, pass, icon: Icon, color }: { label: string, email: string, pass: string, icon: any, color: string }) {
    const [copied, setCopied] = useState<null | 'email' | 'pass'>(null);

    const handleCopy = (text: string, type: 'email' | 'pass') => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <div className={`p-1 rounded-md ${color}`}>
                    <Icon size={12} />
                </div>
                {label}
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-2">
                <button 
                    onClick={() => handleCopy(email, 'email')}
                    className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-secondary/50 hover:bg-secondary text-xs text-left transition-colors border border-transparent hover:border-border group"
                >
                    <span className="truncate max-w-[140px] text-foreground/80 font-mono">{email}</span>
                    {copied === 'email' ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="opacity-0 group-hover:opacity-50" />}
                </button>
                <button 
                    onClick={() => handleCopy(pass, 'pass')}
                    className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-secondary/50 hover:bg-secondary text-xs text-left transition-colors border border-transparent hover:border-border w-24 group"
                >
                    <span className="truncate text-foreground/80 font-mono">pass...</span>
                    {copied === 'pass' ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="opacity-0 group-hover:opacity-50" />}
                </button>
            </div>
        </div>
    )
}
