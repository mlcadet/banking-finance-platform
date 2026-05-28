import { transactionData } from "../../data/transactionData";

export default function TransactionsTable() {
  const getRiskStyle = (risk) => {
    if (risk === "High") {
      return "bg-rose-100 text-rose-700";
    }

    if (risk === "Review") {
      return "bg-amber-100 text-amber-700";
    }

    return "bg-emerald-100 text-emerald-700";
  };

  return (
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
          {transactionData.map((transaction) => (
            <tr key={transaction.id} className="border-b last:border-b-0">
              <td className="py-4 text-slate-500">{transaction.date}</td>
              <td className="font-medium text-slate-900">
                {transaction.customer}
              </td>
              <td>{transaction.branch}</td>
              <td>{transaction.type}</td>
              <td className="font-semibold">{transaction.amount}</td>
              <td>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${getRiskStyle(
                    transaction.risk
                  )}`}
                >
                  {transaction.risk}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}