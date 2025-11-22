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
import { AiSuggestions } from "./ai-suggestions";

const adjustments = recentActivity.filter(a => a.type === 'Adjustment');

export default function AdjustmentsPage() {
  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-6">
            <div>
            <h1 className="text-3xl font-bold tracking-tight">Inventory Adjustments</h1>
            <p className="text-muted-foreground">Correct and record inventory discrepancies.</p>
            </div>
            <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> New Adjustment
            </Button>
        </div>
        <Card>
            <CardHeader>
            <CardTitle>Adjustment History</CardTitle>
            <CardDescription>
                Log of all manual stock corrections.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Adjustment ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {adjustments.map((adjustment) => (
                    <TableRow key={adjustment.id}>
                    <TableCell className="font-medium">{adjustment.id}</TableCell>
                    <TableCell>{adjustment.date}</TableCell>
                    <TableCell>{adjustment.details}</TableCell>
                    <TableCell>
                        <Badge variant="outline">{adjustment.status}</Badge>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-1">
        <AiSuggestions />
      </div>
    </div>
  );
}
