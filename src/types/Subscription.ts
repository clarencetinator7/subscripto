export type Subscription = {
  Id: string;
  Website?: string;
  Name: string;
  Cost: number;
  Cycle: BillingCycle;
  VisualIdentifier: string;
};

export type BillingCycle = "Monthly" | "Yearly";

export type SubscriptionMetrics = Subscription & {
  MonthlyCost: number;
  YearlyCost: number;
  MonthlyRatio: number;
};

export type SubscriptionStats = {
  TotalMonthlyCost: number;
  TotalYearlyCost: number;
  AverageMonthlyCost: number;
  Items: SubscriptionMetrics[];
};
