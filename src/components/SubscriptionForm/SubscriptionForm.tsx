import { Field, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "../ui/select";

const SubscriptionForm = () => {
  // const addSubscription = useSubscriptionStore(
  //   (state) => state.addSubscription,
  // );

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // addSubscription({
    //   Name: nameField,
    //   Cost: costField,
    //   Cycle: cycleField,
    //   VisualIdentifier: "",
    // });
  };
  return (
    <form onSubmit={handleSubmit} className="px-5 flex flex-col gap-1">
      <FieldSet className="flex gap-3">
        <Field className="field-wrapper">
          <FieldLabel className="field-label">Website (optional)</FieldLabel>
          <Input type="text" placeholder="www.spotify.com" className="py-5" />
        </Field>
        <Field className="field-wrapper">
          <FieldLabel className="field-label">Subscription</FieldLabel>
          <Input type="text" placeholder="Spotify" className="py-5" />
        </Field>
        <div className="flex gap-3">
          <Field className="field-wrapper">
            <FieldLabel className="field-label">Cost</FieldLabel>
            <Input type="number" placeholder="3.00$" className="py-5" />
          </Field>
          <Field className="field-wrapper">
            <FieldLabel className="field-label">Billing Cycle</FieldLabel>
            <Select value="Monthly">
              <SelectTrigger className="py-5">
                <SelectValue placeholder="Billing Cycle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Monthly">Monthly</SelectItem>
                <SelectItem value="Yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </FieldSet>
      <button
        type="submit"
        className="font-semibold bg-primary text-white py-3 my-5 rounded-xl"
      >
        Save Subscription
      </button>
    </form>
  );
};

export default SubscriptionForm;
