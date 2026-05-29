import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { transactionChannelData } from "../../data/chartData";

export default function PieChartBox() {
  return (
    <div className="w-full min-w-0 h-72 min-h-[288px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={transactionChannelData}
            dataKey="value"
            nameKey="channel"
            innerRadius={60}
            outerRadius={95}
            paddingAngle={4}
          >
            {transactionChannelData.map((entry) => (
              <Cell key={entry.channel} />
            ))}
          </Pie>

          <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}