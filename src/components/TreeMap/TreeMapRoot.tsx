import { useSubscriptionStore } from "@/store/subscriptionStore";
import { computeTreemapData } from "@/utils/d3TreeMap";
import { buildSubscriptionData } from "@/utils/subscriptionSelector";

const TreeMapRoot = () => {
  const subscriptions = useSubscriptionStore((state) => state.subscriptions);
  const subscriptionStats = buildSubscriptionData(subscriptions);
  const treeMapNodes = computeTreemapData(subscriptionStats);

  console.log("TreeMap Nodes:", treeMapNodes);
  return (
    <div className="relative w-[672px] h-[600px] border">
      {treeMapNodes.map((node, index) => (
        <div
          key={index}
          className={`flex items-center justify-center absolute bg-blue-200 border`}
          style={{
            left: node.x,
            top: node.y,
            width: node.width,
            height: node.height,
          }}
        >
          {node.data.Name}
        </div>
      ))}
    </div>
  );
};

export default TreeMapRoot;
