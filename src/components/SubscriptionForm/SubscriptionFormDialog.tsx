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
import { useSubscriptionStore } from "@/store/subscriptionStore";

type SubscriptionFormDialogProps =
  | {
      isEditMode: false;
    }
  | {
      isEditMode: true;
      subscriptionId: string;
      triggerElement: React.ReactNode;
    };

const SubscriptionFormDialog = (props: SubscriptionFormDialogProps) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const getSubscriptionById = useSubscriptionStore(
    (state) => state.getSubscriptionById,
  );

  const trigger = props.isEditMode ? (
    props.triggerElement
  ) : (
    <AddSubscriptionButton />
  );

  const subscription =
    props.isEditMode && open ? getSubscriptionById(props.subscriptionId) : null;

  const formTitle =
    props.isEditMode && open ? "Edit Subscription" : "Add Subscription";

  const subscriptionForm =
    props.isEditMode && open ? (
      <SubscriptionForm editMode={true} subscription={subscription!} />
    ) : (
      <SubscriptionForm />
    );

  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader className="p-5">
            <DialogTitle className="text-2xl font-bold text-primary">
              {formTitle}
            </DialogTitle>
          </DialogHeader>
          {subscriptionForm}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent aria-describedby={undefined}>
        <DrawerTitle className="p-5 text-2xl font-bold text-primary">
          Add Subscription
        </DrawerTitle>
        {subscriptionForm}
      </DrawerContent>
    </Drawer>
  );
};

export default SubscriptionFormDialog;

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
