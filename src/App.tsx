import { useState } from "react";
import "./App.css";
import type { BillingCycle } from "./types/Subscription";

function App() {
  const [nameField, setNameField] = useState<string>("");
  const [costField, setCostField] = useState<number>(0);
  const [cycleField, setCycleField] = useState<BillingCycle>("Monthly");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log({
      Name: nameField,
      Cost: costField,
      Cycle: cycleField,
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
      </form>
    </>
  );
}

export default App;
