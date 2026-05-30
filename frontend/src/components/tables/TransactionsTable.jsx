export default function TransactionsTable({ transactions = [] }) {
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
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="border-b hover:bg-slate-50"
            >
              <td className="py-4 text-slate-500">{transaction.date}</td>
              <td className="font-medium text-slate-900">{transaction.customer}</td>
              <td>{transaction.branch}</td>
              <td>{transaction.type}</td>
              <td className="font-semibold">{transaction.amount}</td>
              <td>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    transaction.risk === "High"
                      ? "bg-rose-100 text-rose-700"
                      : transaction.risk === "Review"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
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