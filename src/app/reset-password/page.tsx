
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
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
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function ResetPasswordPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const emailToReset = localStorage.getItem('emailToReset');
    if (!emailToReset) {
      setError('No user session found for password reset. Please start over.');
      // Redirect to forgot-password, as something went wrong
      setTimeout(() => router.push('/forgot-password'), 2000);
      return;
    }

    const storedUsers = localStorage.getItem('users');
    let users = storedUsers ? JSON.parse(storedUsers) : [];

    const userIndex = users.findIndex((user: any) => user.email === emailToReset);

    if (userIndex === -1) {
        setError('User not found. Please start over.');
        return;
    }

    // Update password
    users[userIndex].password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));
    
    // Clean up
    localStorage.removeItem('emailToReset');

    toast({
      title: 'Password Reset Successful!',
      description: 'You can now log in with your new password.',
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
            <ShieldCheck className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
          <CardDescription>
            Enter a new password for your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleResetPassword} className="space-y-4" suppressHydrationWarning>
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input 
                id="new-password" 
                type="password" 
                required 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
