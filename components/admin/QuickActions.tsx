"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { 
  Plus, Layers, Globe, Key, Cookie, Grid, Tag, Users, ShoppingBag, 
  UserCog, FileKey, FileCode, Archive, Database, BarChart, Video, 
  Smartphone, Bell, KeyRound, Trash2, Handshake, Link as LinkIcon, Copy, ChevronDown, ChevronUp
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import clsx from "clsx";

const actions = [
  { label: "Create New Plan", icon: Plus, href: "/admin/plans/new" },
  { label: "Manage Plans", icon: Layers, href: "/admin/plans" },
  { label: "Manage Platforms", icon: Globe, href: "/admin/platforms" },
  { label: "Manage Credentials", icon: Key, href: "/admin/credentials" },
  { label: "Manage Cookies", icon: Cookie, href: "/admin/cookies" },
  { label: "Manage Slots", icon: Grid, href: "/admin/slots" },
  { label: "Manage Coupons", icon: Tag, href: "/admin/coupons" },
  { label: "Manage Users", icon: Users, href: "/admin/users" },
  { label: "All Orders", icon: ShoppingBag, href: "/admin/orders" },
  { label: "Single User Credentials", icon: UserCog, href: "/admin/user-credentials" },
  { label: "Single User Cookies", icon: FileCode, href: "/admin/user-cookies" },
  { label: "Draft Credential Platform", icon: FileKey, href: "/admin/draft-credentials" },
  { label: "Draft Cookie Platform", icon: Database, href: "/admin/draft-cookies" },
  { label: "Bulk User Management", icon: Users, href: "/admin/bulk-users" },
  { label: "Bulk Draft Management", icon: Archive, href: "/admin/bulk-drafts" },
  { label: "Coupon Sales Report", icon: BarChart, href: "/admin/reports/coupons" },
  { label: "Manage Tutorials", icon: Video, href: "/admin/tutorials" },
  { label: "Manage Mobile Tutorials", icon: Smartphone, href: "/admin/mobile-tutorials" },
  { label: "Notification", icon: Bell, href: "/admin/notifications" },
  { label: "Manage API Tokens", icon: KeyRound, href: "/admin/api-tokens" },
  { label: "Deleted Plan Archive", icon: Trash2, href: "/admin/archive" },
  { label: "Sponsors & Partners", icon: Handshake, href: "/admin/partners" },
  { label: "Manage Quick Links", icon: LinkIcon, href: "/admin/quick-links" },
  { label: "Copy Button Visibility", icon: Copy, href: "/admin/settings/copy-button" },
];

export function QuickActions() {
  const [expanded, setExpanded] = useState(false);
  
  // Show 12 by default (Desktop view), but hide excess on mobile via CSS
  const displayedActions = expanded ? actions : actions.slice(0, 12);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold tracking-tight">Quick Actions</h3>
        <p className="text-sm text-muted-foreground">Manage all your modules and settings from one place.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {displayedActions.map((action, index) => (
          <Link 
            key={index} 
            href={action.href}
            className={clsx(!expanded && index >= 8 && "hidden lg:block")}
          >
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-gray-200 hover:bg-primary/5 transition-all duration-200 h-32 text-center gap-3 cursor-pointer group">
              <div className="p-2.5 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-200">
                <action.icon size={22} />
              </div>
              <span className="text-sm font-medium leading-tight text-foreground/80">{action.label}</span>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="flex justify-center pt-2">
        <Button 
          variant="outline" 
          onClick={() => setExpanded(!expanded)}
          className="gap-2"
        >
          {expanded ? (
            <>
              Show Less <ChevronUp size={16} />
            </>
          ) : (
            <>
              See More Tools <ChevronDown size={16} />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
