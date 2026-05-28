import Sidebar from "./Sidebar";
import DashboardTopbar from "./DashboardTopbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Top Navigation */}
        <DashboardTopbar />

        {/* Dashboard Content */}
        <main className="p-6 lg:p-8">
          {children}
        </main>

      </div>
    </div>
  );
}