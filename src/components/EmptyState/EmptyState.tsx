import { LuCreditCard } from "react-icons/lu";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6">
      {/* Icon Container */}
      <div className="mb-8 rounded-full bg-linear-to-br from-primary/10 to-primary/20 p-6">
        <LuCreditCard className="h-12 w-12 text-primary" />
      </div>

      {/* Text Content */}
      <div className="text-center max-w-sm">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          No subscriptions yet
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Add your first subscription to see a complete list and an interactive
          visual breakdown of all your subscriptions by cost.
        </p>
      </div>
    </div>
  );
}
