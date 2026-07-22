import Sidebar from "@/components/ui/Sidebar";
import Navbar from "@/components/ui/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}