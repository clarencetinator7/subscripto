import { VERY_SMALL_HEIGHT_THRESHOLD } from "@/const/constants";
import { Badge } from "../ui/badge";
import type { SubscriptionNode } from "@/utils/d3TreeMap";

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

const TreeMapTileSmallWide = (props: Props) => {
  return (
    <div
      className="p-3 flex flex-col items-center justify-between absolute bg-blue-200 shadow rounded-xl hover:scale-105 hover:shadow-lg transition-transform"
      style={{
        left: props.node.x,
        top: props.node.y,
        width: props.node.width,
        height: props.node.height,
        backgroundColor: props.node.color,
      }}
    >
      <div className="flex flex-col items-center justify-center w-full flex-1 gap-1">
        <div className="w-8 h-8 p-0.5 flex items-center justify-center overflow-clip rounded-lg shrink-0">
          <img
            src={props.node.data.VisualIdentifier}
            alt={props.node.data.Name}
            className="w-full h-full object-contain"
          />
        </div>
        <Badge
          variant="default"
          className="bg-white text-black text-xs shrink-0"
        >
          {props.node.data.MonthlyRatio.toFixed(1)}%
        </Badge>
        {props.node.height > VERY_SMALL_HEIGHT_THRESHOLD && (
          <p className="text-xs text-black/60 truncate text-center">
            {props.node.data.Name}
          </p>
        )}
      </div>
    </div>
  );
};

export default TreeMapTileSmallWide;
