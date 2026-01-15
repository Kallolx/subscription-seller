"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  color?: string;
  index?: number;
}

export function StatsCard({ title, value, icon: Icon, trend, trendUp, color = "text-primary", index = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          <Icon className={`h-4 w-4 ${color}`} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          {trend && (
            <p className={`text-xs ${trendUp ? 'text-green-500' : 'text-red-500'} flex items-center mt-1`}>
              {trendUp ? '+' : '-'}{trend} from last month
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
