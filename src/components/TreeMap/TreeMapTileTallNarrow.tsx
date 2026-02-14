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

const TreeMapTileTallNarrow = (props: Props) => {
  return (
    <div
      className="p-2 flex flex-col items-center justify-center absolute bg-blue-200 shadow rounded-xl  hover:scale-105 hover:shadow-lg transition-transform"
      style={{
        left: props.node.x,
        top: props.node.y,
        width: props.node.width,
        height: props.node.height,
        backgroundColor: props.node.color,
      }}
    >
      <div className="flex flex-col flex-wrap items-center justify-center">
        <div className="w-8 h-8 p-0.5 flex items-center justify-center overflow-clip rounded-lg">
          <img
            src={props.node.data.VisualIdentifier}
            alt={props.node.data.Name}
            className="w-full h-full object-contain"
          />
        </div>
        <Badge variant="default" className="bg-white text-black text-xs mt-1">
          {props.node.data.MonthlyRatio.toFixed(1)}%
        </Badge>
      </div>
    </div>
  );
};

export default TreeMapTileTallNarrow;
