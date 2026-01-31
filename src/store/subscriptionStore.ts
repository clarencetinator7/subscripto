import type { Subscription } from "@/types/Subscription";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SubscriptionStore = {
  subscriptions: Subscription[];
  addSubscription: (newSubscription: Subscription) => void;
};

export const useSubscriptionStore = create<SubscriptionStore>()(
  persist(
    (set) => ({
      subscriptions: [],
      addSubscription: (newSubscription: Subscription) => {
        set((state) => ({
          subscriptions: [...state.subscriptions, newSubscription],
        }));
      },
    }),
    {
      name: "subscription-storage", // unique name
    },
  ),
);
