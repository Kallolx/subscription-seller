import { Package, Globe, ShoppingCart, Users } from "lucide-react";

export function StatsMatrix() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Total Plans */}
      <div className="rounded-xl bg-card border border-gray-200 p-6 flex items-center gap-4">
        <div className="p-3 bg-blue-500/10 rounded-full text-blue-500 hidden md:block">
          <Package size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Total Plans</p>
          <h3 className="text-2xl font-bold">3</h3>
        </div>
      </div>

      {/* Total Platforms */}
      <div className="rounded-xl bg-card border border-gray-200 p-6 flex items-center gap-4">
        <div className="p-3 bg-green-500/10 rounded-full text-green-500 hidden md:block">
          <Globe size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Platforms</p>
          <h3 className="text-2xl font-bold">12</h3>
        </div>
      </div>

      {/* Total Orders */}
      <div className="rounded-xl bg-card border border-gray-200 p-6 flex items-center gap-4">
        <div className="p-3 bg-purple-500/10 rounded-full text-purple-500 hidden md:block">
          <ShoppingCart size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
          <h3 className="text-2xl font-bold">1,248</h3>
        </div>
      </div>

      {/* Total Users */}
      <div className="rounded-xl bg-card border border-gray-200 p-6 flex items-center gap-4">
        <div className="p-3 bg-orange-500/10 rounded-full text-orange-500 hidden md:block">
          <Users size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Total Users</p>
          <h3 className="text-2xl font-bold">843</h3>
        </div>
      </div>
    </div>
  );
}
