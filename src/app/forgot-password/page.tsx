import Link from "next/link";
import { ArrowLeft, KeyRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 relative">
        <Button asChild variant="ghost" className="absolute top-4 left-4">
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
            </Link>
        </Button>
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="inline-block bg-primary text-primary-foreground p-3 rounded-lg mb-4">
            <KeyRound className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold">Forgot Password</CardTitle>
          <CardDescription>
            Enter your email to receive a one-time password (OTP).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4" suppressHydrationWarning>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="manager@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send OTP
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
