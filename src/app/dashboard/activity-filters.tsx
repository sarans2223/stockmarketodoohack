"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

type ActivityFiltersProps = {
  filters: {
    type: string;
    status: string;
  };
  onFilterChange: (key: "type" | "status", value: string) => void;
  clearFilters: () => void;
};

const activityTypes = ["Receipt", "Delivery", "Transfer", "Adjustment"];
const activityStatuses = ["Draft", "Waiting", "Ready", "Done", "Canceled"];

export function ActivityFilters({
  filters,
  onFilterChange,
  clearFilters,
}: ActivityFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      <Select
        value={filters.type}
        onValueChange={(value) => onFilterChange("type", value)}
      >
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Filter by Type" />
        </SelectTrigger>
        <SelectContent>
          {activityTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={filters.status}
        onValueChange={(value) => onFilterChange("status", value)}
      >
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Filter by Status" />
        </SelectTrigger>
        <SelectContent>
          {activityStatuses.map((status) => (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground">
        <X className="mr-2 h-4 w-4" />
        Clear Filters
      </Button>
    </div>
  );
}
