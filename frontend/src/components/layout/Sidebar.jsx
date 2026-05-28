import {
  LayoutDashboard,
  Building2,
  Users,
  CreditCard,
  ShieldAlert,
  FileBarChart,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Branches",
    icon: Building2,
  },
  {
    label: "Customers",
    icon: Users,
  },
  {
    label: "Transactions",
    icon: CreditCard,
  },
  {
    label: "Risk Monitoring",
    icon: ShieldAlert,
  },
  {
    label: "Reports",
    icon: FileBarChart,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-72 bg-slate-950 text-white flex-col">

      {/* Logo */}
      <div className="h-20 flex items-center px-8 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-blue-400">
          Bank<span className="text-white">Ops</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.label}
              </span>
            </button>
          );
        })}

      </nav>
    </aside>
  );
}