import type { Subscription } from "@/types/Subscription";
import { Button } from "../ui/button";
import { LuTrash2, LuPencil } from "react-icons/lu";
import { DEFAULT_UNIT } from "@/const/constants";
import { useSubscriptionStore } from "@/store/subscriptionStore";

type SubscriptionCardProps = {
  subscription: Subscription;
};

const SubscriptionCard = ({ subscription }: SubscriptionCardProps) => {
  const deleteSubscription = useSubscriptionStore(
    (state) => state.deleteSubscription,
  );

  return (
    <div className="p-5 flex flex-row items-center justify-between bg-white shadow rounded-xl cursor-pointer">
      <div className="flex flex-row gap-3 items-center">
        <div className="w-10 h-10 flex items-center justify-center">
          <img
            src={subscription.VisualIdentifier}
            alt={subscription.Name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col items-start gap-0">
          <p className="font-bold">{subscription.Name}</p>
          <p className="text-xs text-gray-500">
            {DEFAULT_UNIT.Symbol}
            {subscription.Cost} / {subscription.Cycle}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-0">
        <Button
          variant={"ghost"}
          size="sm"
          className="text-gray-300 hover:text-red-400 cursor-pointer"
          onClick={() => deleteSubscription(subscription.Id)}
        >
          <LuTrash2 />
        </Button>
        <Button
          variant={"ghost"}
          size="sm"
          className="text-gray-300 hover:text-primary cursor-pointer"
        >
          <LuPencil />
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
