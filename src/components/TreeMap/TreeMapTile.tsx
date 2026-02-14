import {
  SMALL_HEIGHT_THRESHOLD,
  SMALL_WIDTH_THRESHOLD,
} from "@/const/constants";
import type { SubscriptionNode } from "@/utils/d3TreeMap";
import TreeMapTileSmallSmall from "./TreeMapTileSmallSmall";
import TreeMapTileTallNarrow from "./TreeMapTileTallNarrow";
import TreeMapTileSmallWide from "./TreeMapTileSmallWide";
import TreeMapTileFull from "./TreeMapTileFull";

type Props = {
  node: {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    data: SubscriptionNode;
  };
};

const TreeMapTile = (props: Props) => {
  const { width, height } = props.node;

  // Determine tile size categories
  const isBigWidth = width >= SMALL_WIDTH_THRESHOLD;
  const isSmallWidth = width < SMALL_WIDTH_THRESHOLD;
  const isSmallHeight = height < SMALL_HEIGHT_THRESHOLD;

  // Small Height - Small Width: Icon and percent only
  if (isSmallHeight && isSmallWidth) {
    return <TreeMapTileSmallSmall node={props.node} />;
  }

  // Big Height - Small Width: Vertical stacked layout
  if (!isSmallHeight && isSmallWidth) {
    return <TreeMapTileTallNarrow node={props.node} />;
  }

  // Small Height - Big Width: Horizontal compact layout
  if (isSmallHeight && isBigWidth) {
    return <TreeMapTileSmallWide node={props.node} />;
  }

  // Big Height - Big Width: Full information layout
  return <TreeMapTileFull node={props.node} />;
};

export default TreeMapTile;
