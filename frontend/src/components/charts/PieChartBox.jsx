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
    <div className="h-72">
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