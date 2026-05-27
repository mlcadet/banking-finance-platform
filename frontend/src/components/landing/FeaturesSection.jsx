import { Building2, Users, CreditCard, AlertTriangle } from "lucide-react";
import ScrollReveal from "../animation/ScrollReveal";

const features = [
  {
    icon: Building2,
    title: "Branch Performance Analytics",
    description:
      "Compare deposits, withdrawals, fee revenue, and budget variance across branches.",
  },
  {
    icon: Users,
    title: "Customer Behavior Insights",
    description:
      "Analyze customer segments, account activity, product usage, and profitability signals.",
  },
  {
    icon: CreditCard,
    title: "Transaction Monitoring",
    description:
      "Track transaction volume, channels, fees, exceptions, and operational trends.",
  },
  {
    icon: AlertTriangle,
    title: "Risk & Fraud Alerts",
    description:
      "Flag unusual activity, high-risk withdrawals, duplicate transactions, and account exceptions.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Platform Capabilities
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              Built for banking finance and operations workflows
            </h2>

            <p className="mt-4 text-slate-600">
              A practical analytics platform designed to connect transaction activity,
              branch performance, customer behavior, and risk monitoring.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <ScrollReveal key={feature.title} delay={index * 120}>
                <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}