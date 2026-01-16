"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-secondary/30 relative overflow-hidden">
      {/* Decorative Background - Consistent with Login */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 text-center px-4"
      >
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
              <Zap size={24} fill="currentColor" />
            </div>
            <span className="font-bold text-2xl tracking-tighter">MasterTools BD</span>
          </Link>
        </div>

        <div className="bg-card/90 backdrop-blur-sm border border-border/50 shadow-xl rounded-2xl p-12 max-w-lg mx-auto space-y-8">
           <div className="flex flex-col items-center gap-4">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
                  <AlertTriangle size={40} />
              </div>
              <h1 className="text-4xl font-bold tracking-tight">Page Not Found</h1>
              <p className="text-muted-foreground text-lg">
                The page you are looking for doesn't exist or has been moved.
              </p>
           </div>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button className="w-full sm:w-auto gap-2" size="lg">
                    <Home size={18} />
                    Go back home
                </Button>
              </Link>
           </div>
        </div>
        
        <div className="mt-8 text-sm text-muted-foreground">
            Error Code: 404
        </div>
      </motion.div>
    </div>
  );
}
