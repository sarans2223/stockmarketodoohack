
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, PackageCheck, PackagePlus, SlidersHorizontal, History, Warehouse, User, LogOut, ChevronDown, PlusCircle, Map, Shapes, Repeat } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const isOperationsActive = pathname.startsWith('/dashboard/receipts') || pathname.startsWith('/dashboard/deliveries') || pathname.startsWith('/dashboard/adjustments');
  const [isOperationsOpen, setIsOperationsOpen] = React.useState(isOperationsActive);

  const isDashboardActive = pathname.startsWith('/dashboard/admin') || pathname === '/dashboard';
  const [isDashboardOpen, setIsDashboardOpen] = React.useState(isDashboardActive);

  const isSettingsActive = pathname.startsWith('/dashboard/settings');
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(isSettingsActive);

  const dashboardRoutes = [
    {
      href: `/dashboard`,
      label: "Overview",
      active: pathname === `/dashboard`,
      icon: <Home className="h-4 w-4" />,
    },
    {
      href: `/dashboard/admin/create-product`,
      label: "Create Products",
      active: pathname.startsWith(`/dashboard/admin/create-product`),
      icon: <PlusCircle className="h-4 w-4" />,
    },
    {
      href: `/dashboard/admin/stock-availability`,
      label: "Stocks Availability",
      active: pathname.startsWith(`/dashboard/admin/stock-availability`),
      icon: <Map className="h-4 w-4" />,
    },
    {
      href: `/dashboard/admin/product-categories`,
      label: "Product Categories",
      active: pathname.startsWith(`/dashboard/admin/product-categories`),
      icon: <Shapes className="h-4 w-4" />,
    },
    {
      href: `/dashboard/admin/reordering-rules`,
      label: "Reordering Rules",
      active: pathname.startsWith(`/dashboard/admin/reordering-rules`),
      icon: <Repeat className="h-4 w-4" />,
    },
  ];

  const operationsRoutes = [
    {
      href: `/dashboard/receipts`,
      label: "Receipts",
      active: pathname.startsWith(`/dashboard/receipts`),
      icon: <PackagePlus className="h-4 w-4" />,
      badge: "12",
    },
    {
      href: `/dashboard/deliveries`,
      label: "Delivery Orders",
      active: pathname.startsWith(`/dashboard/deliveries`),
      icon: <PackageCheck className="h-4 w-4" />,
      badge: "8",
    },
    {
      href: `/dashboard/adjustments`,
      label: "Inventory Adjustment",
      active: pathname.startsWith(`/dashboard/adjustments`),
      icon: <SlidersHorizontal className="h-4 w-4" />,
    },
  ];

  const settingsRoutes = [
    {
      href: `/dashboard/settings/warehouse`,
      label: "Warehouse",
      active: pathname.startsWith(`/dashboard/settings/warehouse`),
      icon: <Warehouse className="h-4 w-4" />,
    },
  ];

   const bottomRoutes = [
    {
        type: 'separator' as const
    },
    {
      href: `/dashboard/move-history`,
      label: "Move History",
      active: pathname.startsWith(`/dashboard/move-history`),
      icon: <History className="h-4 w-4" />,
    },
    {
      href: `/dashboard/products`,
      label: "Products",
      active: pathname === `/dashboard/products`,
      icon: <Package className="h-4 w-4" />,
    },
    {
        href: '/dashboard/profile',
        label: 'My Profile',
        active: pathname.startsWith('/dashboard/profile'),
        icon: <User className="h-4 w-4" />
    },
    {
        type: 'separator' as const
    },
    {
        href: '/',
        label: 'Logout',
        active: false,
        icon: <LogOut className="h-4 w-4" />
    }
  ]

  React.useEffect(() => {
    setIsOperationsOpen(isOperationsActive);
  }, [pathname, isOperationsActive]);
  
  React.useEffect(() => {
    setIsDashboardOpen(isDashboardActive);
  }, [pathname, isDashboardActive]);

  React.useEffect(() => {
    setIsSettingsOpen(isSettingsActive);
  }, [pathname, isSettingsActive]);


  return (
    <nav className={cn("flex flex-col space-y-1", className)} {...props}>
      <div>
        <button
          onClick={() => setIsDashboardOpen(!isDashboardOpen)}
          className={cn(
            "flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium transition-colors",
            isDashboardActive
              ? "text-foreground bg-muted/60"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          <span className="font-semibold text-muted-foreground/80">Dashboard</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-muted-foreground transition-transform",
              isDashboardOpen && "rotate-180"
            )}
          />
        </button>
        {isDashboardOpen && (
          <div className="mt-1 flex flex-col space-y-1 pl-4">
            {dashboardRoutes.map((route) => (
               <Link
                key={route.href}
                href={route.href}
                className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium transition-colors",
                    route.active
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
                >
                {route.icon}
                <span className="flex-1">{route.label}</span>
                {'badge' in route && route.badge && <Badge variant={route.active ? "secondary" : "default"}>{route.badge}</Badge>}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => setIsOperationsOpen(!isOperationsOpen)}
          className={cn(
            "flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium transition-colors",
            isOperationsActive
              ? "text-foreground bg-muted/60"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          <span className="font-semibold text-muted-foreground/80">Operations</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-muted-foreground transition-transform",
              isOperationsOpen && "rotate-180"
            )}
          />
        </button>
        {isOperationsOpen && (
          <div className="mt-1 flex flex-col space-y-1 pl-4">
            {operationsRoutes.map((route) => (
               <Link
                key={route.href}
                href={route.href}
                className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium transition-colors",
                    route.active
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
                >
                {route.icon}
                <span className="flex-1">{route.label}</span>
                {'badge' in route && route.badge && <Badge variant={route.active ? "secondary" : "default"}>{route.badge}</Badge>}
              </Link>
            ))}
          </div>
        )}
      </div>
      
      <div>
        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className={cn(
            "flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium transition-colors",
            isSettingsActive
              ? "text-foreground bg-muted/60"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          <span className="font-semibold text-muted-foreground/80">Settings</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-muted-foreground transition-transform",
              isSettingsOpen && "rotate-180"
            )}
          />
        </button>
        {isSettingsOpen && (
          <div className="mt-1 flex flex-col space-y-1 pl-4">
            {settingsRoutes.map((route) => (
                <Link
                key={route.href}
                href={route.href}
                className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium transition-colors",
                    route.active
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
                >
                {route.icon}
                <span className="flex-1">{route.label}</span>
                </Link>
            ))}
          </div>
        )}
      </div>

      {bottomRoutes.map((route, index) => {
        if (route.type === 'separator') {
            return <div key={index} className="py-2" />
        }
        return (
            <Link
            key={route.href}
            href={route.href}
            className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium transition-colors",
                route.active
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
            >
            {route.icon}
            <span className="flex-1">{route.label}</span>
            {'badge' in route && route.badge && <Badge variant={route.active ? "secondary" : "default"}>{route.badge}</Badge>}
            </Link>
        )
      })}
    </nav>
  );
}
