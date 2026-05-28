import DashboardLayout from "../components/layout/DashboardLayout";
import KPICard from "../components/cards/KPICard";
import { kpiData } from "../data/kpiData";
import LineChartBox from "../components/charts/LineChartBox";
import TransactionsTable from "../components/tables/TransactionsTable";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Financial Operations Dashboard
          </h1>

          <p className="mt-2 text-slate-600">
            Monitor banking KPIs, transaction activity, customer analytics,
            and operational performance.
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {kpiData.map((kpi) => (
            <KPICard
              key={kpi.label}
              label={kpi.label}
              value={kpi.value}
              change={kpi.change}
              trend={kpi.trend}
              icon={kpi.icon}
            />
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Monthly Transaction Trend
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Deposits, withdrawals, and fee revenue over time.
            </p>

            <div className="mt-6">
              <LineChartBox />
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Risk Alerts
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              High-priority exceptions requiring review.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-rose-50 p-4 text-sm text-rose-700">
                Large withdrawal flagged for review
              </div>

              <div className="rounded-xl bg-amber-50 p-4 text-sm text-amber-700">
                Multiple same-day transfers detected
              </div>

              <div className="rounded-xl bg-blue-50 p-4 text-sm text-blue-700">
                New account activity spike
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent Transactions
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Latest activity across accounts and branches.
              </p>
            </div>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
              View All
            </button>
          </div>

          <TransactionsTable />
        </div>
      </div>
    </DashboardLayout>
  );
}