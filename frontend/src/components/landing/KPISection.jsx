import KPICard from "../cards/KPICard";
import { kpiData } from "../../data/kpiData";
import ScrollReveal from "../animation/ScrollReveal";

export default function KPISection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
              KPI Preview
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              Monitor financial operations at a glance
            </h2>

            <p className="mt-4 text-slate-600">
              Track core banking performance indicators such as transaction volume,
              deposit movement, customer activity, and fraud alerts.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
            <ScrollReveal key={kpi.id} delay={index * 120}>
            <KPICard {...kpi} />
            </ScrollReveal>
        ))}
        </div>
      </div>
    </section>
  );
}