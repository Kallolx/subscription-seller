"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate register
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
      
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
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Enter your email below to encryption your account</CardDescription>
          </CardHeader>
          <form onSubmit={handleRegister}>
            <CardContent className="space-y-4">
              <Input type="text" placeholder="John Doe" label="Full Name" required />
              <Input type="email" placeholder="name@example.com" label="Email" required />
              <div className="relative">
                <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    label="Password" 
                    required 
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
                Create account
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
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
