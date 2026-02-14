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

const TreeMapTileSmallSmall = (props: Props) => {
  return (
    <div
      className="p-2 flex items-center justify-center absolute bg-blue-200 shadow rounded-xl hover:scale-105 hover:shadow-lg transition-transform"
      style={{
        left: props.node.x,
        top: props.node.y,
        width: props.node.width,
        height: props.node.height,
        backgroundColor: props.node.color,
      }}
    >
      <div className="flex flex-row justify-center items-center flex-wrap gap-1">
        <div className="w-6 h-6 p-0.5 flex items-center justify-center overflow-clip rounded-lg">
          <img
            src={props.node.data.VisualIdentifier}
            alt={props.node.data.Name}
            className="w-full h-full object-contain"
          />
        </div>
        <Badge variant="default" className="bg-white text-black text-xs">
          {props.node.data.MonthlyRatio.toFixed(0)}%
        </Badge>
      </div>
    </div>
  );
};

export default TreeMapTileSmallSmall;
