import type {
  SubscriptionMetrics,
  Subscription,
  SubscriptionStats,
} from "@/types/Subscription";

const computeMonthlyCost = (subscription: Subscription) => {
  return subscription.Cycle === "Monthly"
    ? subscription.Cost
    : subscription.Cost / 12;
};

const computeYearlyCost = (subscription: Subscription) => {
  return subscription.Cycle === "Yearly"
    ? subscription.Cost
    : subscription.Cost * 12;
};

const buildSubscriptionCost = (
  subscription: Subscription,
): SubscriptionMetrics => {
  const MonthlyCost = computeMonthlyCost(subscription);
  const YearlyCost = computeYearlyCost(subscription);

  return {
    ...subscription,
    MonthlyCost,
    YearlyCost,
    MonthlyRatio: 0,
  };
};

const buildPercentageOfTotalMonthlyCost = (
  subscription: SubscriptionMetrics,
  totalMonthlyCost: number,
) => {
  if (totalMonthlyCost === 0) return 0;
  return (subscription.MonthlyCost / totalMonthlyCost) * 100;
};

export const buildSubscriptionData = (
  subscriptions: Subscription[],
): SubscriptionStats => {
  // 1. Compute monthly and yearly costs for each subscription
  const computedSubscriptions = subscriptions.map((subscription) =>
    buildSubscriptionCost(subscription),
  );

  // 2. Compute total monthly cost
  const totalMonthlyCost = computedSubscriptions.reduce(
    (acc, sub) => acc + sub.MonthlyCost,
    0,
  );
  const averageMonthlyCost =
    computedSubscriptions.length === 0
      ? 0
      : totalMonthlyCost / (computedSubscriptions.length || 1);

  // 3. Compute total yearly cost
  const totalYearlyCost = computedSubscriptions.reduce(
    (acc, sub) => acc + sub.YearlyCost,
    0,
  );

  // 4. Compute percentage of total monthly cost for each subscription
  const finalItems = computedSubscriptions
    .map((sub) => {
      return {
        ...sub,
        PercentageOfTotalMonthlyCost: buildPercentageOfTotalMonthlyCost(
          sub as SubscriptionMetrics,
          totalMonthlyCost,
        ),
      };
    })
    .sort((a, b) => b.MonthlyCost - a.MonthlyCost);

  // 5. Put it all together
  return {
    Items: finalItems,
    TotalMonthlyCost: totalMonthlyCost,
    TotalYearlyCost: totalYearlyCost,
    AverageMonthlyCost: averageMonthlyCost,
  };
};
