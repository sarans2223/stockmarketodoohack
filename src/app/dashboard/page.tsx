"use client";

import { ArrowUpRight, Package, PackageCheck, PackagePlus, Clock, XCircle, Shuffle } from "lucide-react";
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
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { kpiData, inventoryChartData, recentActivity } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const chartConfig = {
  incoming: {
    label: "Incoming",
    color: "hsl(var(--chart-1))",
  },
  outgoing: {
    label: "Outgoing",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;


export default function DashboardPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.totalProducts.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Receipts</CardTitle>
            <PackagePlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{kpiData.pendingReceipts}</div>
            <p className="text-xs text-muted-foreground">3 new from suppliers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Deliveries</CardTitle>
            <PackageCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.pendingDeliveries}</div>
            <p className="text-xs text-muted-foreground">2 ready for dispatch</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Transfers</CardTitle>
            <Shuffle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.scheduledTransfers}</div>
            <p className="text-xs text-muted-foreground">For this week</p>
          </CardContent>
        </Card>
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <div className="flex space-x-2">
              <Clock className="h-4 w-4 text-yellow-500" />
              <XCircle className="h-4 w-4 text-red-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.lowStock} Low Stock</div>
            <p className="text-xs text-muted-foreground">{kpiData.outOfStock} Out of Stock</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Inventory Flow</CardTitle>
            <CardDescription>January - July 2024</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                <BarChart accessibilityLayer data={inventoryChartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => new Date(value).toLocaleString('default', { month: 'short' })}
                  />
                   <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    tickFormatter={(value) => `${value / 1000}k`}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="Incoming" fill="var(--color-incoming)" radius={4} />
                  <Bar dataKey="Outgoing" fill="var(--color-outgoing)" radius={4} />
                </BarChart>
              </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>A log of the latest inventory movements.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivity.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell>
                      <div className="font-medium">{activity.type}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {activity.id}
                      </div>
                    </TableCell>
                    <TableCell>{activity.details}</TableCell>
                    <TableCell>
                      <Badge variant={activity.status === 'Completed' ? 'default' : 'secondary'} className={activity.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}>{activity.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
