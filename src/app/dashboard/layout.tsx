
'use client';

import { Boxes, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-1 lg:grid-cols-1">
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0">
                <SheetHeader className="p-4 border-b">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 font-semibold"
                  onClick={closeSheet}
                >
                  <Boxes className="h-6 w-6 text-primary" />
                  <span className="">StockPilot</span>
                </Link>
              </div>
              <div className="flex-1" onClick={closeSheet}>
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4 py-4">
                  <MainNav />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1" />
          <UserNav />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
