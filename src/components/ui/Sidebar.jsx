"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const NAV_ITEMS = [
  { label: "Overview", href: "/dashboard", icon: "📊" },
  { label: "Analytics", href: "/dashboard/analytics", icon: "📈" },
  { label: "Timeline", href: "/dashboard/timeline", icon: "🕒" },
  { label: "Live Feed", href: "/live", icon: "🎥" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <div className="mb-8">
        <h2 className="text-lg font-bold">AI Co-Pilot</h2>
        <p className="text-xs text-gray-400">Construction Safety</p>
      </div>

      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {user && (
        <div className="border-t border-gray-700 pt-4 mt-4">
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs text-gray-400 capitalize">{user.role}</p>
        </div>
      )}
    </aside>
  );
}