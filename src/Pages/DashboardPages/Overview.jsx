import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Overview = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        {isLoading ? (
          <Skeleton className="h-8 w-[200px]" />
        ) : (
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        )}
        <div className="flex gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="p-6 rounded-xl bg-card">
            {isLoading ? (
              <>
                <Skeleton className="h-5 w-[120px] mb-2" />
                <Skeleton className="h-8 w-[80px] mb-2" />
                <Skeleton className="h-4 w-[160px]" />
              </>
            ) : (
              <div className="space-y-2">
                <h3 className="text-muted-foreground">Total Users</h3>
                <p className="text-2xl font-bold">1,234</p>
                <p className="text-sm text-green-500">↑ 12% from last month</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Chart Area */}
      <div className="p-6 rounded-xl bg-card">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-6 w-[250px] mb-4" />
            <Skeleton className="h-80 w-full rounded-lg" />
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
            <div className="h-80 bg-muted rounded-lg" />
          </div>
        )}
      </div>

      {/* Recent Activity Section */}
      <div className="p-6 rounded-xl bg-card">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-6 w-[200px] mb-4" />
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-full rounded-lg" />
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            {/* Actual activity content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
