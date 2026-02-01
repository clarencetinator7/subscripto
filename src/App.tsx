import { FaGithub } from "react-icons/fa";
import "./App.css";
import SubscriptionList from "./components/SubscriptionTemp/SubscriptionList";
import SubscriptionFormDialog from "./components/SubscriptionForm/SubscriptionFormDialog";
import TreeMapRoot from "./components/TreeMap/TreeMapRoot";
import { Button } from "./components/ui/button";

// Github profile link: https://github.com/clarencetinator7

function App() {
  return (
    <div className="max-w-2xl mx-auto">
      <header className="flex w-full items-center justify-between">
        <h1 className="text-3xl font-extrabold mb-5 text-primary">
          Subscripto
        </h1>
        <div className="">
          <Button
            variant="link"
            className="flex flex-row gap-1"
            onClick={() =>
              window.open("https://github.com/clarencetinator7", "_blank")
            }
          >
            <FaGithub className="text-lg" />
            clarencetinator7
          </Button>
        </div>
      </header>
      <TreeMapRoot />
      <SubscriptionFormDialog isEditMode={false} />
      <SubscriptionList />
    </div>
  );
}

export default App;
