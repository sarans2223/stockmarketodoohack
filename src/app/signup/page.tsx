import Link from "next/link";
import { ArrowLeft, UserPlus } from "lucide-react";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function SignupPage() {
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
            <UserPlus className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>
            Enter your details to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4" suppressHydrationWarning>
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
              />
            </div>
             <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
