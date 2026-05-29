import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { branchPerformanceData } from "../../data/chartData";

export default function BarChartBox() {
  return (
    <div className="w-full min-w-0 h-72 min-h-[288px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={branchPerformanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="branch" />
          <YAxis tickFormatter={(value) => `$${value / 1000}K`} />

          <Tooltip
            formatter={(value) =>
              `$${Number(value).toLocaleString()}`
            }
          />

          <Bar
            dataKey="revenue"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}