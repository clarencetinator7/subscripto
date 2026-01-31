import { IoIosAdd } from "react-icons/io";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import SubscriptionForm from "./SubscriptionForm";

const AddSubscriptionDialog = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="btn flex items-center justify-center p-3 w-full font-semibold text-secondary border border-dashed border-secondary rounded-xl bg-white hover:cursor-pointer hover:text-primary hover:border-solid">
          <IoIosAdd className="inline mr-1 text-2xl" />
          Add Subscription
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="p-5">
          <h2 className="text-2xl font-bold">Add Subscription</h2>
        </DrawerTitle>
        <SubscriptionForm />
      </DrawerContent>
    </Drawer>
  );
};

export default AddSubscriptionDialog;
