"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Boxes, Home, Package, PackageCheck, PackagePlus, Shuffle, SlidersHorizontal } from "lucide-react";

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
      href: `/dashboard/products`,
      label: "Products",
      active: pathname === `/dashboard/products`,
      icon: <Package className="h-4 w-4" />,
    },
    {
      href: `/dashboard/receipts`,
      label: "Receipts",
      active: pathname === `/dashboard/receipts`,
      icon: <PackagePlus className="h-4 w-4" />,
      badge: "12",
    },
    {
      href: `/dashboard/deliveries`,
      label: "Deliveries",
      active: pathname === `/dashboard/deliveries`,
      icon: <PackageCheck className="h-4 w-4" />,
      badge: "8",
    },
    {
      href: `/dashboard/transfers`,
      label: "Transfers",
      active: pathname === `/dashboard/transfers`,
      icon: <Shuffle className="h-4 w-4" />,
    },
    {
      href: `/dashboard/adjustments`,
      label: "Adjustments",
      active: pathname === `/dashboard/adjustments`,
      icon: <SlidersHorizontal className="h-4 w-4" />,
    },
  ];

  return (
    <nav className={cn("flex flex-col space-y-2", className)} {...props}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            route.active
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted/50"
          )}
        >
          {route.icon}
          <span className="flex-1">{route.label}</span>
          {route.badge && <Badge variant={route.active ? "secondary" : "default"}>{route.badge}</Badge>}
        </Link>
      ))}
    </nav>
  );
}
