"use client";

import { useState } from "react";
import { Bell, Search, Zap, User, Settings, LogOut, UserCircle } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="h-16 border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-foreground block md:hidden lg:block">MasterTools BD</span>
          </Link>

          <div className="w-96 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search..." 
                className="pl-9 bg-secondary/50 border-transparent focus:bg-background focus:border-input"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
          </Button>
          
          <div className="relative">
            <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-secondary/80"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
                <div className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center">
                    <UserCircle size={24} className="text-foreground" />
                </div>
            </Button>

            {isProfileOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)} />
                    <div className="absolute right-0 top-12 w-56 rounded-xl border border-gray-200 bg-card shadow-lg z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-4 py-2 border-b border-border mb-2">
                            <p className="font-medium text-sm">Alexander Doe</p>
                            <p className="text-xs text-muted-foreground">alex@example.com</p>
                        </div>
                        
                        <div className="space-y-1">
                            <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-secondary/50 hover:text-foreground flex items-center gap-2 transition-colors">
                                <User size={16} /> Profile
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-secondary/50 hover:text-foreground flex items-center gap-2 transition-colors">
                                <Settings size={16} /> Settings
                            </button>
                            <div className="border-t border-border my-1 pt-1">
                                <button 
                                    onClick={() => router.push('/login')}
                                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 hover:text-red-600 flex items-center gap-2 transition-colors"
                                >
                                    <LogOut size={16} /> Log out
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
