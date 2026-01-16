"use client";

import { StatsMatrix } from "@/components/admin/StatsMatrix";
import { QuickActions } from "@/components/admin/QuickActions";
import { PendingOrdersTable, RecentOrdersTable } from "@/components/admin/OrdersTables";
import { Footer } from "@/components/layout/Footer";

export default function AdminDashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Admin Overview</h2>
        <p className="text-muted-foreground">Manage your subscription platform.</p>
      </div>

      <StatsMatrix />
      
      <QuickActions />

      <div className="flex flex-col gap-8 w-full min-w-0">
        <PendingOrdersTable />
        <RecentOrdersTable />
      </div>

      <div className="pt-6 border-t border-border">
        <Footer />
      </div>
    </div>
  );
}
