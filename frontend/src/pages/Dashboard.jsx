import DashboardLayout from "../components/layout/DashboardLayout";
import KPICard from "../components/cards/KPICard";
import { kpiData } from "../data/kpiData";

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
      </div>
    </DashboardLayout>
  );
}

{/* Dashboard Grid */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
  <div className="xl:col-span-2 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
    <h2 className="text-lg font-bold text-slate-900">
      Monthly Transaction Trend
    </h2>
    <p className="mt-1 text-sm text-slate-500">
      Deposits, withdrawals, and fee revenue over time.
    </p>

    <div className="mt-6 h-72 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
      Chart placeholder
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

  <div className="mt-6 overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b text-left text-slate-500">
          <th className="py-3">Date</th>
          <th>Customer</th>
          <th>Branch</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Risk</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b">
          <td className="py-4 text-slate-500">06/28/2026</td>
          <td className="font-medium text-slate-900">Avery Johnson</td>
          <td>Charlotte</td>
          <td>Deposit</td>
          <td className="font-semibold">$24,500</td>
          <td>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Low
            </span>
          </td>
        </tr>

        <tr className="border-b">
          <td className="py-4 text-slate-500">06/28/2026</td>
          <td className="font-medium text-slate-900">Maya Chen</td>
          <td>Raleigh</td>
          <td>Withdrawal</td>
          <td className="font-semibold">$12,750</td>
          <td>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              Review
            </span>
          </td>
        </tr>

        <tr>
          <td className="py-4 text-slate-500">06/27/2026</td>
          <td className="font-medium text-slate-900">Noah Williams</td>
          <td>Atlanta</td>
          <td>Transfer</td>
          <td className="font-semibold">$19,600</td>
          <td>
            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
              High
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>