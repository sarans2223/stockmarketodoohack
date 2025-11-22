
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

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

export default function ResetPasswordPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend logic for password reset will go here.
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
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" required />
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
