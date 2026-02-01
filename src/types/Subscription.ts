export type Subscription = {
  Id: string;
  Website?: string;
  Name: string;
  Cost: number;
  Cycle: BillingCycle;
  VisualIdentifier: string;
};

export type BillingCycle = "Monthly" | "Yearly";
