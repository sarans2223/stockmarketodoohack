import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function StockAvailabilityPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Stock Availability</h1>
        <p className="text-muted-foreground">View stock levels across different locations.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Stock per Location</CardTitle>
          <CardDescription>
            A summary of stock availability.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Stock availability details will be shown here.</p>
        </CardContent>
      </Card>
    </>
  );
}
