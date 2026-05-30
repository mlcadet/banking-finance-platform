import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import TransactionsTable from "../components/tables/TransactionsTable";
import { transactionData } from "../data/transactionData";
import TransactionFilters from "../components/filters/TransactionFilters";
import TransactionKPISection from "../components/transactions/TransactionKPISection";

export default function Transactions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [riskFilter, setRiskFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredTransactions = transactionData.filter((transaction) => {
    const matchesSearch =
      transaction.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRisk =
      riskFilter === "All" || transaction.risk === riskFilter;

    const matchesType =
      typeFilter === "All" || transaction.type === typeFilter;

    return matchesSearch && matchesRisk && matchesType;
  });

return (
  <DashboardLayout>
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Transactions
        </h1>

        <p className="mt-2 text-slate-600">
          Monitor banking activity, transaction volume, branch activity, and risk exceptions.
        </p>
      </div>

      <TransactionKPISection transactions={filteredTransactions} />

      <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Transaction Activity
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Search and review recent transaction records.
            </p>
          </div>

          <TransactionFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            riskFilter={riskFilter}
            setRiskFilter={setRiskFilter}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        </div>

        <TransactionsTable transactions={filteredTransactions} />
      </div>
    </div>
  </DashboardLayout>
);
}