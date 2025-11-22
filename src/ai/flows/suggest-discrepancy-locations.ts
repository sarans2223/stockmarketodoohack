'use server';
/**
 * @fileOverview An AI agent that suggests likely locations for stock discrepancies based on recent deliveries.
 *
 * - suggestDiscrepancyLocations - A function that handles the discrepancy location suggestion process.
 * - SuggestDiscrepancyLocationsInput - The input type for the suggestDiscrepancyLocations function.
 * - SuggestDiscrepancyLocationsOutput - The return type for the suggestDiscrepancyLocations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDiscrepancyLocationsInputSchema = z.object({
  recentDeliveries: z.string().describe('A summary of recent deliveries including product name, quantity, and location.'),
});
export type SuggestDiscrepancyLocationsInput = z.infer<typeof SuggestDiscrepancyLocationsInputSchema>;

const SuggestDiscrepancyLocationsOutputSchema = z.object({
  suggestedLocations: z.array(z.string()).describe('An array of locations where stock discrepancies are likely to be found.'),
  reasoning: z.string().describe('The reasoning behind the suggested locations.'),
});
export type SuggestDiscrepancyLocationsOutput = z.infer<typeof SuggestDiscrepancyLocationsOutputSchema>;

export async function suggestDiscrepancyLocations(input: SuggestDiscrepancyLocationsInput): Promise<SuggestDiscrepancyLocationsOutput> {
  return suggestDiscrepancyLocationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestDiscrepancyLocationsPrompt',
  input: {schema: SuggestDiscrepancyLocationsInputSchema},
  output: {schema: SuggestDiscrepancyLocationsOutputSchema},
  prompt: `You are an expert inventory analyst. Based on the recent deliveries provided, identify locations where stock discrepancies are most likely to occur. Provide a list of suggested locations and explain your reasoning.

Recent Deliveries:
{{{recentDeliveries}}}

Output the suggested locations and reasoning in a structured format as described by the schema.`, // Changed the prompt content to be more descriptive
});

const suggestDiscrepancyLocationsFlow = ai.defineFlow(
  {
    name: 'suggestDiscrepancyLocationsFlow',
    inputSchema: SuggestDiscrepancyLocationsInputSchema,
    outputSchema: SuggestDiscrepancyLocationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
