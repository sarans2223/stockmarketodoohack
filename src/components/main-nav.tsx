
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, PackageCheck, PackagePlus, SlidersHorizontal, History, Warehouse, User, LogOut, Building, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button";

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  
  const isOperationsActive = pathname.startsWith(`/dashboard/receipts`) ||
                             pathname.startsWith(`/dashboard/deliveries`) ||
                             pathname.startsWith(`/dashboard/adjustments`);

  const [isOperationsOpen, setIsOperationsOpen] = React.useState(isOperationsActive);


  const topLevelRoutes = [
    {
      href: `/dashboard`,
      label: "Dashboard",
      active: pathname === `/dashboard`,
      icon: <Home className="h-4 w-4" />,
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

  const otherRoutes = [
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
        type: 'separator' as const
    },
     {
        type: 'heading' as const,
        label: 'Settings'
    },
    {
      href: `/dashboard/settings/warehouse`,
      label: "Warehouse",
      active: pathname.startsWith(`/dashboard/settings/warehouse`),
      icon: <Warehouse className="h-4 w-4" />,
    },
    {
        type: 'separator' as const
    },
     {
        type: 'heading' as const,
        label: 'Profile'
    },
    {
        href: '/dashboard/profile',
        label: 'My Profile',
        active: pathname.startsWith('/dashboard/profile'),
        icon: <User className="h-4 w-4" />
    },
    {
        href: '/',
        label: 'Logout',
        active: false,
        icon: <LogOut className="h-4 w-4" />
    }
  ]

  return (
    <nav className={cn("flex flex-col space-y-1", className)} {...props}>
        {topLevelRoutes.map((route) => (
             <Link
                key={route.href}
                href={route.href}
                className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-muted/50",
                    route.active
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                >
                {route.icon}
                <span className="flex-1">{route.label}</span>
                {route.badge && <Badge variant={route.active ? "secondary" : "default"}>{route.badge}</Badge>}
            </Link>
        ))}

        <Collapsible open={isOperationsOpen} onOpenChange={setIsOperationsOpen}>
            <CollapsibleTrigger asChild>
                <Button variant="ghost" className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium transition-colors justify-start w-full h-auto hover:bg-muted/50",
                    isOperationsActive ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                    "data-[state=open]:text-foreground data-[state=open]:bg-muted/50"
                )}>
                    <Building className="h-4 w-4" />
                    <span className="flex-1 text-left">Operations</span>
                    <ChevronsUpDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOperationsOpen && "rotate-180")} />
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-1 pb-0 pl-7 space-y-1">
                {operationsRoutes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            "flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-medium transition-colors",
                            route.active
                            ? "bg-primary/20 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                        >
                        {route.icon}
                        <span className="flex-1">{route.label}</span>
                        {route.badge && <Badge variant={"default"}>{route.badge}</Badge>}
                    </Link>
                ))}
            </CollapsibleContent>
        </Collapsible>


      {otherRoutes.map((route, index) => {
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
