import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { Field, FieldError, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "../ui/select";
import { useSubscriptionStore } from "@/store/subscriptionStore";
import type { Subscription } from "@/types/Subscription";
import { LuGlobe } from "react-icons/lu";
import { DEFAULT_UNIT } from "@/const/constants";

const SubscriptionForm = () => {
  const addSubscription = useSubscriptionStore(
    (state) => state.addSubscription,
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Subscription>({
    defaultValues: {
      Website: "",
      Name: "",
      Cost: 0,
      Cycle: "Monthly",
      VisualIdentifier: "",
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const website = watch("Website");
  const visualIdentifier = watch("VisualIdentifier");

  // Fetch favicon when website URL changes (with debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!website || website.trim() === "") {
        setValue("VisualIdentifier", "");
        return;
      }

      try {
        // Extract domain from URL
        let domain = website;
        if (!domain.startsWith("http://") && !domain.startsWith("https://")) {
          domain = "https://" + domain;
        }
        const url = new URL(domain);
        const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${url.hostname}`;
        setValue("VisualIdentifier", faviconUrl);
      } catch {
        // If URL parsing fails, don't update VisualIdentifier
        console.warn("Invalid URL format");
      }
    }, 1500); // Wait 800ms after user stops typing

    return () => clearTimeout(timer);
  }, [website, setValue]);

  const onSubmit = (data: Subscription) => {
    addSubscription(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-5 flex flex-col gap-1"
    >
      <FieldSet className="flex gap-3">
        <Field className="field-wrapper">
          <FieldLabel className="field-label">Website (optional)</FieldLabel>
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="www.spotify.com"
              className="py-5"
              {...register("Website")}
            />
            <div className="w-10 h-10 p-1 flex items-center justify-center border rounded-md shadow">
              {visualIdentifier === "" ? (
                <div className="w-full h-full flex items-center justify-center">
                  <LuGlobe className="text-2xl text-muted-foreground" />
                </div>
              ) : (
                <img
                  src={visualIdentifier}
                  alt="Website favicon"
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
          {errors.Website && <FieldError>{errors.Website.message}</FieldError>}
        </Field>
        <Field className="field-wrapper">
          <FieldLabel className="field-label">Subscription</FieldLabel>
          <Input
            type="text"
            placeholder="Spotify"
            className="py-5"
            {...register("Name", { required: "Subscription name is required" })}
          />
          {errors.Name && <FieldError>{errors.Name.message}</FieldError>}
        </Field>
        <div className="flex gap-3">
          <Field className="field-wrapper">
            <FieldLabel className="field-label">{`Cost (${DEFAULT_UNIT.Name} - ${DEFAULT_UNIT.Symbol})`}</FieldLabel>
            <Input
              type="number"
              placeholder="3.00"
              className="py-5"
              step="0.01"
              {...register("Cost", {
                required: "Cost is required",
                valueAsNumber: true,
                min: { value: 0, message: "Cost must be positive" },
              })}
            />
            {errors.Cost && <FieldError>{errors.Cost.message}</FieldError>}
          </Field>
          <Field className="field-wrapper">
            <FieldLabel className="field-label">Billing Cycle</FieldLabel>
            <Controller
              name="Cycle"
              control={control}
              rules={{ required: "Billing cycle is required" }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="py-5">
                    <SelectValue placeholder="Billing Cycle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.Cycle && <FieldError>{errors.Cycle.message}</FieldError>}
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
