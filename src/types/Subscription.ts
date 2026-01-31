export type Subscription = {
  Name: string;
  Cost: number;
  Cycle: BillingCycle;
  VisualIdentifier: string;
};

export type BillingCycle = "Monthly" | "Yearly";
