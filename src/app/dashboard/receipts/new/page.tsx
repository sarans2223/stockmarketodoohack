
'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, PlusCircle, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Product, Activity } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { products as initialProducts, recentActivity as initialActivity } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

interface ReceiptItem {
  productId: string;
  quantity: number;
  productName: string;
}

export default function NewReceiptPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [products, setProducts] = React.useState<Product[]>([]);
  const [supplier, setSupplier] = React.useState('');
  const [receiptItems, setReceiptItems] = React.useState<ReceiptItem[]>([]);
  
  React.useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    setProducts(storedProducts ? JSON.parse(storedProducts) : initialProducts);
  }, []);

  const handleAddProduct = () => {
    setReceiptItems([...receiptItems, { productId: '', quantity: 1, productName: '' }]);
  };

  const handleItemChange = (index: number, field: keyof ReceiptItem, value: string | number) => {
    const newItems = [...receiptItems];
    if (field === 'productId') {
        const product = products.find(p => p.id === value);
        newItems[index] = { ...newItems[index], productId: value as string, productName: product?.name || '' };
    } else {
        newItems[index] = { ...newItems[index], [field]: value };
    }
    setReceiptItems(newItems);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = receiptItems.filter((_, i) => i !== index);
    setReceiptItems(newItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supplier || receiptItems.some(item => !item.productId || item.quantity <= 0)) {
        toast({
            variant: "destructive",
            title: "Validation Error",
            description: "Please fill in supplier and all product details correctly.",
        });
        return;
    }

    // Update products stock in localStorage
    const storedProducts = localStorage.getItem('products');
    let currentProducts: Product[] = storedProducts ? JSON.parse(storedProducts) : initialProducts;
    
    receiptItems.forEach(item => {
        currentProducts = currentProducts.map(p => {
            if (p.id === item.productId) {
                return { ...p, stock: p.stock + Number(item.quantity) };
            }
            return p;
        });
    });
    localStorage.setItem('products', JSON.stringify(currentProducts));

    // Update activity log in localStorage
    const storedActivity = localStorage.getItem('recentActivity');
    let currentActivity: Activity[] = storedActivity ? JSON.parse(storedActivity) : initialActivity;

    const newReceipt: Activity = {
        id: `REC-${(currentActivity.filter(a=>a.type === 'Receipt').length + 1).toString().padStart(3, '0')}`,
        type: 'Receipt',
        date: new Date().toISOString().split('T')[0],
        status: 'Done',
        details: `Received ${receiptItems.length} product(s) from ${supplier}`,
        category: 'Mixed', // Or determine category logic
        location: 'Main Warehouse' // Or make this selectable
    };
    const updatedActivity = [newReceipt, ...currentActivity];
    localStorage.setItem('recentActivity', JSON.stringify(updatedActivity));


    toast({
      title: 'Receipt Created',
      description: 'Stock levels have been updated successfully.',
    });
    router.push('/dashboard/receipts');
  };

  return (
    <>
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
            <h1 className="text-3xl font-bold tracking-tight">New Receipt</h1>
            <p className="text-muted-foreground">Record incoming inventory from a supplier.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Receipt Details</CardTitle>
            <CardDescription>Enter supplier information and add products received.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="supplier">Supplier Name</Label>
              <Input
                id="supplier"
                placeholder="e.g. Global Tech Components"
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)}
                required
              />
            </div>
            
            <Separator />

            <div>
                <h3 className="text-lg font-medium mb-2">Products</h3>
                <div className="space-y-4">
                    {receiptItems.map((item, index) => (
                        <div key={index} className="flex items-end gap-4 p-4 border rounded-lg">
                            <div className="grid gap-2 flex-1">
                                <Label htmlFor={`product-${index}`}>Product</Label>
                                <Select
                                    value={item.productId}
                                    onValueChange={(value) => handleItemChange(index, 'productId', value)}
                                >
                                    <SelectTrigger id={`product-${index}`}>
                                        <SelectValue placeholder="Select a product" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {products.map(p => (
                                            <SelectItem key={p.id} value={p.id}>{p.name} ({p.sku})</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor={`quantity-${index}`}>Quantity</Label>
                                <Input
                                    id={`quantity-${index}`}
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value, 10))}
                                    className="w-28"
                                    required
                                />
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(index)} type="button">
                                <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                        </div>
                    ))}
                </div>
                 <Button variant="outline" size="sm" onClick={handleAddProduct} className="mt-4" type="button">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Product
                </Button>
            </div>
            
            <Separator />

            <div className="flex justify-end">
                <Button type="submit">
                    Validate and Add Stock
                </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  );
}
