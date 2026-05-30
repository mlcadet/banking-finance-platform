import {
  CreditCard,
  Landmark,
  Wallet,
  ShieldAlert,
} from "lucide-react";

import KPICard from "../cards/KPICard";

export default function TransactionKPISection({ transactions }) {
  const totalTransactions = transactions.length;

  const totalDeposits = transactions.filter(
    (transaction) => transaction.type === "Deposit"
  ).length;

  const totalWithdrawals = transactions.filter(
    (transaction) => transaction.type === "Withdrawal"
  ).length;

  const flaggedTransactions = transactions.filter(
    (transaction) =>
      transaction.risk === "High" || transaction.risk === "Review"
  ).length;

  const transactionKpis = [
    {
      label: "Total Transactions",
      value: totalTransactions,
      change: "+6.8%",
      trend: "up",
      icon: CreditCard,
    },
    {
      label: "Deposits",
      value: totalDeposits,
      change: "+4.2%",
      trend: "up",
      icon: Landmark,
    },
    {
      label: "Withdrawals",
      value: totalWithdrawals,
      change: "-2.1%",
      trend: "down",
      icon: Wallet,
    },
    {
      label: "Flagged Transactions",
      value: flaggedTransactions,
      change: "+3",
      trend: "down",
      icon: ShieldAlert,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {transactionKpis.map((kpi) => (
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
  );
}

