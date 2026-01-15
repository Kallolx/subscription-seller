"use client";

import { StatsCard } from "@/components/dashboard/StatsCard";
import { Package, Globe, ShoppingCart, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Admin Overview</h2>
        <p className="text-muted-foreground">Manage your subscription platform.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total Plans" value="3" icon={Package} color="text-blue-500" index={0} />
        <StatsCard title="Platforms" value="12" icon={Globe} color="text-green-500" index={1} />
        <StatsCard title="Total Orders" value="1,248" icon={ShoppingCart} color="text-purple-500" trend="12%" trendUp index={2} />
        <StatsCard title="Total Users" value="843" icon={Users} color="text-orange-500" trend="4%" trendUp index={3} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center font-bold text-xs">
                      U{i}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">User {i}</p>
                      <p className="text-xs text-muted-foreground">Pro Plan • $49.00</p>
                    </div>
                  </div>
                  <Badge variant={i === 1 ? 'secondary' : 'primary'}>
                    {i === 1 ? 'Pending' : 'Approved'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" variant="outline">
              <Package className="mr-2 h-4 w-4" /> Add New Package
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Globe className="mr-2 h-4 w-4" /> Add New Platform
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" /> Manage Users
            </Button>
             <div className="pt-4">
                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <Clock size={14} /> Pending Approvals
                </h4>
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-yellow-600">
                    3 orders waiting for approval
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
