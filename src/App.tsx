import "./App.css";
import SubscriptionList from "./components/Subscription/SubscriptionList";
import SubscriptionFormDialog from "./components/SubscriptionForm/SubscriptionFormDialog";
import TreeMapRoot from "./components/TreeMap/TreeMapRoot";

function App() {
  return (
    <div className="max-w-2xl mx-auto">
      <header className="flex">
        <h1 className="text-3xl font-extrabold mb-5 text-primary">
          Subscripto
        </h1>
      </header>
      <TreeMapRoot />
      <SubscriptionFormDialog isEditMode={false} />
      <SubscriptionList />
    </div>
  );
}

export default App;
