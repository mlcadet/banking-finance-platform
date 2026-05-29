import DashboardLayout from "../components/layout/DashboardLayout";
import TransactionsTable from "../components/tables/TransactionsTable";

export default function Transactions() {
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

        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Transaction Activity
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Search and review recent transaction records.
              </p>
            </div>
          </div>

          <TransactionsTable />
        </div>
      </div>
    </DashboardLayout>
  );
}