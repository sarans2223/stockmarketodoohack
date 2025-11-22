
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, UserPlus } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const userExists = users.some((user: any) => user.email === email);
    if (userExists) {
      setError('An account with this email already exists.');
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    toast({
      title: 'Account Created Successfully!',
      description: 'Please log in with your new credentials.',
    });
    router.push('/');
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background p-4">
      <Button asChild variant="ghost" className="absolute left-4 top-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Login
        </Link>
      </Button>
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mb-4 inline-block rounded-lg bg-primary p-3 text-primary-foreground">
            <UserPlus className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>Enter your details to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateAccount} className="space-y-4" suppressHydrationWarning>
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Signup Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
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
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Role</Label>
              <RadioGroup defaultValue="staff" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="manager" id="r-manager" />
                  <Label htmlFor="r-manager">Inventory Manager</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="staff" id="r-staff" />
                  <Label htmlFor="r-staff">Warehouse Staff</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
