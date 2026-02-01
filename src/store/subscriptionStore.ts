import type { Subscription } from "@/types/Subscription";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SubscriptionStore = {
  subscriptions: Subscription[];
  getSubscriptionById: (id: string) => Subscription | undefined;
  addSubscription: (newSubscription: Subscription) => void;
  editSubscription: (
    id: string,
    updatedSubscription: Partial<Subscription>,
  ) => void;
  deleteSubscription: (id: string) => void;
};

export const useSubscriptionStore = create<SubscriptionStore>()(
  persist(
    (set, get) => ({
      subscriptions: [],
      getSubscriptionById: (id: string) => {
        return get().subscriptions.find(
          (subscription) => subscription.Id === id,
        );
      },
      addSubscription: (newSubscription: Subscription) => {
        // Generate ID
        const subscriptionWithId = {
          ...newSubscription,
          Id: crypto.randomUUID(),
        };

        set((state) => ({
          subscriptions: [...state.subscriptions, subscriptionWithId],
        }));
      },
      editSubscription: (
        id: string,
        updatedSubscription: Partial<Subscription>,
      ) => {
        set((state) => ({
          subscriptions: state.subscriptions.map((subscription) =>
            subscription.Id === id
              ? { ...subscription, ...updatedSubscription }
              : subscription,
          ),
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
