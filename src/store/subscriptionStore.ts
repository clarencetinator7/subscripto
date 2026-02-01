import type { Subscription } from "@/types/Subscription";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SubscriptionStore = {
  subscriptions: Subscription[];
  addSubscription: (newSubscription: Subscription) => void;
  deleteSubscription: (id: string) => void;
};

export const useSubscriptionStore = create<SubscriptionStore>()(
  persist(
    (set) => ({
      subscriptions: [],
      addSubscription: (newSubscription: Subscription) => {
        // Generate ID
        newSubscription.Id = crypto.randomUUID();

        set((state) => ({
          subscriptions: [...state.subscriptions, newSubscription],
        }));
      },
      deleteSubscription: (id: string) => {
        set((state) => ({
          subscriptions: state.subscriptions.filter(
            (subscription) => subscription.Id !== id,
          ),
        }));
      },
    }),
    {
      name: "subscription-storage", // unique name
    },
  ),
);
