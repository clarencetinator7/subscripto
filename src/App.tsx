import { LuTrash2 } from "react-icons/lu";
import "./App.css";
import SubscriptionList from "./components/Subscription/SubscriptionList";
import SubscriptionFormDialog from "./components/SubscriptionForm/SubscriptionFormDialog";
import TreeMapRoot from "./components/TreeMap/TreeMapRoot";
import { Button } from "./components/ui/button";
import { useSubscriptionStore } from "./store/subscriptionStore";
import EmptyState from "./components/EmptyState/EmptyState";
import Header from "./components/Header/Header";

// Github profile link: https://github.com/clarencetinator7

function App() {
  const subscriptions = useSubscriptionStore((state) => state.subscriptions);
  const clearAllSubscriptions = useSubscriptionStore(
    (state) => state.clearAllSubscriptions,
  );

  return (
    <>
      <div className="max-w-2xl mx-auto relative">
        <Header />
        {subscriptions.length === 0 && <EmptyState />}
        {subscriptions.length > 0 && <TreeMapRoot />}
        <SubscriptionFormDialog isEditMode={false} />
        <SubscriptionList />
      </div>

      {/* Floating Delete All Button */}
      {subscriptions.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-2xl flex justify-end pr-6 pointer-events-none">
          <Button
            variant="default"
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to clear all subscriptions?",
                )
              ) {
                clearAllSubscriptions();
              }
            }}
            className="rounded-full px-7! py-6 flex items-center justify-center shadow-2xl bg-white text-gray-300  hover:shadow-xl hover:bg-white hover:text-red-500 hover:cursor-pointer pointer-events-auto"
          >
            <LuTrash2 className="text-xl" />{" "}
            <span className="">Clear All </span>
          </Button>
        </div>
      )}
    </>
  );
}

export default App;
