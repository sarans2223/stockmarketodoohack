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

export default function WarehouseSettingsPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Warehouse Settings</h1>
        <p className="text-muted-foreground">Manage your warehouse locations and configurations.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Main Warehouse</CardTitle>
          <CardDescription>
            Update details for your primary warehouse.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="warehouse-name">Warehouse Name</Label>
            <Input id="warehouse-name" defaultValue="Main Warehouse" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="warehouse-address">Address</Label>
            <Input id="warehouse-address" defaultValue="123 Industrial Ave, Metropolis" />
          </div>
           <div className="space-y-2">
            <Label htmlFor="warehouse-manager">Manager</Label>
            <Input id="warehouse-manager" defaultValue="Jane Doe" />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </>
  );
}
