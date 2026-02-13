import { DEFAULT_UNIT } from "@/const/constants";
import { formatCurrency } from "@/lib/utils";

type Props = {
  totalMonthlyCost: number;
  totalYearlyCost: number;
};

const SubscriptionStats = ({ totalMonthlyCost, totalYearlyCost }: Props) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-md font-semibold text-gray-500">Total Monthly</h2>
        <h2 className="text-md font-semibold text-gray-500">Total Yearly</h2>
      </div>
      <div className="flex flex-row items-start justify-between">
        <p className="text-2xl font-bold text-gray-700">
          {formatCurrency(totalMonthlyCost, DEFAULT_UNIT.Symbol)}
        </p>
        <p className="text-lg font-bold text-primary">
          {formatCurrency(totalYearlyCost, DEFAULT_UNIT.Symbol)}
        </p>
      </div>
    </div>
  );
};

export default SubscriptionStats;
