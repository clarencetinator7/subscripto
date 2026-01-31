import useIsMobile from "@/hooks/useIsMobile";
import { IoIosAdd } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import SubscriptionForm from "./SubscriptionForm";
import { forwardRef, useState, type ComponentProps } from "react";

const AddSubscriptionDialog = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <AddSubscriptionButton />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="p-5">
            <DialogTitle className="text-2xl font-bold text-primary">
              Add Subscription
            </DialogTitle>
          </DialogHeader>
          <SubscriptionForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <AddSubscriptionButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="p-5 text-2xl font-bold text-primary">
          Add Subscription
        </DrawerTitle>
        <SubscriptionForm />
      </DrawerContent>
    </Drawer>
  );
};

export default AddSubscriptionDialog;

const AddSubscriptionButton = forwardRef<
  HTMLButtonElement,
  ComponentProps<"button">
>(({ ...props }, ref) => {
  return (
    <button
      ref={ref}
      className="btn flex items-center justify-center p-3 w-full font-semibold text-secondary border border-dashed border-secondary rounded-xl bg-white hover:cursor-pointer hover:text-primary hover:border-solid"
      {...props}
    >
      <IoIosAdd className="inline mr-1 text-2xl" />
      Add Subscription
    </button>
  );
});
