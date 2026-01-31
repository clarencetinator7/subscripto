import { useSubscriptionStore } from "@/store/subscriptionStore";

const SubscriptionList = () => {
  const subscriptions = useSubscriptionStore((state) => state.subscriptions);
  return (
    <div>
      {subscriptions.map((sub, index) => (
        <div key={index} className="border p-2 my-2">
          <p>Name: {sub.Name}</p>
          <p>Cost: ${sub.Cost}</p>
          <p>Cycle: {sub.Cycle}</p>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionList;
