import { Bell, Search, UserCircle2 } from "lucide-react";

export default function DashboardTopbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8">

      {/* Search */}
      <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-4 py-2 w-80">
        <Search size={18} className="text-slate-400" />

        <input
          type="text"
          placeholder="Search transactions, customers..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        <button className="relative text-slate-600 hover:text-slate-900">
          <Bell size={22} />
        </button>

        <div className="flex items-center gap-3">
          <UserCircle2 size={34} className="text-slate-700" />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">
              Operations Analyst
            </p>

            <p className="text-xs text-slate-500">
              Finance & BI
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}