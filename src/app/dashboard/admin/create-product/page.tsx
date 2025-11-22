import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateProductPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Create Product</h1>
        <p className="text-muted-foreground">Add a new product to the catalog.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            Fill in the form to create a new product.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Create product form will be here.</p>
        </CardContent>
      </Card>
    </>
  );
}
