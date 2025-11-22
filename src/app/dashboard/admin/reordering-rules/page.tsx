import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReorderingRulesPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Reordering Rules</h1>
        <p className="text-muted-foreground">Set up rules for automatic reordering.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Automation Rules</CardTitle>
          <CardDescription>
            Configure rules for low-stock alerts and reordering.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Reordering rules interface will be here.</p>
        </CardContent>
      </Card>
    </>
  );
}
