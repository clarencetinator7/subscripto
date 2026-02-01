import { TILE_COLORS } from "@/const/constants";
import type {
  SubscriptionMetrics,
  SubscriptionStats,
} from "@/types/Subscription";
import { hierarchy, treemap, type HierarchyNode } from "d3-hierarchy";

type SubscriptionNode = SubscriptionMetrics & { value: number };
type TreeNode = {
  children?: SubscriptionNode[];
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const computeTreemapData = (
  stats: SubscriptionStats,
  width: number,
  height: number,
) => {
  const root: HierarchyNode<TreeNode> = hierarchy<TreeNode>({
    children: stats.Items.map((item) => ({
      ...item,
      value: item.MonthlyCost,
    })),
  }).sum((d: any) => d.value);

  const layout = treemap<TreeNode>().size([width, height]).padding(7)(root);
  return layout.leaves().map((node) => ({
    x: node.x0,
    y: node.y0,
    width: node.x1 - node.x0,
    height: node.y1 - node.y0,
    data: node.data as SubscriptionNode,
    color: TILE_COLORS[Math.floor(Math.random() * TILE_COLORS.length)],
  }));
};
