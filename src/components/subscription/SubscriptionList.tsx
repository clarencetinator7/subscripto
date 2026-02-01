import { useSubscriptionStore } from "@/store/subscriptionStore";
import SubscriptionCard from "./SubscriptionCard";

const SubscriptionList = () => {
  const subscriptions = useSubscriptionStore((state) => state.subscriptions);
  return (
    <div className="my-5 flex flex-col gap-2">
      {subscriptions.map((sub, index) => (
        <SubscriptionCard key={index} subscription={sub} />
      ))}
    </div>
  );
};

export default SubscriptionList;
