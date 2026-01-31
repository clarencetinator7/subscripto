import { useState } from "react";
import "./App.css";
import { useSubscriptionStore } from "./store/subscriptionStore";
import type { BillingCycle } from "./types/Subscription";
import SubscriptionList from "./components/subscription/SubscriptionList";

function App() {
  const [nameField, setNameField] = useState<string>("");
  const [costField, setCostField] = useState<number>(0);
  const [cycleField, setCycleField] = useState<BillingCycle>("Monthly");
  const addSubscription = useSubscriptionStore(
    (state) => state.addSubscription,
  );

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    addSubscription({
      Name: nameField,
      Cost: costField,
      Cycle: cycleField,
      VisualIdentifier: "",
    });
  };

  return (
    <>
      <p>Subscripto</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Subscription Name"
          value={nameField}
          onChange={(e) => setNameField(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cost"
          value={costField}
          onChange={(e) => setCostField(Number(e.target.value))}
        />
        <select
          value={cycleField}
          onChange={(e) => setCycleField(e.target.value as BillingCycle)}
        >
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
        <button type="submit">Add Subscription</button>
        <SubscriptionList />
      </form>
    </>
  );
}

export default App;
