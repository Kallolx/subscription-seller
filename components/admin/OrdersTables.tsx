import { Badge } from "@/components/ui/Badge";
import { Eye, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PendingOrdersTable() {
  return (
    <div className="space-y-4 w-full min-w-0">
      <div>
        <h3 className="text-xl font-semibold tracking-tight">Pending Orders</h3>
        <p className="text-sm text-muted-foreground">Review and approve new subscription orders.</p>
      </div>
      <div className="rounded-xl bg-card border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-primary/5 text-muted-foreground">
              <tr>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Date</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">User</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Plan</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Price</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-primary/5 transition-colors">
                  <td className="py-4 px-6 whitespace-nowrap">Oct {12 + i}, 2024</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User size={14} />
                      </div>
                      <span className="font-medium">User {i}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">Pro Plan</td>
                  <td className="py-4 px-6 whitespace-nowrap font-medium">$49.00</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                      <Eye size={16} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function RecentOrdersTable() {
  const getStatus = (i: number) => {
    if (i % 3 === 0) return { label: 'Cancelled', className: 'bg-red-500/10 text-red-600' };
    if (i % 2 === 0) return { label: 'Completed', className: 'bg-green-500/10 text-green-600' };
    return { label: 'Pending', className: 'bg-yellow-500/10 text-yellow-600' };
  };

  return (
    <div className="space-y-4 w-full min-w-0">
      <div>
        <h3 className="text-xl font-semibold tracking-tight">Recent Orders</h3>
        <p className="text-sm text-muted-foreground">Track the latest activity and transaction status.</p>
      </div>
      <div className="rounded-xl bg-card border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
             <thead className="bg-primary/5 text-muted-foreground">
              <tr>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Date</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">User</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Plan</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Status</th>
                <th className="py-4 px-6 font-medium whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
               {[1, 2, 3, 4, 5].map((i) => {
                const status = getStatus(i);
                return (
                  <tr key={i} className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-6 whitespace-nowrap">Oct {10 + i}, 2024</td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center text-secondary-foreground">
                          <User size={14} />
                        </div>
                        <span className="font-medium">User {i + 5}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">Basic Plan</td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${status.className}`}>
                          {status.label}
                      </span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                        <Eye size={16} />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
