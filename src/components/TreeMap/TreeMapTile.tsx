import { DEFAULT_UNIT } from "@/const/constants";
import type { SubscriptionNode } from "@/utils/d3TreeMap";
import { Badge } from "../ui/badge";

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
  const minDimension = Math.min(width, height);

  // Determine layout type based on tile size
  const isCompact = minDimension < 100;
  const isSmall = minDimension < 140;

  if (isCompact) {
    // Minimal layout: just icon and percent
    return (
      <div
        className="p-2 flex items-center justify-center absolute bg-blue-200 shadow rounded-xl"
        style={{
          left: props.node.x,
          top: props.node.y,
          width: props.node.width,
          height: props.node.height,
          backgroundColor: props.node.color,
        }}
      >
        <div className="flex flex-row justify-center items-center flex-wrap gap-1">
          <div className="w-8 h-8 p-0.5 flex items-center justify-center overflow-clip rounded-lg">
            <img
              src={props.node.data.VisualIdentifier}
              alt={props.node.data.Name}
              className="w-full h-full object-contain"
            />
          </div>
          <Badge variant="default" className="bg-white text-black text-xs">
            {props.node.data.MonthlyRatio.toFixed(1)}%
          </Badge>
        </div>
      </div>
    );
  }

  if (isSmall) {
    // Small layout: icon, percent, and name
    return (
      <div
        className="p-3 flex flex-col absolute bg-blue-200 shadow rounded-xl justify-between"
        style={{
          left: props.node.x,
          top: props.node.y,
          width: props.node.width,
          height: props.node.height,
          backgroundColor: props.node.color,
        }}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-row justify-between items-start gap-2">
            <div className="w-10 h-10 p-1 flex items-center justify-center overflow-clip rounded-lg shrink-0">
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
          </div>
          <div className="flex">
            <p className="text-sm font-semibold truncate">
              {DEFAULT_UNIT.Symbol}
              {props.node.data.YearlyCost} / yearly
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default layout: full information
  return (
    <div
      className="p-4 flex flex-row absolute bg-blue-200 shadow rounded-xl"
      style={{
        left: props.node.x,
        top: props.node.y,
        width: props.node.width,
        height: props.node.height,
        backgroundColor: props.node.color,
      }}
    >
      <div className="flex flex-col w-full justify-between overflow-hidden">
        {/* IMG CONTAINER */}
        <div className="flex flex-row justify-between w-full">
          <div className="w-12 h-12 p-1 flex items-center justify-center overflow-clip rounded-lg">
            <img
              src={props.node.data.VisualIdentifier}
              alt={props.node.data.Name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-1 text-sm font-semibold rounded-full">
            {/* PERCENT */}
            <Badge variant="default" className="bg-white text-black">
              {props.node.data.MonthlyRatio.toFixed(2)}%
            </Badge>
          </div>
        </div>
        <div className="flex flex-col items-start gap-0">
          <p className="text-sm text-black/50 truncate">
            {props.node.data.Name}
          </p>
          <p className="font-bold truncate">
            {DEFAULT_UNIT.Symbol}
            {props.node.data.YearlyCost} / yearly
          </p>
        </div>
      </div>
    </div>
  );
};

export default TreeMapTile;
