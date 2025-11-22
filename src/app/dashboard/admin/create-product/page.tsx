
'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AddProductForm } from '@/app/dashboard/products/add-product-form';
import type { Product } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export default function CreateProductPage() {
    const { toast } = useToast();

    const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
        // In a real app, you'd save this to a database.
        // For now, we'll just show a toast notification.
        console.log('New product added:', newProduct);
         toast({
            title: "Product Created",
            description: `${newProduct.name} has been created and is ready to be managed.`,
        });
    }

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
            <AddProductForm onProductAdd={handleAddProduct} />
        </CardContent>
      </Card>
    </>
  );
}
