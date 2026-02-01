import { useSubscriptionStore } from "@/store/subscriptionStore";
import { computeTreemapData } from "@/utils/d3TreeMap";
import { buildSubscriptionData } from "@/utils/subscriptionSelector";
import { useEffect, useRef, useState } from "react";
import TreeMapTile from "./TreeMapTile";

const MAX_WIDTH = 671;
const MIN_WIDTH = 500;
const TreeMapRoot = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(MAX_WIDTH);
  const HEIGHT = containerWidth * 0.9;

  const subscriptions = useSubscriptionStore((state) => state.subscriptions);
  const subscriptionStats = buildSubscriptionData(subscriptions);
  const treeMapNodes = computeTreemapData(
    subscriptionStats,
    containerWidth,
    HEIGHT,
  );

  console.log(subscriptionStats);
  console.log(treeMapNodes);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;

      const clampedWidth = Math.min(Math.max(width, MIN_WIDTH), MAX_WIDTH);
      setContainerWidth(clampedWidth);
    });
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="w-full overflow-x-auto bg-white rounded-2xl p-4 shadow mb-5"
      ref={containerRef}
    >
      <div
        className="relative"
        style={{
          width: containerWidth,
          height: HEIGHT,
        }}
      >
        {treeMapNodes.map((node, index) => (
          <TreeMapTile key={index} node={node} />
        ))}
      </div>
    </div>
  );
};

export default TreeMapRoot;
