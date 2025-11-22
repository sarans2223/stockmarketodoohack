"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, PackageCheck, PackagePlus, Shuffle, SlidersHorizontal, History, Settings, Warehouse } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const routes = [
    {
      href: `/dashboard`,
      label: "Dashboard",
      active: pathname === `/dashboard`,
      icon: <Home className="h-4 w-4" />,
    },
    {
        type: 'heading',
        label: 'Operations'
    },
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
    {
        type: 'separator'
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
        type: 'separator'
    },
     {
        type: 'heading',
        label: 'Settings'
    },
    {
      href: `/dashboard/settings/warehouse`,
      label: "Warehouse",
      active: pathname.startsWith(`/dashboard/settings/warehouse`),
      icon: <Warehouse className="h-4 w-4" />,
    },
  ];

  return (
    <nav className={cn("flex flex-col space-y-1", className)} {...props}>
      {routes.map((route, index) => {
        if (route.type === 'heading') {
            return <h4 key={index} className="px-3 pt-4 pb-1 text-sm font-semibold text-muted-foreground/80">{route.label}</h4>
        }
        if (route.type === 'separator') {
            return <div key={index} className="py-2" />
        }
        return (
            <Link
            key={route.href}
            href={route.href}
            className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-muted/50",
                route.active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            )}
            >
            {route.icon}
            <span className="flex-1">{route.label}</span>
            {route.badge && <Badge variant={route.active ? "secondary" : "default"}>{route.badge}</Badge>}
            </Link>
        )
      })}
    </nav>
  );
}
