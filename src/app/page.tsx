
'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Boxes, AlertCircle } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [users, setUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    // This check ensures localStorage is accessed only on the client side.
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const foundUser = users.find((user: any) => user.email === email);

    if (!foundUser) {
      setError('Account not found. Please sign up.');
    } else if (foundUser.password !== password) {
      setError('Invalid credentials. Please try again.');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4" suppressHydrationWarning>
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="text-center">
            <div className="inline-block bg-primary text-primary-foreground p-3 rounded-lg mb-4">
                <Boxes className="h-8 w-8" />
            </div>
          <CardTitle className="text-2xl font-bold">StockPilot</CardTitle>
          <CardDescription>Enter your credentials to access your inventory</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Login Failed</AlertTitle>
                    <AlertDescription>
                        {error}
                    </AlertDescription>
                </Alert>
            )}
            <div className="space-y-2" suppressHydrationWarning>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="manager@example.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2" suppressHydrationWarning>
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
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
