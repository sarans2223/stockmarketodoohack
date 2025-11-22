
"use client";

import { Package, PackageCheck, PackagePlus, Clock, XCircle, Shuffle, BarChart2 } from "lucide-react";
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
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/badge";
import { kpiData, inventoryChartData, recentActivity } from "@/lib/data";

const inventoryFlowChartConfig = {
  Incoming: {
    label: "Incoming",
    color: "hsl(var(--chart-1))",
  },
  Outgoing: {
    label: "Outgoing",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const kpiChartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const kpiChartData = [
    { name: "Total Products", value: kpiData.totalProducts, icon: Package },
    { name: "Pending Receipts", value: kpiData.pendingReceipts, icon: PackagePlus },
    { name: "Pending Deliveries", value: kpiData.pendingDeliveries, icon: PackageCheck },
    { name: "Scheduled Transfers", value: kpiData.scheduledTransfers, icon: Shuffle },
    { name: "Low Stock", value: kpiData.lowStock, icon: Clock },
    { name: "Out of Stock", value: kpiData.outOfStock, icon: XCircle },
];


export default function DashboardPage() {
  return (
    <>
       <div className="grid gap-4 md:gap-8 lg:grid-cols-1">
        <Card>
          <CardHeader>
             <div className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Overview</CardTitle>
            </div>
            <CardDescription>A summary of important inventory statistics.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={kpiChartConfig} className="min-h-[250px] w-full">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={kpiChartData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    width={140}
                  />
                  <ChartTooltip
                    cursor={{ fill: 'hsl(var(--muted))' }}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="value" fill="var(--color-value)" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Inventory Flow</CardTitle>
            <CardDescription>January - July 2025</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={inventoryFlowChartConfig} className="min-h-[300px] w-full">
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
                  <Bar dataKey="Incoming" fill="var(--color-Incoming)" radius={4} />
                  <Bar dataKey="Outgoing" fill="var(--color-Outgoing)" radius={4} />
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
                {recentActivity.slice(0,5).map(activity => (
                    <TableRow key={activity.id}>
                        <TableCell>
                            <div className="font-medium">{activity.type}</div>
                            <div className="text-xs text-muted-foreground">{activity.date}</div>
                        </TableCell>
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
      </div>
    </>
  );
}
