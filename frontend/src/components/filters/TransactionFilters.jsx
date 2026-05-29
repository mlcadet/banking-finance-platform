export default function TransactionFilters({
  searchTerm,
  setSearchTerm,
  riskFilter,
  setRiskFilter,
  typeFilter,
  setTypeFilter,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={riskFilter}
        onChange={(e) => setRiskFilter(e.target.value)}
        className="rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All Risk</option>
        <option value="Low">Low</option>
        <option value="Review">Review</option>
        <option value="High">High</option>
      </select>

      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className="rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All Types</option>
        <option value="Deposit">Deposit</option>
        <option value="Withdrawal">Withdrawal</option>
        <option value="Transfer">Transfer</option>
      </select>
    </div>
  );
}