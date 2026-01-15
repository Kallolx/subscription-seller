"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { User, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardEntry() {
  const router = useRouter();

  // In a real app, we would redirect based on user role here
  // useEffect(() => {
  //   if (isAdmin) router.push('/dashboard/admin');
  //   else router.push('/dashboard/user');
  // }, []);

  return (
    <div className="flex bg-background h-[80vh] items-center justify-center">
        <div className="grid gap-4 md:grid-cols-2 max-w-2xl w-full px-4">
            <Link href="/dashboard/user">
                <Card className="hover:border-primary transition-all cursor-pointer h-full">
                    <CardHeader className="text-center">
                        <div className="mx-auto h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-2 text-primary">
                            <User size={24} />
                        </div>
                        <CardTitle>User Dashboard</CardTitle>
                        <CardDescription>View your subscriptions and credentials</CardDescription>
                    </CardHeader>
                </Card>
            </Link>

            <Link href="/dashboard/admin">
                <Card className="hover:border-primary transition-all cursor-pointer h-full">
                    <CardHeader className="text-center">
                        <div className="mx-auto h-12 w-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-2 text-purple-600">
                            <ShieldCheck size={24} />
                        </div>
                        <CardTitle>Admin Dashboard</CardTitle>
                        <CardDescription>Manage users, plans, and orders</CardDescription>
                    </CardHeader>
                </Card>
            </Link>
        </div>
    </div>
  );
}
