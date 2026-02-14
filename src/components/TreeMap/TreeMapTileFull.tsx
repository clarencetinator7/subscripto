import { DEFAULT_UNIT } from "@/const/constants";
import { formatCurrency } from "@/lib/utils";
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

const TreeMapTileFull = (props: Props) => {
  return (
    <div
      className="p-4 flex flex-col absolute bg-blue-200 shadow rounded-xl justify-between hover:scale-102 hover:shadow-lg transition-transform"
      style={{
        left: props.node.x,
        top: props.node.y,
        width: props.node.width,
        height: props.node.height,
        backgroundColor: props.node.color,
      }}
    >
      <div className="flex flex-col w-full justify-between overflow-hidden flex-1">
        {/* IMG CONTAINER */}
        <div className="flex flex-row justify-between w-full items-start">
          <div className="w-12 h-12 p-1 flex items-center justify-center overflow-clip rounded-lg shrink-0">
            <img
              src={props.node.data.VisualIdentifier}
              alt={props.node.data.Name}
              className="w-full h-full object-contain"
            />
          </div>
          <Badge
            variant="default"
            className="bg-white text-black text-sm shrink-0"
          >
            {props.node.data.MonthlyRatio.toFixed(2)}%
          </Badge>
        </div>
        {/* INFO CONTAINER */}
        <div className="flex flex-col items-start gap-0 mt-2">
          <p className="text-sm text-black/50 truncate">
            {props.node.data.Name}
          </p>
          <p className="font-bold truncate">
            {formatCurrency(props.node.data.YearlyCost, DEFAULT_UNIT.Symbol)} /
            year
          </p>
          <p className="text-xs text-gray-500 truncate">
            {formatCurrency(props.node.data.MonthlyCost, DEFAULT_UNIT.Symbol)} /
            mnth
          </p>
        </div>
      </div>
    </div>
  );
};

export default TreeMapTileFull;
