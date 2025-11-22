import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ProfilePage() {
    const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and settings.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Profile Details</CardTitle>
          <CardDescription>
            Update your account information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                    {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt="User Avatar" data-ai-hint={userAvatar.imageHint} />}
                    <AvatarFallback>IM</AvatarFallback>
                </Avatar>
                <Button variant="outline">Change Photo</Button>
            </div>
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" defaultValue="Inventory Manager" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="manager@example.com" disabled />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </>
  );
}
