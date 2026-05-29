import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { monthlyTransactionData } from "../../data/chartData";

export default function LineChartBox() {
  return (
    <div className="w-full min-w-0 h-72 min-h-[288px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={monthlyTransactionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${value / 1000000}M`} />
          <Tooltip
            formatter={(value) =>
              `$${Number(value).toLocaleString()}`
            }
          />

          <Line
            type="monotone"
            dataKey="deposits"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="withdrawals"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}