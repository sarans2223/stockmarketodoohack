import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductCategoriesPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Product Categories</h1>
        <p className="text-muted-foreground">Manage your product categories.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
          <CardDescription>
            A list of all product categories.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Product categories management interface will be here.</p>
        </CardContent>
      </Card>
    </>
  );
}
