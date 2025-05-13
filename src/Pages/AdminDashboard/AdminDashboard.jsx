import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/ui/app-sidebar";
import { Outlet } from "react-router-dom"; // Add this import

export default function AdminDashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="pl-3 w-full bg-gray-100">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
