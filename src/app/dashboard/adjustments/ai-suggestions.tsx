"use client";

import { useState } from "react";
import { Lightbulb, Loader, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SuggestDiscrepancyLocationsOutput,
  suggestDiscrepancyLocations,
} from "@/ai/flows/suggest-discrepancy-locations";
import { deliveryDiscrepancyData } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export function AiSuggestions() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SuggestDiscrepancyLocationsOutput | null>(null);
  const { toast } = useToast();

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await suggestDiscrepancyLocations({
        recentDeliveries: deliveryDiscrepancyData,
      });
      setResult(response);
    } catch (error) {
      console.error("AI suggestion failed:", error);
      toast({
        variant: "destructive",
        title: "AI Suggestion Failed",
        description: "Could not get suggestions. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <div className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-accent" />
            <CardTitle>AI Discrepancy Hunter</CardTitle>
        </div>
        <CardDescription>
          Use AI to find likely locations for stock discrepancies based on
          recent deliveries.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleSubmit} disabled={loading} className="w-full">
          {loading ? (
            <Loader className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Search className="mr-2 h-4 w-4" />
          )}
          Suggest Locations
        </Button>
        
        {result && (
            <div className="space-y-4 pt-4">
                <Separator />
                <div>
                    <h4 className="font-semibold mb-2">Suggested Locations</h4>
                    <div className="space-y-2">
                    {result.suggestedLocations.map((location, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm p-2 rounded-md bg-muted/50">
                            <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                            <span>{location}</span>
                        </div>
                    ))}
                    </div>
                </div>
                 <div>
                    <h4 className="font-semibold mb-2">Reasoning</h4>
                    <p className="text-sm text-muted-foreground p-2 rounded-md bg-muted/50">{result.reasoning}</p>
                </div>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
