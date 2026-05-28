import {
  Landmark,
  Users,
  CreditCard,
  ShieldAlert,
} from "lucide-react";

export const kpiData = [
  {
    label: "Total Transactions",
    value: "34,218",
    change: "+6.8%",
    trend: "up",
    icon: CreditCard,
  },
  {
    label: "Net Deposits",
    value: "$3.6M",
    change: "+5.2%",
    trend: "up",
    icon: Landmark,
  },
  {
    label: "Active Customers",
    value: "24,832",
    change: "+1.9%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Fraud Alerts",
    value: "38",
    change: "-12%",
    trend: "down",
    icon: ShieldAlert,
  },
];