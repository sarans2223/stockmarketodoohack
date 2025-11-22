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

export default function MoveHistoryPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Move History</h1>
        <p className="text-muted-foreground">A complete log of all inventory movements.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Movements</CardTitle>
          <CardDescription>
            Includes receipts, deliveries, transfers, and adjustments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivity.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="font-medium">{activity.id}</TableCell>
                  <TableCell>{activity.type}</TableCell>
                  <TableCell>{activity.date}</TableCell>
                  <TableCell>{activity.details}</TableCell>
                  <TableCell>
                    <Badge variant={activity.status === 'Completed' ? 'default' : 'secondary'}>{activity.status}</Badge>
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
