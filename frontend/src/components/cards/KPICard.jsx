import { ChevronUp, ChevronDown } from "lucide-react";

export default function KPICard({
  label,
  value,
  change,
  trend,
  icon: Icon,
}) {
  const isPositive = trend === "up";

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition duration-300">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Main KPI Icon */}
        <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
          <Icon size={24} />
        </div>

        {/* Trend Indicator */}
        <div
          className={`flex items-center gap-1 text-sm font-semibold ${
            isPositive ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {isPositive ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}

          {change}
        </div>
      </div>

      {/* KPI Value */}
      <h3 className="mt-6 text-3xl font-bold text-slate-900">
        {value}
      </h3>

      {/* KPI Label */}
      <p className="mt-2 text-sm text-slate-500">
        {label}
      </p>
    </div>
  );
}