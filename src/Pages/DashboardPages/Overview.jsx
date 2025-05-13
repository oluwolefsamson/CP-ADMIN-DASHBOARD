import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Overview = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Revenue Card */}
        <div className="p-6 rounded-xl bg-card">
          {isLoading ? (
            <>
              <Skeleton className="h-5 w-[120px] mb-2" />
              <Skeleton className="h-8 w-[80px] mb-2" />
              <Skeleton className="h-4 w-[160px] mb-2" />
              <Skeleton className="h-4 w-[140px]" />
            </>
          ) : (
            <div className="space-y-2 rounded-lg">
              <h3 className="text-muted-foreground">Revenues</h3>
              <p className="text-2xl font-bold text-green-500">20%</p>
              <p className="text-sm text-muted-foreground">
                Increase compared to last week
              </p>
              <a className="text-sm text-primary hover:underline cursor-pointer">
                Revenues report →
              </a>
            </div>
          )}
        </div>

        {/* Lost Deals Card */}
        <div className="p-6 rounded-xl bg-card">
          {isLoading ? (
            <>
              <Skeleton className="h-5 w-[120px] mb-2" />
              <Skeleton className="h-8 w-[80px] mb-2" />
              <Skeleton className="h-4 w-[200px] mb-2" />
              <Skeleton className="h-4 w-[100px]" />
            </>
          ) : (
            <div className="space-y-2">
              <h3 className="text-muted-foreground">Lost deals</h3>
              <p className="text-2xl font-bold text-red-500">5%</p>
              <p className="text-sm text-muted-foreground">
                You closed 95 out of 100 deals
              </p>
              <a className="text-sm text-primary hover:underline cursor-pointer">
                All deals →
              </a>
            </div>
          )}
        </div>

        {/* Quarter Goal Card */}
        <div className="p-6 rounded-xl bg-card">
          {isLoading ? (
            <>
              <Skeleton className="h-5 w-[120px] mb-2" />
              <Skeleton className="h-8 w-[80px] mb-2" />
              <Skeleton className="h-4 w-[100px]" />
            </>
          ) : (
            <div className="space-y-2">
              <h3 className="text-muted-foreground">Quarter goal</h3>
              <p className="text-2xl font-bold text-blue-500">78%</p>
              <a className="text-sm text-primary hover:underline cursor-pointer">
                All goals →
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 p-6 rounded-xl bg-card">
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-6 w-[120px]" />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-3 w-[150px]" />
                </div>
              ))}
              <Skeleton className="h-4 w-[100px]" />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold">Customers</h3>
                <h4 className="text-md font-normal">Sort by newest V</h4>
              </div>

              <div className="space-y-7">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/40?img=1"
                      alt="Chris Bonds"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">Chris Bonds</p>
                      <p className="text-sm text-muted-foreground">
                        Supermarket Vibrovia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/40?img=2"
                      alt="Kelly Johnson"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">Kelly Johnson</p>
                      <p className="text-sm text-muted-foreground">
                        Oasis Organic Inc.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/40?img=3"
                      alt="Kimberly Harry"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">Kimberly Harry</p>
                      <p className="text-sm text-muted-foreground">
                        New York Planet Trails
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.pravatar.cc/40?img=4"
                      alt="James Wilson"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">James Wilson</p>
                      <p className="text-sm text-muted-foreground">Warrant</p>
                    </div>
                  </div>
                </div>
              </div>

              <a className="text-sm text-primary hover:underline cursor-pointer">
                All customers →
              </a>
            </div>
          )}
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="p-6 rounded-xl bg-card">
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-6 w-[160px]" />
                <Skeleton className="h-4 w-[80px]" />
                {[...Array(8)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Growth</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm">Yearly</div>
                  <div className="text-sm text-right">50%</div>
                  <div className="text-sm">10%</div>
                  <div className="text-sm text-right">20%</div>
                  <div className="text-sm">30%</div>
                  <div className="text-sm text-right">40%</div>
                  <div className="text-sm">60%</div>
                  <div className="text-sm text-right">80%</div>
                  <div className="text-sm">100%</div>
                  <div className="text-sm text-right">2004</div>
                  <div className="text-sm">3001</div>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-4 w-full ">
            <div className="p-6 rounded-xl bg-card flex-1">
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-6 w-[120px]" />
                  <Skeleton className="h-4 w-[80px]" />
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">Top month</h3>
                  </div>
                  <div className="space-y-0.5">
                    <p className=" text-green-600 text-2xl font-bold">
                      November{" "}
                    </p>
                    <p className="text-md font-medium text-green-400">2025</p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 rounded-xl bg-card flex-1">
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-6 w-[120px]" />
                  <Skeleton className="h-4 w-[80px]" />
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">Top year</h3>
                  </div>
                  <div className="space-y-0.5">
                    <p className=" font-bold text-2xl text-green-600">2024</p>
                    <p className="text-sm text-green-400">96k sold so far</p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 rounded-xl bg-card flex-1">
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-6 w-[120px]" />
                  <Skeleton className="h-4 w-[80px]" />
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">Top buyer</h3>
                  </div>
                  <div className="space-y-0.5">
                    <img
                      src="https://i.pravatar.cc/100?img=5"
                      alt="Top buyer"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <p className="font-medium text-md">Oluwole Samson</p>
                    <p className="text-sm">CPW organic inc.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

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
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
