
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { recentActivity } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const receipts = recentActivity.filter(a => a.type === 'Receipt');

export default function ReceiptsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Receipts</h1>
          <p className="text-muted-foreground">Process and track incoming goods.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/receipts/new">
            <PlusCircle className="mr-2 h-4 w-4" /> New Receipt
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Receipt History</CardTitle>
          <CardDescription>
            Log of all incoming stock from suppliers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Receipt ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {receipts.map((receipt) => (
                <TableRow key={receipt.id}>
                  <TableCell className="font-medium">{receipt.id}</TableCell>
                  <TableCell>{receipt.date}</TableCell>
                  <TableCell>{receipt.details}</TableCell>
                  <TableCell>
                    <Badge variant={receipt.status === 'Completed' ? 'default' : 'secondary'} className={receipt.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}>
                      {receipt.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
