
'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Boxes } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Your teammate can add authentication logic here.
    router.push('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="text-center">
            <div className="inline-block bg-primary text-primary-foreground p-3 rounded-lg mb-4">
                <Boxes className="h-8 w-8" />
            </div>
          <CardTitle className="text-2xl font-bold">StockPilot</CardTitle>
          <CardDescription>Enter your credentials to access your inventory</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4" suppressHydrationWarning>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="manager@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
