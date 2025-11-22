<<<<<<< HEAD

=======
>>>>>>> 8d587d1 (if i give forgot password and give send otp there one page should be ins)
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
<<<<<<< HEAD
import { ArrowLeft, ShieldQuestion } from 'lucide-react';
import * as React from 'react';
=======
import { ArrowLeft, ShieldCheck } from 'lucide-react';
>>>>>>> 8d587d1 (if i give forgot password and give send otp there one page should be ins)

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
<<<<<<< HEAD
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function VerifyOtpPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [otp, setOtp] = React.useState('');
  const [error, setError] = React.useState('');

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // For demonstration, we'll accept any 6-digit OTP.
    // In a real application, you would verify this against a server-side value.
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      setError('Please enter a valid 6-digit OTP.');
      return;
    }
    
    // OTP is considered valid, proceed to password reset
    toast({
        title: 'OTP Verified',
        description: 'You can now reset your password.',
    });
=======

export default function VerifyOtpPage() {
  const router = useRouter();

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to verify OTP will go here.
    // For now, we'll just redirect to the reset password page.
>>>>>>> 8d587d1 (if i give forgot password and give send otp there one page should be ins)
    router.push('/reset-password');
  };

  return (
<<<<<<< HEAD
    <div className="relative flex min-h-screen items-center justify-center bg-background p-4" suppressHydrationWarning>
=======
    <div className="relative flex min-h-screen items-center justify-center bg-background p-4">
>>>>>>> 8d587d1 (if i give forgot password and give send otp there one page should be ins)
      <Button asChild variant="ghost" className="absolute left-4 top-4">
        <Link href="/forgot-password">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </Button>
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="text-center">
<<<<<<< HEAD
          <div className="mb-4 inline-block rounded-lg bg-primary p-3 text-primary-foreground">
            <ShieldQuestion className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold">Verify OTP</CardTitle>
          <CardDescription>
            Enter the 6-digit code sent to your email.
=======
           <div className="mb-4 inline-block rounded-lg bg-primary p-3 text-primary-foreground">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold">Enter OTP</CardTitle>
          <CardDescription>
            Check your email for the one-time password.
>>>>>>> 8d587d1 (if i give forgot password and give send otp there one page should be ins)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerifyOtp} className="space-y-4">
<<<<<<< HEAD
             {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Verification Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="otp">One-Time Password</Label>
              <Input
                id="otp"
                type="text"
                maxLength={6}
                placeholder="------"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="text-center tracking-[0.5em]"
              />
=======
            <div className="space-y-2">
              <Label htmlFor="otp">One-Time Password</Label>
              <Input id="otp" type="text" placeholder="_ _ _ _ _ _" required />
>>>>>>> 8d587d1 (if i give forgot password and give send otp there one page should be ins)
            </div>
            <Button type="submit" className="w-full">
              Verify OTP
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
