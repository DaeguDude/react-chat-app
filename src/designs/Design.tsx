import { Components } from "./Components";
import { DesignSystem } from "./DesignSystem";

export const Design = () => {
  return (
    <div>
      <DesignSystem />
      <div className="h-[20px] w-full bg-slate-600"></div>
      <Components />
    </div>
  );
};
