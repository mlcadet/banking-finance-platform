import DashboardLayout from "../components/layout/DashboardLayout";
import KPICard from "../components/cards/KPICard";
import BarChartBox from "../components/charts/BarChartBox";
import LineChartBox from "../components/charts/LineChartBox";
import { Building2, DollarSign, ChevronUp, AlertTriangle } from "lucide-react";
import ScrollReveal from "../components/animation/ScrollReveal";

const branchKpis = [
  {
    id: 1,
    label: "Top Branch",
    value: "Charlotte",
    change: "+8.4%",
    trend: "up",
    icon: Building2,
  },
  {
    id: 2,
    label: "Branch Revenue",
    value: "$842K",
    change: "+4.6%",
    trend: "up",
    icon: DollarSign,
  },
  {
    id: 3,
    label: "Deposit Growth",
    value: "12.8%",
    change: "+2.1%",
    trend: "up",
    icon: ChevronUp,
  },
  {
    id: 4,
    label: "Risk Exceptions",
    value: "14",
    change: "-3",
    trend: "down",
    icon: AlertTriangle,
  },
];

export default function BranchPerformance() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Branch Performance
          </h1>

          <p className="mt-2 text-slate-600">
            Analyze branch revenue, deposit growth, transaction volume, and operational risk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {branchKpis.map((kpi, index) => (
            <ScrollReveal key={kpi.id} delay={index * 120}>
              <KPICard {...kpi} />
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Branch Revenue Comparison
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Revenue performance across branch locations.
            </p>

            <div className="mt-6">
              <BarChartBox />
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Monthly Branch Trend
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Deposit and withdrawal activity over time.
            </p>

            <div className="mt-6">
              <LineChartBox />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}