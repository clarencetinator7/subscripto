export type Subscription = {
  Website?: string;
  Name: string;
  Cost: number;
  Cycle: BillingCycle;
  VisualIdentifier: string;
};

export type BillingCycle = "Monthly" | "Yearly";
